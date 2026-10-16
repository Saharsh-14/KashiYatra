import crypto from "crypto";
import { cookies } from "next/headers";

export const AUTH_COOKIE_NAME = "ky_saharsh_auth";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Default secret and password if not explicitly set in environment
const DEFAULT_PASSWORD = "kashi@saharsh2026";
const FALLBACK_SECRET = "kashi_analytics_secure_hmac_secret_key_varanasi_2026";

function getSecretKey(): string {
  return process.env.ANALYTICS_SECRET_KEY || process.env.SAHARSH_SECRET_KEY || FALLBACK_SECRET;
}

export function getConfiguredPassword(): string {
  return process.env.SAHARSH_ANALYTICS_PASSWORD || process.env.ANALYTICS_PASSWORD || DEFAULT_PASSWORD;
}

// In-memory brute-force protection (per IP)
interface AttemptRecord {
  count: number;
  blockedUntil: number;
}
const attemptsMap = new Map<string, AttemptRecord>();

export function checkRateLimit(ip: string): { allowed: boolean; waitSeconds?: number } {
  const now = Date.now();
  const record = attemptsMap.get(ip);

  if (record && record.blockedUntil > now) {
    const waitSeconds = Math.ceil((record.blockedUntil - now) / 1000);
    return { allowed: false, waitSeconds };
  }

  return { allowed: true };
}

export function registerFailedAttempt(ip: string): void {
  const now = Date.now();
  const record = attemptsMap.get(ip) || { count: 0, blockedUntil: 0 };

  record.count += 1;
  if (record.count >= 5) {
    // Block for 5 minutes after 5 failed attempts
    record.blockedUntil = now + 5 * 60 * 1000;
  }
  attemptsMap.set(ip, record);
}

export function resetFailedAttempts(ip: string): void {
  attemptsMap.delete(ip);
}

/**
 * Timing-safe password verification to guard against timing attacks.
 */
export function verifyPassword(inputPassword: string): boolean {
  const expected = getConfiguredPassword();
  if (typeof inputPassword !== "string" || inputPassword.length === 0) {
    return false;
  }

  const inputBuffer = Buffer.from(inputPassword);
  const expectedBuffer = Buffer.from(expected);

  if (inputBuffer.length !== expectedBuffer.length) {
    // Constant time dummy comparison
    crypto.timingSafeEqual(inputBuffer, inputBuffer);
    return false;
  }

  return crypto.timingSafeEqual(inputBuffer, expectedBuffer);
}

/**
 * Creates a cryptographically signed authentication token.
 * Format: `<timestamp>.<hmacHex>`
 */
export function createAuthToken(): string {
  const timestamp = Date.now().toString();
  const secret = getSecretKey();
  const hmac = crypto.createHmac("sha256", secret).update(timestamp).digest("hex");
  return `${timestamp}.${hmac}`;
}

/**
 * Validates the authentication token signature and freshness.
 */
export function verifyAuthToken(token: string | null | undefined): boolean {
  if (!token || typeof token !== "string") {
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 2) {
    return false;
  }

  const [timestampStr, receivedHmac] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) {
    return false;
  }

  // Token valid for 30 days
  const now = Date.now();
  if (now - timestamp > COOKIE_MAX_AGE * 1000 || timestamp > now + 60000) {
    return false;
  }

  const secret = getSecretKey();
  const expectedHmac = crypto.createHmac("sha256", secret).update(timestampStr).digest("hex");

  const expectedBuffer = Buffer.from(expectedHmac);
  const receivedBuffer = Buffer.from(receivedHmac);

  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}

/**
 * Next.js server-side helper to check if incoming request has valid auth cookie.
 */
export async function isServerAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  return verifyAuthToken(token);
}
