import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

const platformLinks = [
  { label: "SolarGRANT Pro", href: "/features" },
  { label: "Quote Workflow", href: "/quote-generator" },
  { label: "Grant Workflow", href: "/seai-grant-workflow" },
  { label: "Sales Follow-Up", href: "/ai-sales" },
  { label: "Installer Workflows", href: "/project-management" },
  { label: "Website Intake", href: "/free-website" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Demonstration", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1F33] px-6 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.9fr_0.8fr]">
        <div>
          <SiteLogo theme="dark" width={300} />
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
            Clada Systems is an Irish software company building workflow
            automation tools for renewable energy businesses. SolarGRANT Pro
            helps installers manage leads, grant eligibility, quotations,
            customer workflows, and AI-assisted sales follow-up.
          </p>
          <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-[#B8D0C2]">
            Practical software for installer teams, not a homeowner installation service.
          </p>
          <Link className="button-primary mt-7" href="/contact">
            Book a Demonstration
          </Link>
        </div>

        <nav aria-label="Software platform">
          <p className="text-sm font-semibold uppercase text-[#A7C3B2]">
            Platform
          </p>
          <div className="mt-5 grid gap-3">
            {platformLinks.map((item) => (
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

        <nav aria-label="Company">
          <p className="text-sm font-semibold uppercase text-[#A7C3B2]">
            Company
          </p>
          <div className="mt-5 grid gap-3">
            {companyLinks.map((item) => (
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
      </div>
    </footer>
  );
}
