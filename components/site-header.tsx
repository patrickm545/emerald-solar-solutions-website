import Link from "next/link";
import { primaryNavItems } from "@/lib/site-content";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full px-6 pt-3 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="relative z-30 rounded-full border border-white/10 bg-slate-950/78 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/68">
          <div className="flex items-center justify-between gap-4">
            <SiteLogo theme="dark" width={230} />
            <details className="group relative xl:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white marker:content-none">
                Menu
              </summary>
              <nav
                aria-label="Mobile Primary"
                className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-64 rounded-[1.5rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_20px_40px_rgba(15,23,42,0.4)] backdrop-blur"
              >
                <div className="flex flex-col gap-1">
                  {primaryNavItems.map((item) => (
                    <Link
                      className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </details>
            <nav aria-label="Primary" className="hidden flex-wrap gap-2 xl:flex">
              {primaryNavItems.map((item) => (
                <Link
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              className="hidden shrink-0 items-center justify-center rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-200 sm:inline-flex"
              href="/contact"
            >
              Book a Demo
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
