import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SiteLogo } from "@/components/site-logo";

type PricingCard = {
  name: string;
  price: string;
  positioning: string;
  includes: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  featuredLabel?: string;
  inheritedScope?: string;
};

const calendlyUrl = "https://calendly.com/pmkenna10/introduction";
const demoVideoSrc = encodeURI(
  "/Qualify Solar Leads Faster With Smart Forms \u{1F60A}.mp4",
);

const solutionCards = [
  "SEAI grant-focused landing page",
  "AI-assisted eligibility form",
  "Meta ad campaigns",
  "AI-based lead generation and outreach",
  "Instant email/SMS alerts",
  "Admin dashboard for lead review",
];

const serviceCards = [
  {
    title: "Website / Landing Page Setup",
    copy: "A clean solar landing page designed to turn visitors into enquiries.",
  },
  {
    title: "Meta Ads For Solar Leads",
    copy: "Meta ads are used to attract homeowner interest, while AI-assisted outreach can support business development, partnerships, and follow-up.",
  },
  {
    title: "AI-Assisted Outreach",
    copy: "Structured outreach campaigns supported by AI to help identify opportunities, organise follow-ups, and create more consistent business development activity.",
  },
  {
    title: "SEAI Grant Qualification Tool",
    copy: "A custom form that collects key grant details and sends qualified enquiries instantly.",
  },
];

const pricingCards = [
  {
    name: "Grant Lead System",
    price: "From \u20ac200/month",
    positioning:
      "Basic support system for solar installers who want better-qualified grant enquiries.",
    includes: [
      "Grant-focused lead form",
      "MPRN and required field validation",
      "Customer document/photo uploads",
      "Instant email/SMS lead alerts",
      "Admin dashboard",
      "Application pack / submission prep view",
      "Basic support",
    ],
    ctaLabel: "Book a Demo",
    ctaHref: "#contact",
  },
  {
    name: "Lead Generation System",
    positioning:
      "Software plus Meta ads to help you generate and qualify more solar enquiries.",
    inheritedScope: "Includes everything in Grant Lead System, plus:",
    price: "From \u20ac500/month + ad spend",
    includes: [
      "Meta ads campaign setup",
      "Ad creative/copy testing",
      "Landing page/funnel optimisation",
      "Lead tracking",
      "Monthly optimisation",
      "Basic reporting",
    ],
    ctaLabel: "Book a Demo",
    ctaHref: "#contact",
    featured: true,
    featuredLabel: "Recommended",
  },
  {
    name: "Full Growth System",
    positioning:
      "Software, Meta ads, and cold outbound workflows managed using Smartlead.ai.",
    inheritedScope:
      "Includes everything in Grant Lead System and Lead Generation System, plus:",
    price: "From \u20ac900/month + ad spend",
    includes: [
      "Smartlead.ai cold outbound setup",
      "Cold email campaign copy",
      "Prospect list preparation",
      "Follow-up sequences",
      "Reply tracking",
      "Outreach optimisation",
      "Monthly growth review",
    ],
    ctaLabel: "Book a Demo",
    ctaHref: "#contact",
  },
] satisfies PricingCard[];

const faqs = [
  {
    question: "Do you work only with solar companies in Ireland?",
    answer:
      "Yes. Emerald Solar Solutions is built for SEAI-registered solar installers operating in Ireland and focused on homeowner enquiries in the Irish market.",
  },
  {
    question: "Can this work with our existing website?",
    answer:
      "Yes. We can build a standalone grant-focused landing page or connect the qualification flow into your existing site, depending on what you already have.",
  },
  {
    question: "Do you run the ads as well?",
    answer:
      "Yes. We can build the funnel only, or manage the Meta ad campaigns and reporting as part of a wider lead generation system.",
  },
  {
    question: "Can leads be sent by SMS?",
    answer:
      "Yes. Leads can be sent by email and SMS so your team sees new homeowner enquiries quickly and follows up with better context.",
  },
  {
    question: "Do you use AI for lead generation?",
    answer:
      "Yes. We use AI-assisted systems to help with lead qualification, outreach organisation, and follow-up workflows. The goal is to improve speed, consistency, and lead quality while keeping final review and communication human-led.",
  },
  {
    question: "Is this an official SEAI application portal?",
    answer:
      "No. This is an assisted lead qualification and admin tool for installers. Homeowners and installers should always review information before using official SEAI systems.",
  },
];

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Book A Demo", href: calendlyUrl },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_28%),linear-gradient(180deg,_#f3f8f6_0%,_#e7efeb_42%,_#f8fafc_100%)] text-slate-950">
      <div className="fixed inset-x-0 top-0 z-50 w-full px-6 pt-3 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="relative z-30 rounded-full border border-white/10 bg-slate-950/78 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/68">
            <div className="flex items-center justify-between gap-4">
              <SiteLogo theme="dark" width={300} />
              <details className="group relative lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white marker:content-none">
                  Menu
                </summary>
                <nav
                  aria-label="Mobile Primary"
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-56 rounded-[1.5rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_20px_40px_rgba(15,23,42,0.4)] backdrop-blur"
                >
                  <div className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </nav>
              </details>
              <nav aria-label="Primary" className="hidden flex-wrap gap-3 lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>
        </div>
      </div>

      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.14),_transparent_26%),linear-gradient(180deg,_rgba(6,78,59,0.82)_0%,_rgba(15,23,42,0.96)_68%,_rgba(15,23,42,0)_100%)]" />
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-28 lg:px-8 lg:pt-32">
          <div className="grid gap-14 pb-10 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
            <div className="max-w-3xl rounded-[2rem] bg-slate-950/28 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.18)] ring-1 ring-white/10 backdrop-blur-sm sm:p-8">
              <p className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-emerald-100">
                Built for Irish solar installers
              </p>
              <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Get More Qualified Solar Enquiries From Homeowners Interested In
                The SEAI Grant
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                Emerald Solar Solutions helps Irish solar installers capture,
                qualify, and follow up with homeowner enquiries using
                grant-focused landing pages, Meta ads, AI-based lead generation,
                AI-assisted outreach, and instant lead alerts.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  href={calendlyUrl}
                >
                  Book a Demo
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/14 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  href="#how-it-works"
                >
                  See How It Works
                </a>
              </div>

              <p className="mt-8 text-sm font-medium uppercase tracking-[0.14em] text-white/85">
                Built for SEAI-registered solar installers in Ireland.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a]/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.45)] sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                      Lead flow snapshot
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Cleaner enquiries, faster follow-up
                    </h2>
                  </div>
                  <div className="hidden sm:block">
                    <Image
                      alt="Emerald Solar Solutions icon"
                      height={52}
                      src="/emerald-mark.svg"
                      width={52}
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <InsightCard
                    copy="Homeowner completes a short grant-focused qualification form with MPRN, property details, timeline, and uploads."
                    label="Qualification"
                  />
                  <InsightCard
                    copy="Your team receives an instant alert by email or SMS with the context needed for a faster first call."
                    label="Alerting"
                  />
                  <InsightCard
                    copy="A simple dashboard keeps each enquiry visible for review, triage, and next-step follow-up."
                    label="Visibility"
                  />
                </div>

                <div className="mt-6 rounded-[1.6rem] bg-slate-950 p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.18em] text-emerald-300">
                    Safe positioning
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Grant-focused qualification support for installers. No claim
                    of SEAI affiliation, no guaranteed approval, and no promise
                    of automatic official application submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="section-kicker">The Problem</p>
            <h2 className="section-title">
              Most Solar Leads Are Missing Key Grant Information
            </h2>
          </div>
          <div className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-lg leading-8 text-slate-200">
              Many homeowners are interested in solar panels, but installers
              often receive incomplete enquiries with missing MPRNs, unclear
              eligibility, no install timeline, and no context around the SEAI
              grant.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Too many low-quality form fills",
                "Slow follow-up loses ready-to-buy homeowners",
                "Grant questions create extra admin",
                "Weak websites miss valuable enquiries",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-[#0f2529] px-5 py-4 text-sm font-medium text-slate-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker text-emerald-300">The Solution</p>
            <h2 className="section-title text-white">
              A Grant-Focused Lead System For Solar Installers
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We build a simple system that turns homeowner interest into
              cleaner, more useful solar enquiries.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map((card, index) => (
              <article
                key={card}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">{card}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Designed to help installers collect stronger homeowner context
                  before the first call and keep responses moving quickly.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 lg:px-8 lg:scroll-mt-32"
        id="how-it-works"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">How It Works</p>
            <h2 className="section-title">How It Works</h2>
          </div>
          <a
            className="text-sm font-semibold text-emerald-700"
            href={calendlyUrl}
          >
            Book a Demo
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {[
            "Homeowner sees an ad or visits your landing page",
            "They complete a short SEAI grant eligibility form",
            "The system checks key details like MPRN, property type, year built, and works status",
            "Your team receives the lead instantly by email/SMS",
            "You follow up faster with better context",
          ].map((step, index) => (
            <article
              key={step}
              className="flex h-full flex-col rounded-[1.8rem] border border-emerald-200/10 bg-[#17353a] p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Step {index + 1}
              </p>
              <p className="mt-5 text-lg font-medium leading-8 text-slate-100">
                {step}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-base leading-8 text-slate-300">
          Where relevant, AI-assisted outreach and follow-up systems can help
          create additional opportunities and keep prospecting organised.
        </p>
      </section>

      <section
        className="scroll-mt-28 bg-[#0f1f24] py-20 lg:scroll-mt-32"
        id="services"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Services</p>
            <h2 className="section-title text-white">What We Can Build For You</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.8rem] border border-emerald-200/10 bg-[#17353a] p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-base leading-8 text-slate-300">
            Meta ads are used to attract homeowner interest, while AI-assisted
            outreach can support business development, partnerships, and
            follow-up.
          </p>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_#eaf5f0_0%,_#f8fafc_100%)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Qualification Tool</p>
            <h2 className="section-title">Built-In SEAI Grant Qualification Tool</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Our tool collects the information installers need before the
              first call, including homeowner details, MPRN, property type,
              year built, install timeline, roof photos, meter photos, and
              consent.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a] p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
            <ul className="grid gap-4">
              {[
                "11-digit MPRN validation",
                "Required SEAI-style questions",
                "Uploads for bill, meter, and roof area photos",
                "Email and SMS lead notifications",
                "Admin dashboard for reviewing leads",
                "Thank-you confirmation for applicants",
              ].map((feature) => (
                <li
                  key={feature}
                  className="rounded-[1.3rem] border border-emerald-300/15 bg-[#0f2529] px-5 py-4 text-sm font-medium text-slate-100"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-200/10 bg-[#17353a] shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  Form demo
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">
                  See the grant qualification form in action
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                  This demo shows the qualification form homeowners complete to
                  submit their MPRN, property details, supporting photos, and
                  other grant-related information before your team follows up.
                </p>
              </div>
              <div className="border-t border-white/10 bg-slate-950/70 p-4 lg:border-l lg:border-t-0 lg:p-6">
                <video
                  className="h-full w-full rounded-[1.5rem] bg-slate-950 object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={demoVideoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-slate-950 py-20 text-white lg:scroll-mt-32"
        id="pricing"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker text-emerald-300">Packages</p>
            <h2 className="section-title text-white">
              Three Packages Built Around Your Growth Stage
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Start with a grant-focused qualification system, add Meta ads when
              you want stronger inbound volume, and layer in outbound when you
              need a broader growth engine.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingCards.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[1.8rem] border p-7 ${
                  plan.featured
                    ? "border-emerald-300/50 bg-[linear-gradient(180deg,_rgba(52,211,153,0.2)_0%,_rgba(255,255,255,0.08)_100%)] shadow-[0_24px_70px_rgba(16,185,129,0.16)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {plan.positioning}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full border border-emerald-300/25 bg-emerald-300/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
                      {plan.featuredLabel}
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 text-3xl font-semibold text-emerald-300">
                  {plan.price}
                </p>
                {plan.inheritedScope ? (
                  <p className="mt-6 rounded-[1.3rem] border border-white/10 bg-slate-950/35 px-4 py-3 text-sm leading-6 text-slate-200">
                    {plan.inheritedScope}
                  </p>
                ) : null}
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Included
                </p>
                <ul className="mt-4 flex-1 space-y-3 text-sm leading-7 text-slate-300">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-emerald-300 text-slate-950 hover:bg-emerald-200"
                      : "border border-white/15 bg-white/8 text-white hover:bg-white/14"
                  }`}
                  href={plan.ctaHref}
                >
                  {plan.ctaLabel}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-300">
            Final pricing depends on your current setup, target counties, ad
            budget, and monthly lead goals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a] px-8 py-12 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="flex justify-center">
              <SiteLogo theme="light" width={360} />
            </div>
            <p className="section-kicker justify-center">Demo</p>
            <h2 className="section-title mx-auto max-w-2xl text-white">
              Want To See How It Works?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Book a quick walkthrough and we&apos;ll show you how a homeowner
              enquiry moves from form submission to email/SMS alert and admin
              dashboard review.
            </p>
            <a
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              href={calendlyUrl}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#0f1f24] py-20 lg:scroll-mt-32"
        id="faq"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title text-white">Frequently Asked Questions</h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.8rem] border border-emerald-200/10 bg-[#17353a] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-slate-950 py-20 text-white lg:scroll-mt-32"
        id="contact"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="max-w-2xl">
            <p className="section-kicker text-emerald-300">Contact</p>
            <h2 className="section-title text-white">Book A Demo</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Show us your current setup and we&apos;ll walk you through a
              cleaner, grant-focused path from first click to qualified
              homeowner enquiry.
            </p>

            <div className="mt-8 space-y-4 rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Included in a walkthrough
              </p>
              <ul className="space-y-3 text-sm leading-7 text-slate-300">
                <li>Review of your current website or enquiry flow</li>
                <li>Example grant-focused landing page structure</li>
                <li>How Meta ads, AI-assisted outreach, and lead alerts fit in</li>
                <li>Recommended next step based on your lead goals</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function InsightCard({ label, copy }: { label: string; copy: string }) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-[#0f2529] p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-200">{copy}</p>
    </article>
  );
}







