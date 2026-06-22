import Link from "next/link";
import { primaryNavItems } from "@/lib/site-content";
import { SiteLogo } from "@/components/site-logo";

const navLinkClass =
  "rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap text-slate-700 transition hover:bg-[#F5F7F8] hover:text-[#0B1F33]";

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#D9E1E5]/80 bg-white/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-white/90 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="relative z-30 py-4">
          <div className="flex items-center justify-between gap-5 lg:gap-8">
            <div className="shrink-0">
              <SiteLogo theme="light" width={190} />
            </div>

            <nav
              aria-label="Primary"
              className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex"
            >
              {primaryNavItems.map((item) => (
                <Link className={navLinkClass} href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                className="hidden items-center justify-center whitespace-nowrap rounded-lg bg-[#1F4D3A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#173A2C] md:inline-flex"
                href="/contact"
              >
                Book a Demonstration
              </Link>

              <details className="group relative flex items-center lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-[#D9E1E5] bg-white px-4 py-2.5 text-sm font-semibold text-[#0B1F33] marker:content-none hover:bg-[#F5F7F8] [&::-webkit-details-marker]:hidden">
                  Menu
                </summary>
                <nav
                  aria-label="Mobile Primary"
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-[#D9E1E5] bg-white p-3 shadow-[0_20px_45px_rgba(11,31,51,0.16)]"
                >
                  <div className="flex flex-col gap-1">
                    <Link
                      className="mb-2 rounded-lg bg-[#1F4D3A] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#173A2C]"
                      href="/contact"
                    >
                      Book a Demonstration
                    </Link>
                    {primaryNavItems.map((item) => (
                      <Link
                        className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#F5F7F8] hover:text-[#0B1F33]"
                        href={item.href}
                        key={item.href}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>
              </details>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
