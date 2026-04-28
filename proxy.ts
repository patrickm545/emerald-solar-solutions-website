import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getAdminSessionCookieName,
  verifyAdminSessionCookie,
} from "@/lib/admin-session";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const configuredUsername = process.env.ADMIN_USERNAME?.trim();
  const configuredPassword = process.env.ADMIN_PASSWORD?.trim();
  const sessionSecret = process.env.ADMIN_SESSION_SECRET?.trim();

  if (!configuredUsername || !configuredPassword || !sessionSecret) {
    return pathname.startsWith("/api/")
      ? NextResponse.json(
          {
            error: "Admin authentication is not configured.",
          },
          { status: 503 },
        )
      : new NextResponse("Admin authentication is not configured.", {
          status: 503,
        });
  }

  const sessionCookie = request.cookies.get(getAdminSessionCookieName())?.value;

  if (sessionCookie && verifyAdminSessionCookie(sessionCookie)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      {
        error: "Authentication required.",
      },
      { status: 401 },
    );
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", `${pathname}${search}`);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/installer-review-emerald/:path*",
    "/dashboard/:path*",
    "/api/admin/:path*",
    "/api/dashboard/:path*",
    "/api/leads/:path*",
    "/api/application-pack",
    "/api/export/:path*",
    "/api/submission-package/:path*",
  ],
};
