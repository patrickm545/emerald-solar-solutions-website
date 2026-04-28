import { AdminLoginForm } from "@/components/admin-login-form";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams?: Promise<{
    next?: string | string[];
  }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const nextPath = Array.isArray(resolvedSearchParams?.next)
    ? resolvedSearchParams?.next[0]
    : resolvedSearchParams?.next;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,_#f3f8f6_0%,_#e7efeb_42%,_#f8fafc_100%)] px-6 py-16 text-slate-950">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Admin Access
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">
          Sign in to continue
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Protected admin routes require a valid server-side session.
        </p>
        <AdminLoginForm nextPath={nextPath} />
      </div>
    </main>
  );
}
