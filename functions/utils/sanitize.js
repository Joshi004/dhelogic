/**
 * Input sanitization utilities for security
 * Protects against XSS, HTML injection, and phishing attacks
 */

/**
 * Remove all HTML tags from input
 * @param {string} str - Input string
 * @returns {string} String without HTML tags
 */
function stripHtmlTags(str) {
  if (typeof str !== 'string') return '';
  
  // Remove HTML tags
  let cleaned = str.replace(/<[^>]*>/gi, '');
  
  // Remove HTML entities
  cleaned = cleaned.replace(/&lt;/gi, '');
  cleaned = cleaned.replace(/&gt;/gi, '');
  cleaned = cleaned.replace(/&quot;/gi, '"');
  cleaned = cleaned.replace(/&#x27;/gi, "'");
  cleaned = cleaned.replace(/&#x2F;/gi, '/');
  
  return cleaned;
}

/**
 * Remove JavaScript event handlers
 * @param {string} str - Input string
 * @returns {string} String without event handlers
 */
function stripEventHandlers(str) {
  if (typeof str !== 'string') return '';
  
  const eventPatterns = [
    /on\w+\s*=/gi,  // onclick=, onerror=, onload=, etc.
    /on\w+\s*\(/gi, // onclick(, onerror(, etc.
  ];
  
  let cleaned = str;
  eventPatterns.forEach(pattern => {
    cleaned = cleaned.replace(pattern, '');
  });
  
  return cleaned;
}

/**
 * Remove dangerous URLs (javascript:, data:, etc.)
 * @param {string} str - Input string
 * @returns {string} String without dangerous URLs
 */
function stripJsUrls(str) {
  if (typeof str !== 'string') return '';
  
  const dangerousPatterns = [
    /javascript:/gi,
    /data:text\/html/gi,
    /vbscript:/gi,
    /file:/gi,
  ];
  
  let cleaned = str;
  dangerousPatterns.forEach(pattern => {
    cleaned = cleaned.replace(pattern, '');
  });
  
  return cleaned;
}

/**
 * Decode URL-encoded or Unicode-encoded attacks
 * @param {string} str - Input string
 * @returns {string} Decoded and sanitized string
 */
function decodeAndSanitize(str) {
  if (typeof str !== 'string') return '';
  
  let decoded = str;
  
  try {
    // Decode URL encoding (%3C = <, etc.)
    decoded = decodeURIComponent(decoded);
  } catch (e) {
    // If decoding fails, use original string
  }
  
  // Replace Unicode encoded characters
  decoded = decoded.replace(/\\u003c/gi, ''); // Unicode <
  decoded = decoded.replace(/\\u003e/gi, ''); // Unicode >
  decoded = decoded.replace(/\\x3c/gi, '');   // Hex <
  decoded = decoded.replace(/\\x3e/gi, '');   // Hex >
  
  // Remove null bytes
  decoded = decoded.replace(/\0/g, '');
  
  return decoded;
}

/**
 * Detect suspicious patterns (for logging, not blocking)
 * @param {string} str - Input string
 * @returns {boolean} True if suspicious content detected
 */
export function detectSuspiciousPatterns(str) {
  if (typeof str !== 'string') return false;
  
  const suspiciousPatterns = [
    /<script/i,
    /<iframe/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
    /eval\(/i,
    /document\./i,
    /window\./i,
    /<img[^>]+on\w+/i,
    /data:text\/html/i,
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(str));
}

/**
 * Main sanitization function - removes all dangerous content
 * @param {string} input - Raw user input
 * @returns {string} Sanitized safe string
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  let sanitized = input;
  
  // Apply all sanitization steps
  sanitized = decodeAndSanitize(sanitized);
  sanitized = stripHtmlTags(sanitized);
  sanitized = stripEventHandlers(sanitized);
  sanitized = stripJsUrls(sanitized);
  
  // Remove HTML comments
  sanitized = sanitized.replace(/<!--.*?-->/g, '');
  
  // Collapse multiple spaces to single space
  sanitized = sanitized.replace(/\s+/g, ' ');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  return sanitized;
}

