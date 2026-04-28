import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const sessionCookieName = "emerald_admin_session";
const sessionDurationMs = 12 * 60 * 60 * 1000;

type AdminSessionPayload = {
  expiresAt: number;
  username: string;
};

export type AdminSessionCookieOptions = {
  maxAge: number;
  name: string;
  path: string;
  sameSite: "lax";
  secure: boolean;
};

export async function getAdminSession() {
  const sessionSecret = getRequiredEnvValue("ADMIN_SESSION_SECRET");
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(sessionCookieName)?.value;

  if (!sessionCookie) {
    return null;
  }

  return parseAdminSessionCookie(sessionCookie, sessionSecret);
}

export function createAdminSessionCookie(username: string) {
  const sessionSecret = getRequiredEnvValue("ADMIN_SESSION_SECRET");
  const expiresAt = Date.now() + sessionDurationMs;
  const payload: AdminSessionPayload = {
    expiresAt,
    username,
  };

  const encodedPayload = encodePayload(payload);
  const signature = signValue(encodedPayload, sessionSecret);

  return {
    name: sessionCookieName,
    value: `${encodedPayload}.${signature}`,
    options: getAdminSessionCookieOptions(expiresAt),
  };
}

export function clearAdminSessionCookie() {
  return {
    name: sessionCookieName,
    value: "",
    options: {
      ...getAdminSessionCookieOptions(Date.now()),
      expires: new Date(0),
      maxAge: 0,
    },
  };
}

export function verifyAdminSessionCookie(value: string) {
  const sessionSecret = getRequiredEnvValue("ADMIN_SESSION_SECRET");
  return parseAdminSessionCookie(value, sessionSecret);
}

export function getAdminSessionCookieName() {
  return sessionCookieName;
}

function parseAdminSessionCookie(value: string, sessionSecret: string) {
  const separatorIndex = value.lastIndexOf(".");

  if (separatorIndex <= 0) {
    return null;
  }

  const encodedPayload = value.slice(0, separatorIndex);
  const providedSignature = value.slice(separatorIndex + 1);
  const expectedSignature = signValue(encodedPayload, sessionSecret);

  if (!safeEquals(providedSignature, expectedSignature)) {
    return null;
  }

  try {
    const payload = decodePayload(encodedPayload);

    if (!payload.username || payload.expiresAt <= Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

function getAdminSessionCookieOptions(expiresAt: number) {
  return {
    httpOnly: true,
    maxAge: Math.max(0, Math.floor((expiresAt - Date.now()) / 1000)),
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(expiresAt),
  };
}

function encodePayload(payload: AdminSessionPayload) {
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

function decodePayload(value: string): AdminSessionPayload {
  return JSON.parse(
    Buffer.from(value, "base64url").toString("utf8"),
  ) as AdminSessionPayload;
}

function signValue(value: string, sessionSecret: string) {
  return createHmac("sha256", sessionSecret).update(value).digest("base64url");
}

function safeEquals(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function getRequiredEnvValue(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}
