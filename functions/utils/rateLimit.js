/**
 * Rate limiting utilities using Cloudflare KV
 * 
 * Limits:
 * - 3 requests per minute per IP
 * - 10 requests per hour per IP
 */

const MINUTE_LIMIT = 2;
const HOUR_LIMIT = 5;
const MINUTE_WINDOW = 60; // seconds
const HOUR_WINDOW = 3600; // seconds

/**
 * Check if an IP address has exceeded rate limits
 * @param {KVNamespace} kv - Cloudflare KV namespace
 * @param {string} ip - Client IP address
 * @returns {Promise<{allowed: boolean, reason?: string}>}
 */
export async function checkRateLimit(kv, ip) {
  if (!ip || ip === 'unknown') {
    // If we can't get IP, allow the request (fail open)
    return { allowed: true };
  }

  const minuteKey = `rate:minute:${ip}`;
  const hourKey = `rate:hour:${ip}`;

  try {
    // Get current counts
    const [minuteCount, hourCount] = await Promise.all([
      kv.get(minuteKey),
      kv.get(hourKey),
    ]);

    const currentMinuteCount = minuteCount ? parseInt(minuteCount, 10) : 0;
    const currentHourCount = hourCount ? parseInt(hourCount, 10) : 0;

    // Check minute limit
    if (currentMinuteCount >= MINUTE_LIMIT) {
      return {
        allowed: false,
        reason: `Rate limit exceeded: ${MINUTE_LIMIT} requests per minute`,
      };
    }

    // Check hour limit
    if (currentHourCount >= HOUR_LIMIT) {
      return {
        allowed: false,
        reason: `Rate limit exceeded: ${HOUR_LIMIT} requests per hour`,
      };
    }

    return { allowed: true };
  } catch (error) {
    // If KV fails, fail open (allow the request)
    console.error('Rate limit check error:', error);
    return { allowed: true };
  }
}

/**
 * Record a request for an IP address
 * @param {KVNamespace} kv - Cloudflare KV namespace
 * @param {string} ip - Client IP address
 * @returns {Promise<void>}
 */
export async function recordRequest(kv, ip) {
  if (!ip || ip === 'unknown') {
    return;
  }

  const minuteKey = `rate:minute:${ip}`;
  const hourKey = `rate:hour:${ip}`;

  try {
    // Get current counts
    const [minuteCount, hourCount] = await Promise.all([
      kv.get(minuteKey),
      kv.get(hourKey),
    ]);

    const currentMinuteCount = minuteCount ? parseInt(minuteCount, 10) : 0;
    const currentHourCount = hourCount ? parseInt(hourCount, 10) : 0;

    // Increment counters with TTL (auto-expiry)
    await Promise.all([
      kv.put(minuteKey, String(currentMinuteCount + 1), {
        expirationTtl: MINUTE_WINDOW,
      }),
      kv.put(hourKey, String(currentHourCount + 1), {
        expirationTtl: HOUR_WINDOW,
      }),
    ]);
  } catch (error) {
    // If recording fails, just log it - don't block the request
    console.error('Rate limit recording error:', error);
  }
}

