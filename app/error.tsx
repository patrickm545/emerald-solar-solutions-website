"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,_#f3f8f6_0%,_#e7efeb_42%,_#f8fafc_100%)] px-6 py-16 text-slate-950">
      <div className="w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Something went wrong
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">
          We hit an unexpected error.
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          The issue has been contained and no sensitive details are shown here.
          Please try again or return to the homepage.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            onClick={() => reset()}
            type="button"
          >
            Try again
          </button>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            href="/"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
