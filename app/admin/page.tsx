import Link from "next/link";
import { AdminLogoutButton } from "@/components/admin-logout-button";
import { getAdminSession } from "@/lib/admin-session";

export default async function AdminPage() {
  const session = await getAdminSession();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,_#f3f8f6_0%,_#e7efeb_42%,_#f8fafc_100%)] px-6 py-16 text-slate-950">
      <div className="w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Protected Admin Area
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">
          Admin session active
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          This repository does not currently include the full installer dashboard
          or lead-management screens, but the admin route namespace is now
          protected by a signed server-side session.
        </p>
        <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-medium text-slate-700">
            Signed in as: <span className="font-semibold">{session?.username ?? "admin"}</span>
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            href="/"
          >
            Return to website
          </Link>
          <AdminLogoutButton />
        </div>
      </div>
    </main>
  );
}
