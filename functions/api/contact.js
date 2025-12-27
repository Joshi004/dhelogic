/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Sends contact form submissions to an email inbox using Resend.
 * Includes Cloudflare Turnstile bot protection and rate limiting.
 *
 * Required env vars (set in Cloudflare Pages -> Settings -> Environment variables):
 * - RESEND_API_KEY
 * - TURNSTILE_SECRET_KEY (for bot verification)
 *
 * Optional env vars:
 * - CONTACT_TO_EMAIL (defaults to thinkjoshi@gmail.com)
 * - CONTACT_FROM_EMAIL (defaults to noreply@contact.techsergy.com)
 *
 * Rate limits:
 * - 3 requests per minute per IP
 * - 10 requests per hour per IP
 */

import { checkRateLimit, recordRequest } from '../utils/rateLimit.js';
import { sanitizeInput, detectSuspiciousPatterns } from '../utils/sanitize.js';

const DEFAULT_TO_EMAIL = 'thinkjoshi@gmail.com';

// Allowed CORS origins for security
const ALLOWED_ORIGINS = [
  'https://techsergy.com',
  'https://www.techsergy.com',
];

function jsonResponse(status, body, requestOrigin = '') {
  // Check if origin is in whitelist
  const allowedOrigin = ALLOWED_ORIGINS.includes(requestOrigin) 
    ? requestOrigin 
    : ALLOWED_ORIGINS[0]; // Default to first allowed origin

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': allowedOrigin,
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  });
}

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function clampString(v, maxLen) {
  if (typeof v !== 'string') return '';
  return v.length > maxLen ? v.slice(0, maxLen) : v;
}

// Handle preflight OPTIONS request
export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') || '';
  
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) 
    ? origin 
    : ALLOWED_ORIGINS[0];

  return new Response(null, {
    status: 204,
    headers: {
      'access-control-allow-origin': allowedOrigin,
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  });
}

// Handle POST request
export async function onRequestPost(context) {
  const { request, env } = context;

  // Extract origin for CORS validation (outside try block for catch access)
  const origin = request.headers.get('Origin') || '';

  try {
    // Extract client IP for rate limiting
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

    // Check rate limit
    if (env.RATE_LIMIT) {
      const rateLimitCheck = await checkRateLimit(env.RATE_LIMIT, clientIP);
      if (!rateLimitCheck.allowed) {
        return jsonResponse(429, {
          ok: false,
          error: rateLimitCheck.reason || 'Too many requests. Please try again later.',
        }, origin);
      }
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse(400, { ok: false, error: 'Invalid JSON body.' }, origin);
    }

    // Honeypot: bots fill hidden fields. If filled, pretend success.
    if (isNonEmptyString(body?.website)) {
      return jsonResponse(200, { ok: true });
    }

    // Verify Turnstile token
    const turnstileToken = body?.['cf-turnstile-response'];
    const turnstileSecret = env?.TURNSTILE_SECRET_KEY;

    if (turnstileSecret) {
      if (!isNonEmptyString(turnstileToken)) {
        return jsonResponse(400, {
          ok: false,
          error: 'Bot verification required. Please refresh the page and try again.',
        }, origin);
      }

      try {
        const turnstileResp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
            remoteip: request.headers.get('CF-Connecting-IP') || '',
          }),
        });

        const turnstileResult = await turnstileResp.json();

        if (!turnstileResult.success) {
          return jsonResponse(400, {
            ok: false,
            error: 'Bot verification failed. Please try again.',
          }, origin);
        }
      } catch (err) {
        // If Turnstile verification fails due to network error, reject to be safe
        return jsonResponse(500, {
          ok: false,
          error: 'Unable to verify request. Please try again.',
        }, origin);
      }
    }

    // Sanitize all inputs to prevent XSS and injection attacks
    const name = sanitizeInput(clampString(body?.name ?? '', 120));
    const email = sanitizeInput(clampString(body?.email ?? '', 254));
    const company = sanitizeInput(clampString(body?.company ?? '', 200));
    const service = sanitizeInput(clampString(body?.service ?? '', 50));
    const message = sanitizeInput(clampString(body?.message ?? '', 5000));

    // Detect and log suspicious content
    const rawInputs = [
      body?.name ?? '',
      body?.email ?? '',
      body?.company ?? '',
      body?.message ?? '',
    ];
    
    const hasSuspiciousContent = rawInputs.some(input => detectSuspiciousPatterns(input));
    
    if (hasSuspiciousContent) {
      console.warn('[Security] Suspicious content detected', {
        ip: clientIP,
        timestamp: new Date().toISOString(),
        fields: {
          name: detectSuspiciousPatterns(body?.name ?? ''),
          email: detectSuspiciousPatterns(body?.email ?? ''),
          company: detectSuspiciousPatterns(body?.company ?? ''),
          message: detectSuspiciousPatterns(body?.message ?? ''),
        },
      });
    }

    const errors = {};
    if (!isNonEmptyString(name)) errors.name = 'Name is required.';
    if (!isValidEmail(email)) errors.email = 'Valid email is required.';
    if (!isNonEmptyString(service)) errors.service = 'Service is required.';
    if (!isNonEmptyString(message) || message.length < 20) errors.message = 'Message must be at least 20 characters.';

    if (Object.keys(errors).length > 0) {
      return jsonResponse(400, { ok: false, error: 'Validation failed.', fields: errors }, origin);
    }

    const resendApiKey = env?.RESEND_API_KEY;
    if (!isNonEmptyString(resendApiKey)) {
      return jsonResponse(500, {
        ok: false,
        error: 'Server email provider is not configured (missing RESEND_API_KEY).',
      }, origin);
    }

    const toEmail = isNonEmptyString(env?.CONTACT_TO_EMAIL) ? env.CONTACT_TO_EMAIL : DEFAULT_TO_EMAIL;
    const fromEmail = isNonEmptyString(env?.CONTACT_FROM_EMAIL) ? env.CONTACT_FROM_EMAIL : 'noreply@contact.techsergy.com';

    const subject = `[Website Contact] ${name} — ${service}`;
    const text = [
      'TechSergy New contact form submission:',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || '-'}`,
      `Service: ${service}`,
      '',
      'Message:',
      message,
      '',
      `Received: ${new Date().toISOString()}`,
    ].join('\n');

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${resendApiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        text,
        reply_to: email,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => '');
      return jsonResponse(502, {
        ok: false,
        error: 'Email provider request failed.',
        providerStatus: resp.status,
        providerBody: errText.slice(0, 2000),
      }, origin);
    }

    // Record successful request for rate limiting
    if (env.RATE_LIMIT) {
      await recordRequest(env.RATE_LIMIT, clientIP);
    }

    return jsonResponse(200, { ok: true }, origin);
  } catch (err) {
    return jsonResponse(500, { ok: false, error: 'Unexpected server error.' }, origin);
  }
}

