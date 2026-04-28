import { NextResponse } from "next/server";
import { clearAdminSessionCookie } from "@/lib/admin-session";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

export async function POST() {
  const response = NextResponse.json(
    {
      ok: true,
    },
    {
      headers: noStoreHeaders,
    },
  );
  const sessionCookie = clearAdminSessionCookie();

  response.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.options);

  return response;
}
