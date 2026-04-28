import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { createAdminSessionCookie } from "@/lib/admin-session";
import { normalizeAdminLoginValues, validateAdminLogin } from "@/lib/admin-validation";
import { enforceRateLimit } from "@/lib/rate-limit";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

const loginRateLimitWindowMs = 15 * 60 * 1000;
const maxLoginAttemptsPerWindow = 5;

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const clientIp = getClientIpAddress(request);
  const rateLimit = enforceRateLimit(
    `admin-login:${clientIp}`,
    maxLoginAttemptsPerWindow,
    loginRateLimitWindowMs,
  );

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: "Unable to sign in with those credentials.",
      },
      {
        status: 429,
        headers: {
          ...noStoreHeaders,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      {
        error: "Unsupported request format.",
      },
      {
        status: 415,
        headers: noStoreHeaders,
      },
    );
  }

  try {
    const body = await request.json();
    const credentials = normalizeAdminLoginValues(body);
    const fieldErrors = validateAdminLogin(credentials);

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          error: "Enter both username and password.",
          fieldErrors,
        },
        {
          status: 400,
          headers: noStoreHeaders,
        },
      );
    }

    const configuredUsername = process.env.ADMIN_USERNAME?.trim();
    const configuredPassword = process.env.ADMIN_PASSWORD?.trim();
    const sessionSecret = process.env.ADMIN_SESSION_SECRET?.trim();

    if (!configuredUsername || !configuredPassword || !sessionSecret) {
      return NextResponse.json(
        {
          error: "Admin sign-in is not configured.",
        },
        {
          status: 503,
          headers: noStoreHeaders,
        },
      );
    }

    if (
      !safeEquals(credentials.username, configuredUsername) ||
      !safeEquals(credentials.password, configuredPassword)
    ) {
      return NextResponse.json(
        {
          error: "Unable to sign in with those credentials.",
        },
        {
          status: 401,
          headers: noStoreHeaders,
        },
      );
    }

    const sessionCookie = createAdminSessionCookie(credentials.username);
    const response = NextResponse.json(
      {
        ok: true,
      },
      {
        headers: noStoreHeaders,
      },
    );

    response.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.options);

    return response;
  } catch {
    return NextResponse.json(
      {
        error: "Unable to sign in right now. Please try again in a moment.",
      },
      {
        status: 500,
        headers: noStoreHeaders,
      },
    );
  }
}

function getClientIpAddress(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const [firstAddress] = forwardedFor.split(",");

    if (firstAddress) {
      return firstAddress.trim();
    }
  }

  return request.headers.get("x-real-ip")?.trim() ?? "unknown";
}

function safeEquals(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}
