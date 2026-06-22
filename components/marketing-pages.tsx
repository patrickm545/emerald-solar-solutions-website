import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getServicePage,
  platformNavItems,
  type DemoSectionContent,
  type FaqItem,
  type InsightSection,
  type LocationPageContent,
  type ProofItem,
  type ProofSectionContent,
  type ServicePageContent,
} from "@/lib/site-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLocationServiceSchema,
  createOrganizationSchema,
  createServiceSchema,
  createSoftwareApplicationSchema,
  homepageSchemas,
} from "@/lib/seo";

const homeProblemPoints = [
  "Manual paperwork across sales and administration",
  "Grant information chased too late in the process",
  "Poor lead tracking across inboxes and spreadsheets",
  "Missed follow-ups after the first customer contact",
  "Slow quotation workflows and unclear next actions",
  "Disconnected customer information across teams",
];

const solarGrantProHighlights = [
  "Lead capture and structured enquiry qualification",
  "Grant eligibility checks and missing-information review",
  "Quote-ready customer records and proposal preparation",
  "CRM and workflow management for sales, admin and operations",
  "AI-assisted sales follow-up where it supports the team",
  "Customer documentation and application pack generation",
];

const heroWorkflowStrip = [
  "Built for Irish installers",
  "SEAI focused workflows",
  "Grant management",
  "Quote generation",
  "Sales follow-up",
  "Local support",
];

const installerChoicePoints = [
  "Irish software company",
  "Renewable energy sector focus",
  "Workflow expertise",
  "Ongoing product development",
  "Professional support",
  "Customer support",
];

const aboutCompanyPoints = [
  "Software for renewable energy businesses across Ireland",
  "Products for grants, quotations, customer workflows and sales processes",
  "Implementation shaped around real installer operations",
];

const homeScreenshot: ProofItem = {
  title: "SolarGRANT Pro installer dashboard",
  caption: "Lead management pipeline, recent leads, grant status, and follow-up in one installer workspace.",
  src: "/product-screenshots/solargrant-pro-installer-dashboard-light.png",
  alt: "SolarGRANT Pro light installer dashboard showing lead management pipeline and recent leads",
};

export function HomePage() {
  return (
    <>
      {homepageSchemas.map((schema, index) => (
        <JsonLd data={schema} key={index} />
      ))}
      <MarketingShell>
        <section className="border-b border-[#D9E1E5] bg-[#F2F7F4]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-28 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-32">
            <div className="min-w-0 max-w-3xl">
              <p className="section-kicker">Clada Systems</p>
              <h1 className="mt-5 max-w-full break-words text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-5xl">
                Software Built for Renewable Energy Installers
              </h1>
              <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-slate-700">
                <p className="font-medium text-[#0B1F33]">
                  Reduce administration, streamline grant applications and
                  manage customer workflows from a single platform.
                </p>
                <p>
                  Clada Systems is an Irish software company developing
                  workflow, grant management and customer management software
                  for renewable energy businesses.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary-light" href="/contact">
                  Book a Demonstration
                </Link>
                <Link className="button-secondary-dark" href="/features">
                  View SolarGRANT Pro
                </Link>
              </div>
            </div>

            <ProductPreviewFrame item={homeScreenshot} priority />
          </div>
        </section>

        <section className="border-b border-[#D9E1E5] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
              {heroWorkflowStrip.map((statement) => (
                <div
                  className="flex items-center gap-2 rounded-lg border border-[#D9E1E5] bg-[#FBFCFC] px-3 py-3 text-sm font-semibold text-slate-800"
                  key={statement}
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full bg-[#1F4D3A]"
                  />
                  {statement}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div>
              <p className="section-kicker">Problems we solve</p>
              <h2 className="section-title">
                Installer teams need reliable operations, not more disconnected tools.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Renewable energy businesses are managing more enquiries, grant
                requirements and customer handovers. Clada Systems helps bring
                that work into a calmer, more accountable process.
              </p>
            </div>
            <FeatureList items={homeProblemPoints} />
          </div>
        </section>

        <section className="bg-[#F7F8FA] py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div>
              <p className="section-kicker">SolarGRANT Pro</p>
              <h2 className="section-title">
                The flagship product within the Clada Systems platform.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                SolarGRANT Pro helps installers qualify leads, assess grant
                eligibility, prepare quotations, manage customer records and
                streamline sales workflows from one practical platform.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary-light" href="/features">
                  View SolarGRANT Pro
                </Link>
                <Link className="button-secondary-dark" href="/contact">
                  Book a Demonstration
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              <ProductPreviewFrame item={homeScreenshot} compact />
              <FeatureList items={solarGrantProHighlights} />
            </div>
          </div>
        </section>

        <section className="bg-[#F2F7F4] py-24" id="workflow-operations">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker">Workflow & operations</p>
              <h2 className="section-title">
                The everyday installer workflows the platform brings together.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Workflow categories are handled inside the product experience,
                not as a confusing set of separate tools. Each area supports the
                same goal: clearer customer progress from enquiry to completed
                work.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {platformNavItems.map((feature) => (
                <LinkCard
                  description={feature.description}
                  href={feature.href}
                  key={feature.href}
                  title={feature.label}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div>
              <p className="section-kicker">Why Clada Systems</p>
              <h2 className="section-title">
                A long-term software partner for renewable energy businesses.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Clada Systems focuses on practical workflow software, careful
                implementation and ongoing product development for installer
                teams operating in the Irish renewable energy market.
              </p>
            </div>
            <FeatureList items={installerChoicePoints} />
          </div>
        </section>

        <section className="bg-[#F7F8FA] py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <div>
              <p className="section-kicker">About Clada Systems</p>
              <h2 className="section-title">
                Irish software for renewable energy operations.
              </h2>
            </div>
            <div>
              <p className="text-xl leading-9 text-slate-700">
                Clada Systems develops software for renewable energy businesses
                across Ireland. Our products help installers manage grants,
                quotations, customer workflows and sales processes from a single
                platform.
              </p>
              <div className="mt-8">
                <FeatureList items={aboutCompanyPoints} />
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          copy="Book a demonstration to see how Clada Systems can support your renewable energy business with grant, quotation, customer workflow and sales process management."
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title="Ready to discuss your installer workflow?"
        />
      </MarketingShell>
    </>
  );
}

export function ServicePage({ service }: { service: ServicePageContent }) {
  return <ProductPage service={service} />;
}

function ProductPage({ service }: { service: ServicePageContent }) {
  const path = `/${service.slug}`;
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
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title={service.h1}
        >
          {service.intro}
        </PageHero>

        {isPricing ? (
          <PricingSection service={service} />
        ) : (
          <OverviewSection service={service} />
        )}

        <ProductProofSection content={service.proof} />

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Process</p>
            <h2 className="section-title">How this part of the software works.</h2>
          </div>
          <StepGrid items={service.process} />
        </section>

        <InsightSections insights={service.insights} />
        <WatchDemoSection demo={service.demo} />

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="section-kicker">Questions</p>
            <h2 className="section-title">{service.navTitle} FAQ</h2>
          </div>
          <FaqGrid faqs={service.faqs} />
        </section>

        {relatedServices.length > 0 ? (
          <section className="bg-[#F7F8FA] py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="section-kicker">Related pages</p>
                  <h2 className="section-title">
                    Connect the rest of the installer workflow.
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
          copy="Book a demonstration and see how Clada Systems can support your installer's sales, quotation, grant, documentation, and customer workflow."
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title="See the software built for installer workflows"
        />
      </MarketingShell>
    </>
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
          kicker="About Clada Systems"
          points={[
            "Irish software company",
            "Built for renewable energy installers",
            "Flagship product: SolarGRANT Pro",
          ]}
          primaryHref="/contact"
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title="An Irish Software Company For Renewable Energy Installers"
        >
          Clada Systems is focused on digital transformation within the
          renewable energy sector, building practical software tools that help
          installers reduce administration and manage customers more
          professionally.
        </PageHero>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-kicker">Positioning</p>
            <h2 className="section-title">
              Established software for practical installer operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              SolarGRANT Pro exists to help renewable energy businesses manage
              leads, grant information, quotations, documents, and customer
              workflows without adding more disconnected tools.
            </p>
          </div>
          <FeatureList
            items={[
              "Lead capture and follow-up workflows for installers",
              "Quotation workflow support before a final proposal",
              "Grant information collection and admin visibility",
              "Customer workflow tracking for sales and operations",
              "GDPR-conscious customer information handling",
              "Software onboarding shaped around each installer process",
            ]}
          />
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="section-kicker">Mission</p>
              <h2 className="section-title">
                Help installers turn enquiries into managed jobs.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/quote-generator", label: "Quote Generator" },
                { href: "/seai-grant-workflow", label: "Grant Workflow" },
                { href: "/project-management", label: "Workflow Management" },
                { href: "/ai-sales", label: "Sales Follow-Up" },
                { href: "/free-website", label: "Website Intake" },
              ].map((item) => (
                <LinkCard
                  description="Explore this part of the Clada Systems platform."
                  href={item.href}
                  key={item.href}
                  title={item.label}
                />
              ))}
            </div>
          </div>
        </section>

        <ContactCta
          copy="Talk to Clada Systems about the software platform your renewable energy business needs to capture, qualify, quote, document, and manage work with less manual administration."
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title="Build a cleaner installer workflow"
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
          kicker="Contact Clada Systems"
          points={[
            "SolarGRANT Pro",
            "Lead, grant and quote workflow",
            "Customer documentation",
            "Professional support",
          ]}
          primaryHref="#demo-form"
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title="Book a Demonstration"
        >
          Tell us about your renewable energy installation company, your current
          workflow, and where administration or follow-up is slowing your team
          down.
        </PageHero>

        <section className="bg-[#F7F8FA] py-20" id="demo-form">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="max-w-2xl">
              <p className="section-kicker">Demo request</p>
              <h2 className="section-title">
                Show us your installer workflow.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                The demonstration is shaped around your lead sources, sales
                handover, grant administration, quotation process, and customer
                workflow requirements.
              </p>
              <FeatureList
                items={[
                  "Lead capture review",
                  "Quote workflow walkthrough",
                  "Grant admin flow",
                  "Customer workflow review",
                  "Documentation and application pack discussion",
                ]}
              />
            </div>
            <ContactForm />
          </div>
        </section>
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
          kicker="Installer workflow software"
          points={location.localSignals}
          primaryHref="/contact"
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title={location.h1}
        >
          {location.intro}
        </PageHero>
        <ContactCta
          copy={`Book a demonstration if your installer company serves ${location.areaLabel} and wants a cleaner way to capture, qualify, quote, document, and manage customer workflows.`}
          primaryLabel="Book a Demonstration"
          secondaryHref="/features"
          secondaryLabel="View SolarGRANT Pro"
          title={`Installer Workflow Software For ${location.areaLabel}`}
        />
      </MarketingShell>
    </>
  );
}

function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#F7F8FA] text-[#0B1F33]">
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
  primaryLabel = "Book a Demonstration",
  secondaryHref = "/features",
  secondaryLabel = "View SolarGRANT Pro",
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
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1fr_0.78fr] lg:px-8 lg:pb-24 lg:pt-36">
        <div className="min-w-0 max-w-4xl">
          <p className="section-kicker">{kicker}</p>
          <h1 className="mt-5 max-w-full break-words text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            {children}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary-light" href={primaryHref}>
              {primaryLabel}
            </Link>
            <Link className="button-secondary-dark" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-[#D9E1E5] bg-[#F7F8FA] p-5">
          <p className="text-sm font-semibold text-[#1F4D3A]">
            Platform focus
          </p>
          <ul className="mt-4 grid gap-3">
            {points.map((point) => (
              <li
                className="rounded-lg border border-[#D9E1E5] bg-white px-4 py-3 text-sm font-medium text-slate-700"
                key={point}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProductPreviewFrame({
  compact = false,
  item,
  priority = false,
}: {
  compact?: boolean;
  item: ProofItem;
  priority?: boolean;
}) {
  return (
    <figure
      className={`w-full min-w-0 overflow-hidden rounded-lg border border-[#D9E1E5] bg-white shadow-[0_22px_60px_rgba(11,31,51,0.12)] ${
        compact ? "max-w-3xl" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-[#D9E1E5] bg-white px-4 py-2.5">
        <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D9E1E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#BFD8CB]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#1F4D3A]" />
        </div>
        <p className="truncate text-xs font-semibold uppercase text-slate-600">
          SolarGRANT Pro installer dashboard
        </p>
        <p className="hidden shrink-0 rounded-md border border-[#D9E1E5] px-2.5 py-1 text-xs font-semibold text-[#1F4D3A] sm:block">
          Clada Systems
        </p>
      </div>
      <div className="bg-[#F7FBF8] p-1.5 sm:p-2">
        <div className="relative aspect-[1886/914] overflow-hidden rounded-md border border-[#D9E1E5] bg-white">
          <Image
            alt={item.alt}
            className="object-contain object-top"
            fill
            priority={priority}
            sizes={
              compact
                ? "(min-width: 1024px) 56vw, 100vw"
                : "(min-width: 1280px) 760px, (min-width: 1024px) 62vw, 100vw"
            }
            src={item.src}
          />
        </div>
      </div>
      {compact ? null : (
        <figcaption className="border-t border-[#D9E1E5] bg-white px-4 py-4 text-sm leading-6 text-slate-700">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

function OverviewSection({ service }: { service: ServicePageContent }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div>
        <p className="section-kicker">Overview</p>
        <h2 className="section-title">{service.navTitle} for installer teams.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          {service.summary}
        </p>
      </div>
      <FeatureList items={service.benefits} />
    </section>
  );
}

function PricingSection({ service }: { service: ServicePageContent }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-kicker">Book a demo</p>
          <h2 className="section-title">
            Discuss the right workflow setup for your business.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            {service.summary}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The conversation covers your current website, lead sources, sales
            handover, grant administration, documentation needs, and support
            requirements.
          </p>
          <Link className="button-primary-light mt-7" href="/contact">
            Book a Demonstration
          </Link>
        </div>
        <FeatureList items={service.benefits} />
      </div>
    </section>
  );
}

function ProductProofSection({ content }: { content: ProofSectionContent }) {
  return (
    <section className="bg-[#F7F8FA] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">{content.kicker}</p>
          <h2 className="section-title">{content.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            {content.intro}
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <ScreenshotFrame item={item} key={item.title} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotFrame({
  item,
  priority = false,
}: {
  item: ProofItem;
  priority?: boolean;
}) {
  return (
    <figure className="w-full min-w-0 overflow-hidden rounded-lg border border-[#D9E1E5] bg-white shadow-[0_14px_34px_rgba(11,31,51,0.08)]">
      <div className="border-b border-[#D9E1E5] bg-[#F7F8FA] px-4 py-3">
        <p className="text-sm font-semibold text-[#0B1F33]">{item.title}</p>
      </div>
      <div className="relative aspect-[16/10] bg-white">
        <Image
          alt={item.alt}
          className="object-contain object-top"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, 100vw"
          src={item.src}
        />
      </div>
      <figcaption className="px-4 py-4 text-sm leading-6 text-slate-600">
        {item.caption}
      </figcaption>
    </figure>
  );
}

function WatchDemoSection({ demo }: { demo: DemoSectionContent }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-kicker">Product demonstration</p>
          <h2 className="section-title">{demo.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            {demo.intro}
          </p>
          <Link className="button-primary-light mt-7" href={demo.ctaHref}>
            {demo.ctaLabel}
          </Link>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#D9E1E5] bg-white shadow-[0_14px_34px_rgba(11,31,51,0.08)]">
          <div className="relative aspect-video">
            {demo.embedUrl ? (
              <iframe
                allow="fullscreen; picture-in-picture"
                className="h-full w-full"
                loading="lazy"
                src={demo.embedUrl}
                title={demo.title}
              />
            ) : (
              <Image
                alt={`${demo.title} thumbnail`}
                className="object-cover object-top"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={demo.thumbnail}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightSections({ insights }: { insights: InsightSection[] }) {
  if (insights.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="section-kicker">Installer workflow notes</p>
        <h2 className="section-title">Practical guidance for stronger operations.</h2>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {insights.map((insight) => (
          <article
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
            key={insight.title}
          >
            <h3 className="text-xl font-semibold text-slate-950">
              {insight.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {insight.copy}
            </p>
            <ul className="mt-5 grid gap-3">
              {insight.points.map((point) => (
                <li className="text-sm leading-6 text-slate-700" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function LinkCard({
  description,
  href,
  title,
  tone = "light",
}: {
  description: string;
  href: string;
  title: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <Link
      className={`group block rounded-lg border p-6 shadow-[0_12px_28px_rgba(11,31,51,0.05)] transition hover:-translate-y-0.5 ${
        isDark
          ? "border-white/10 bg-white/5 hover:border-[#A7C3B2]"
          : "border-[#D9E1E5] bg-white hover:border-[#1F4D3A]/50"
      }`}
      href={href}
    >
      <h3
        className={`text-lg font-semibold ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-sm leading-7 ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {description}
      </p>
      <p
        className={`mt-4 text-sm font-semibold ${
          isDark ? "text-[#B8D0C2]" : "text-[#1F4D3A]"
        }`}
      >
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
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          className={`rounded-lg border px-4 py-4 text-sm font-medium leading-7 shadow-[0_10px_24px_rgba(11,31,51,0.04)] ${
            isDark
              ? "border-white/10 bg-white/5 text-slate-100"
              : "border-[#D9E1E5] bg-white text-slate-800"
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
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <article
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.06)]"
          key={item}
        >
          <p className="text-sm font-semibold text-[#1F4D3A]">
            Step {index + 1}
          </p>
          <h3 className="mt-4 text-lg font-semibold leading-8 text-slate-950">
            {item}
          </h3>
        </article>
      ))}
    </div>
  );
}

function FaqGrid({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <article
          className="rounded-lg border border-slate-200 bg-white p-6"
          key={faq.question}
        >
          <h3 className="text-lg font-semibold text-slate-950">
            {faq.question}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
        </article>
      ))}
    </div>
  );
}

function ContactCta({
  copy,
  primaryLabel = "Book a Demonstration",
  secondaryHref = "/features",
  secondaryLabel = "View SolarGRANT Pro",
  title,
}: {
  copy: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  title: string;
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-[#2D684E] bg-[#1F4D3A] p-8 text-white shadow-[0_22px_60px_rgba(31,77,58,0.22)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#D8E8DE]">Next step</p>
            <h2 className="section-title text-white">{title}</h2>
            <p className="mt-5 text-lg leading-8 text-[#E8F1EC]">{copy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#1F4D3A] transition hover:bg-[#F2F7F4]"
              href="/contact"
            >
              {primaryLabel}
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              href={secondaryHref}
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
