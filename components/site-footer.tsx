import Link from "next/link";
import { servicePages } from "@/lib/site-content";
import { SiteLogo } from "@/components/site-logo";

const coreLinks = [
  { label: "Features", href: "/features" },
  { label: "Quote Generator", href: "/quote-generator" },
  { label: "SEAI Grant Workflow", href: "/seai-grant-workflow" },
  { label: "Project Management", href: "/project-management" },
  { label: "AI Sales", href: "/ai-sales" },
  { label: "Pricing", href: "/pricing" },
];

const useCaseSlugs = new Set([
  "solar-panels",
  "domestic-solar",
  "commercial-solar",
  "battery-storage",
  "ev-charger-installation",
]);

export function SiteFooter() {
  const useCasePages = servicePages.filter((page) => useCaseSlugs.has(page.slug));

  return (
    <footer className="bg-slate-950 px-6 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_0.8fr_0.85fr_0.8fr]">
        <div>
          <SiteLogo theme="light" width={320} />
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
            AI-powered sales and project management software for solar
            installation companies in Ireland. Generate, qualify, quote, and
            manage more homeowner leads from one workflow.
          </p>
          <Link
            className="mt-7 inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            href="/contact"
          >
            Book a Software Demo
          </Link>
        </div>

        <nav aria-label="Software platform">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Platform
          </p>
          <div className="mt-5 grid gap-3">
            {coreLinks.map((item) => (
              <Link
                className="text-sm text-slate-300 transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Installer use cases">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Use Cases
          </p>
          <div className="mt-5 grid gap-3">
            {useCasePages.map((service) => (
              <Link
                className="text-sm text-slate-300 transition hover:text-white"
                href={`/${service.slug}`}
                key={service.slug}
              >
                {service.navTitle}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Contact">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Contact
          </p>
          <div className="mt-5 grid gap-3">
            <Link
              className="text-sm text-slate-300 transition hover:text-white"
              href="/contact"
            >
              Book a Demo
            </Link>
            <Link
              className="text-sm text-slate-300 transition hover:text-white"
              href="/free-website-for-solar-installers"
            >
              Free Website Included
            </Link>
            <Link
              className="text-sm text-slate-300 transition hover:text-white"
              href="/pricing"
            >
              €500/month Package
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
