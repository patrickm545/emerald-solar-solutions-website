import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getServicePage,
  homepageFaqs,
  siteConfig,
  type LocationPageContent,
  type ServicePageContent,
} from "@/lib/site-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLocationServiceSchema,
  createOrganizationSchema,
  createQuoteGeneratorServiceSchema,
  createServiceSchema,
  createSoftwareApplicationSchema,
  getCoreSoftwarePages,
  homepageSchemas,
} from "@/lib/seo";

const problemPoints = [
  "Poor lead quality",
  "Slow follow-up",
  "Homeowner back-and-forth",
  "SEAI paperwork delays",
  "Quote delays",
  "Messy spreadsheets",
  "Disconnected tools",
];

const solutionPoints = [
  "Capture leads",
  "Qualify homeowners",
  "Use quote generation software",
  "Manage SEAI workflow software",
  "Track projects in project management software",
  "Automate follow-up",
  "Improve the solar installer workflow software",
];

const featureCards = [
  {
    title: "AI-Assisted Lead Generation",
    copy: "Use AI-assisted sales software to capture better solar enquiries and help your team prioritise leads that are ready for a real conversation.",
    href: "/ai-sales",
  },
  {
    title: "Solar Quote Generator",
    copy: "Use quote generation software to collect homeowner details, estimate system size and savings, and prepare better sales calls.",
    href: "/quote-generator",
  },
  {
    title: "SEAI Grant Streamline Form",
    copy: "Use SEAI workflow software to gather grant-related details earlier and reduce missing information before admin work begins.",
    href: "/seai-grant-workflow",
  },
  {
    title: "Project Management Dashboard",
    copy: "Track lead, quote, site visit, project, grant paperwork, and customer communication status in project management software.",
    href: "/project-management",
  },
  {
    title: "Homeowner Onboarding",
    copy: "Give homeowner leads a clearer first step while collecting the details your team usually chases.",
    href: "/features",
  },
  {
    title: "Lead Follow-Up Automation",
    copy: "Keep opportunities moving with a structured follow-up workflow that reduces missed leads.",
    href: "/ai-sales",
  },
  {
    title: "Free Website Included",
    copy: "Every installer on the €500/month package gets a professional lead-generation website included.",
    href: "/free-website-for-solar-installers",
  },
];

const packageItems = [
  "AI-assisted sales software",
  "Solar quote generation software",
  "SEAI workflow software",
  "Project management software",
  "Lead capture system",
  "Free professional website",
  "Onboarding support",
];

export function HomePage() {
  return (
    <>
      {homepageSchemas.map((schema, index) => (
        <JsonLd data={schema} key={index} />
      ))}
      <MarketingShell>
        <section className="relative isolate bg-slate-950 text-white">
          <div className="absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_rgba(6,78,59,0.86)_0%,_rgba(15,23,42,0.98)_68%,_rgba(15,23,42,0)_100%)]" />
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-4xl">
                <p className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
                  AI-powered sales and project management software
                </p>
                <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  AI-Powered Sales Software for Solar Installers
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">
                  Emerald Solar Solutions helps solar businesses generate
                  better solar leads, qualify homeowners faster, use quote
                  generation software, streamline SEAI workflow software, and
                  manage projects from one simple SaaS platform.
                </p>
                <p className="mt-6 max-w-2xl rounded-2xl border border-amber-200/25 bg-amber-200/10 px-5 py-4 text-sm font-semibold leading-6 text-amber-100">
                  Free professional website included when you sign up to the
                  €500/month package.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                    href="/contact"
                  >
                    Book a Software Demo
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/14 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                    href="/features"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a]/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.45)] sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                      Installer workflow
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Lead to quote to managed job
                    </h2>
                  </div>
                  <Image
                    alt="Emerald Solar Solutions mark"
                    height={56}
                    src="/emerald-mark.svg"
                    width={56}
                  />
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    "AI-assisted sales software",
                    "Quote generation software",
                    "SEAI workflow software",
                    "Project management software",
                  ].map((highlight) => (
                    <div
                      className="rounded-[1.35rem] border border-white/10 bg-[#0f2529] px-5 py-4 text-sm font-semibold text-slate-100"
                      key={highlight}
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
                <p className="mt-6 rounded-[1.6rem] bg-slate-950 p-5 text-sm leading-7 text-slate-300">
                  Built for solar installation companies in Ireland. Not a
                  direct homeowner solar service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-kicker">About The Software Company</p>
              <h2 className="section-title">
                Emerald Solar Solutions Builds Workflow Software For Solar
                Installers
              </h2>
            </div>
            <div className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <p className="text-lg leading-8 text-slate-200">
                Emerald Solar Solutions is an Irish software company building
                AI-assisted sales, quote generation, SEAI workflow, and project
                management tools for solar installation companies. The mission
                is to help solar installers scale by reducing admin, automating
                repeat workflow steps, and giving sales teams a cleaner way to
                manage leads and projects.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {[
                  { href: "/about", label: "About Emerald Solar Solutions" },
                  { href: "/features", label: "Explore Features" },
                  { href: "/pricing", label: "View Pricing" },
                  { href: "/quote-generator", label: "Quote Generator" },
                ].map((item) => (
                  <Link
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-kicker">The Problem</p>
              <h2 className="section-title">
                Too Much Installer Time Gets Lost Before The Job Is Even Won
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Solar teams often lose momentum because the sales process lives
                across calls, inboxes, forms, spreadsheets, and disconnected
                tools.
              </p>
            </div>
            <FeatureList items={problemPoints} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-emerald-300">The Solution</p>
              <h2 className="section-title text-white">
                One Workflow For Sales, SEAI Admin, Quotes, And Projects
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Emerald Solar Solutions helps installer companies create a more
                reliable path from enquiry to qualified lead, quote, follow-up,
                and booked installation project.
              </p>
            </div>
            <FeatureList items={solutionPoints} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="features">
          <div className="max-w-3xl">
            <p className="section-kicker">Key Features</p>
            <h2 className="section-title">
              Built For The Real Solar Installer Sales Cycle
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => (
              <LinkCard
                description={feature.copy}
                href={feature.href}
                key={feature.title}
                title={feature.title}
              />
            ))}
          </div>
        </section>

        <section className="bg-[#0f1f24] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="section-kicker text-emerald-300">
                Free Website Included
              </p>
              <h2 className="section-title text-white">
                A Professional Lead-Generation Website Comes With The Package
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-lg leading-8 text-slate-200">
                Every installer who signs up to the €500/month package gets a
                professional lead-generation website included, built to capture
                solar enquiries and send them directly into your workflow.
              </p>
              <Link
                className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                href="/free-website-for-solar-installers"
              >
                Get Your Free Website Included
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">How It Works</p>
            <h2 className="section-title">
              Set Up Once, Then Run A Cleaner Sales Workflow
            </h2>
          </div>
          <StepGrid
            items={[
              "We set up your website and lead capture system",
              "Leads are qualified through the quote and SEAI workflow",
              "Your team manages quotes, follow-ups, and projects in one place",
            ]}
          />
        </section>

        <PricingSection />

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title">Solar Installer Software FAQ</h2>
            </div>
            <FaqGrid faqs={homepageFaqs} />
          </div>
        </section>

        <ContactCta
          copy="Ready to turn more solar enquiries into booked jobs? Show us your current lead process and we will walk you through how the platform can support it."
          title="Ready To Turn More Solar Enquiries Into Booked Jobs?"
        />
      </MarketingShell>
    </>
  );
}

export function QuotePage() {
  const quoteGenerator = getServicePage("quote-generator");

  if (!quoteGenerator) {
    return null;
  }

  return (
    <>
      <JsonLd data={createQuoteGeneratorServiceSchema()} />
      <ProductPage service={quoteGenerator} canonicalPath="/quote" />
    </>
  );
}

export function ServicePage({ service }: { service: ServicePageContent }) {
  return <ProductPage service={service} />;
}

function ProductPage({
  canonicalPath,
  service,
}: {
  canonicalPath?: string;
  service: ServicePageContent;
}) {
  const path = canonicalPath ?? `/${service.slug}`;
  const relatedServices = service.relatedServices
    .map(getServicePage)
    .filter((page): page is ServicePageContent => Boolean(page));
  const isPricing = service.slug === "pricing";

  return (
    <>
      <JsonLd data={createServiceSchema(service)} />
      <JsonLd data={createFaqSchema(service.faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: service.navTitle, path },
        ])}
      />
      <MarketingShell>
        <PageHero
          kicker={service.kicker}
          points={service.heroPoints}
          primaryHref="/contact"
          primaryLabel="Book a Software Demo"
          secondaryHref="/features"
          secondaryLabel="See the Platform"
          title={service.h1}
        >
          {service.intro}
        </PageHero>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker">Overview</p>
              <h2 className="section-title">{service.navTitle} For Installer Teams</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                {service.summary}
              </p>
              <p className="mt-5 text-base leading-7 text-slate-600">
                As a SaaS platform for solar installers, Emerald Solar
                Solutions keeps the software focused on sales teams, admin
                workflows, and project visibility for solar businesses.
              </p>
            </div>
            <FeatureList items={service.benefits} />
          </div>
        </section>

        {isPricing ? <PricingSection /> : null}

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker text-emerald-300">Workflow</p>
              <h2 className="section-title text-white">
                How The Software Supports Your Process
              </h2>
            </div>
            <StepGrid items={service.process} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker">Questions</p>
              <h2 className="section-title">{service.navTitle} FAQ</h2>
            </div>
            <FaqGrid faqs={service.faqs} />
          </div>
        </section>

        {relatedServices.length > 0 ? (
          <section className="bg-[#0f1f24] py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="section-kicker text-emerald-300">
                    Related Platform Areas
                  </p>
                  <h2 className="section-title text-white">
                    Connect The Rest Of Your Installer Workflow
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedServices.map((related) => (
                    <LinkCard
                      description={related.metaDescription}
                      href={`/${related.slug}`}
                      key={related.slug}
                      title={related.navTitle}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <ContactCta
          copy="Book a software demo and see how Emerald Solar Solutions can support your installer company's sales, quote, SEAI, and project workflow."
          title="See The Platform Built Around Your Installer Workflow"
        />
      </MarketingShell>
    </>
  );
}

export function LocationPage({ location }: { location: LocationPageContent }) {
  return (
    <>
      <JsonLd data={createLocationServiceSchema(location)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/dublin" },
          { name: location.areaLabel, path: `/locations/${location.slug}` },
        ])}
      />
      <MarketingShell>
        <PageHero
          kicker="Solar installer software"
          points={location.localSignals}
          primaryHref="/contact"
          primaryLabel="Book a Software Demo"
          secondaryHref="/features"
          secondaryLabel="See the Platform"
          title={location.h1}
        >
          {location.intro}
        </PageHero>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">Local Workflow</p>
              <h2 className="section-title">
                Software For Installer Companies Serving {location.areaLabel}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                This page is for solar installation companies, not homeowners
                looking for solar quotes. Emerald Solar Solutions helps your
                team manage the enquiries you generate in this area.
              </p>
            </div>
            <FeatureList items={solutionPoints} />
          </div>
        </section>

        <ContactCta
          copy={`Book a demo if your installer company serves ${location.areaLabel} and wants a cleaner way to generate, qualify, quote, and manage solar leads.`}
          title={`Solar Installer Software For ${location.areaLabel}`}
        />
      </MarketingShell>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <MarketingShell>
        <PageHero
          kicker="Contact Emerald Solar Solutions"
          points={[
            "AI lead generation",
            "Quote generator",
            "SEAI grant workflow",
            "Project management",
            "Free website package",
          ]}
          primaryHref="#demo-form"
          primaryLabel="Book a Software Demo"
          secondaryHref="/pricing"
          secondaryLabel="Start With the €500/month Package"
          title="Book A Software Demo"
        >
          Tell us about your solar installation company, your current sales
          process, and where admin or follow-up is slowing your team down.
        </PageHero>

        <section className="bg-slate-950 py-20 text-white" id="demo-form">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="max-w-2xl">
              <p className="section-kicker text-emerald-300">Demo Request</p>
              <h2 className="section-title text-white">
                Show Us Your Installer Workflow
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Emerald Solar Solutions will use your company details, install
                volume, website status, and main interest to shape a focused
                demo around your AI-assisted sales software, quote generation
                software, SEAI workflow software, and project management
                software needs.
              </p>
              <div className="mt-8 grid gap-4">
                {packageItems.map((item) => (
                  <div
                    className="rounded-[1.35rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-slate-100"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </MarketingShell>
    </>
  );
}

function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[linear-gradient(180deg,_#f3f8f6_0%,_#eef7f3_42%,_#f8fafc_100%)] text-slate-950">
      <SiteHeader />
      <main className="overflow-x-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
}

function PageHero({
  children,
  kicker,
  points,
  primaryHref = "/contact",
  primaryLabel = "Book a Software Demo",
  secondaryHref = "/features",
  secondaryLabel = "See the Platform",
  title,
}: {
  children: ReactNode;
  kicker: string;
  points: string[];
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  title: string;
}) {
  return (
    <section className="relative isolate bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_30%),linear-gradient(180deg,_rgba(6,78,59,0.86)_0%,_rgba(15,23,42,0.98)_78%,_rgba(15,23,42,0)_100%)]" />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
              {kicker}
            </p>
            <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">
              {children}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                href={primaryHref}
              >
                {primaryLabel}
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/14 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                href={secondaryHref}
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a]/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <h2 className="text-2xl font-semibold text-white">
                Platform focus
              </h2>
              <Image
                alt={`${siteConfig.name} mark`}
                height={52}
                src="/emerald-mark.svg"
                width={52}
              />
            </div>
            <ul className="mt-6 grid gap-4">
              {points.map((point) => (
                <li
                  className="rounded-[1.35rem] border border-white/10 bg-[#0f2529] px-5 py-4 text-sm font-semibold text-slate-100"
                  key={point}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="bg-[linear-gradient(180deg,_#eaf5f0_0%,_#f8fafc_100%)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-kicker">Pricing</p>
          <h2 className="section-title">
            €500/month Solar Growth Software Package
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Emerald Solar Solutions is a practical monthly SaaS platform for
            installer companies that need better lead generation,
            qualification, quote generation software, SEAI workflow software,
            and project management software.
          </p>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            Final setup may depend on your current website, sales process, and
            workflow requirements.
          </p>
          <Link
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            href="/contact"
          >
            Book a Demo
          </Link>
        </div>
        <div className="rounded-[2rem] border border-emerald-200/30 bg-[#17353a] p-8 shadow-[0_25px_60px_rgba(15,23,42,0.1)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Includes
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {packageItems.map((item) => (
              <div
                className="rounded-[1.3rem] border border-white/10 bg-[#0f2529] px-5 py-4 text-sm font-semibold text-slate-100"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createSoftwareApplicationSchema()} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <MarketingShell>
        <PageHero
          kicker="About Emerald Solar Solutions"
          points={[
            "Irish software company",
            "SaaS platform for solar installers",
            "AI-assisted sales and workflow automation",
          ]}
          primaryHref="/contact"
          primaryLabel="Book a Software Demo"
          secondaryHref="/features"
          secondaryLabel="Explore Features"
          title="AI-Powered Workflow Software For Solar Installers"
        >
          Emerald Solar Solutions is an Irish software company building
          AI-assisted sales, quote generation, SEAI workflow, and project
          management tools for solar installation companies.
        </PageHero>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">Software Company</p>
              <h2 className="section-title">
                Built To Help Solar Installers Scale With Less Admin
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Emerald Solar Solutions exists to help solar installers manage
                more leads and projects without adding more disconnected tools,
                spreadsheets, and manual follow-up.
              </p>
            </div>
            <FeatureList
              items={[
                "AI-assisted sales software for faster lead response",
                "Solar sales software for qualifying homeowner enquiries",
                "Quote generation software for better prepared sales calls",
                "SEAI workflow software for cleaner information collection",
                "Project management software for team visibility",
                "Solar installer workflow software that connects sales, admin, and delivery",
              ]}
            />
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="section-kicker text-emerald-300">Mission</p>
              <h2 className="section-title text-white">
                Help Solar Businesses Turn More Enquiries Into Managed Jobs
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-lg leading-8 text-slate-200">
                The mission is simple: give solar installation companies a
                focused SaaS platform that reduces admin, improves sales
                follow-up, streamlines quote and SEAI workflows, and gives teams
                clearer visibility from first enquiry to completed project.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { href: "/quote-generator", label: "Quote Generation Software" },
                  { href: "/seai-grant-workflow", label: "SEAI Workflow Software" },
                  { href: "/project-management", label: "Project Management Software" },
                  { href: "/pricing", label: "SaaS Platform Pricing" },
                ].map((item) => (
                  <Link
                    className="rounded-[1.3rem] border border-white/10 bg-[#0f2529] px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/40"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          copy="Talk to Emerald Solar Solutions about the software platform your solar business needs to generate, qualify, quote, and manage more work with less manual admin."
          title="Build A Cleaner Solar Installer Workflow"
        />
      </MarketingShell>
    </>
  );
}

function LinkCard({
  description,
  href,
  title,
}: {
  description: string;
  href: string;
  title: string;
}) {
  return (
    <Link
      className="group block rounded-[1.8rem] border border-emerald-200/10 bg-[#17353a] p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-[#1c4448]"
      href={href}
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-200">{description}</p>
      <p className="mt-5 text-sm font-semibold text-emerald-200 transition group-hover:text-amber-200">
        Learn more
      </p>
    </Link>
  );
}

function FeatureList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          className={`rounded-[1.5rem] border p-6 text-sm font-medium leading-7 shadow-[0_20px_45px_rgba(15,23,42,0.06)] ${
            isDark
              ? "border-white/10 bg-white/5 text-slate-100"
              : "border-emerald-200/10 bg-[#17353a] text-slate-100"
          }`}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function StepGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3 xl:grid-cols-5">
      {items.map((item, index) => (
        <article
          className="flex h-full flex-col rounded-[1.8rem] border border-white/10 bg-[#17353a] p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
          key={item}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-5 text-lg font-semibold leading-8">{item}</h3>
        </article>
      ))}
    </div>
  );
}

function FaqGrid({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <div className="grid gap-5">
      {faqs.map((faq) => (
        <article
          className="rounded-[1.8rem] border border-emerald-200/10 bg-[#17353a] p-6"
          key={faq.question}
        >
          <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-200">{faq.answer}</p>
        </article>
      ))}
    </div>
  );
}

function ContactCta({ copy, title }: { copy: string; title: string }) {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="section-kicker text-emerald-300">Next step</p>
            <h2 className="section-title text-white">{title}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{copy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              href="/contact"
            >
              Book a Software Demo
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              href="/pricing"
            >
              Start With the €500/month Package
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SoftwarePageLinks() {
  return getCoreSoftwarePages();
}
