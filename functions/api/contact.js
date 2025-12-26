/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Sends contact form submissions to an email inbox using Resend.
 *
 * Required env vars (set in Cloudflare Pages -> Settings -> Environment variables):
 * - RESEND_API_KEY
 *
 * Optional env vars:
 * - CONTACT_TO_EMAIL (defaults to thinkjoshi@gmail.com)
 * - CONTACT_FROM_EMAIL (defaults to onboarding@resend.dev; for production use a verified sender)
 */

const DEFAULT_TO_EMAIL = 'thinkjoshi@gmail.com';

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
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
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  });
}

// Handle POST request
export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse(400, { ok: false, error: 'Invalid JSON body.' });
    }

    // Honeypot: bots fill hidden fields. If filled, pretend success.
    if (isNonEmptyString(body?.website)) {
      return jsonResponse(200, { ok: true });
    }

    const name = clampString(body?.name ?? '', 120).trim();
    const email = clampString(body?.email ?? '', 254).trim();
    const company = clampString(body?.company ?? '', 200).trim();
    const service = clampString(body?.service ?? '', 50).trim();
    const message = clampString(body?.message ?? '', 5000).trim();

    const errors = {};
    if (!isNonEmptyString(name)) errors.name = 'Name is required.';
    if (!isValidEmail(email)) errors.email = 'Valid email is required.';
    if (!isNonEmptyString(service)) errors.service = 'Service is required.';
    if (!isNonEmptyString(message) || message.length < 20) errors.message = 'Message must be at least 20 characters.';

    if (Object.keys(errors).length > 0) {
      return jsonResponse(400, { ok: false, error: 'Validation failed.', fields: errors });
    }

    const resendApiKey = env?.RESEND_API_KEY;
    if (!isNonEmptyString(resendApiKey)) {
      return jsonResponse(500, {
        ok: false,
        error: 'Server email provider is not configured (missing RESEND_API_KEY).',
      });
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
      });
    }

    return jsonResponse(200, { ok: true });
  } catch (err) {
    return jsonResponse(500, { ok: false, error: 'Unexpected server error.' });
  }
}

