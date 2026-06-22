export type FaqItem = {
  question: string;
  answer: string;
};

export type ProofItem = {
  title: string;
  caption: string;
  src: string;
  alt: string;
};

export type ProofSectionContent = {
  kicker: string;
  title: string;
  intro: string;
  items: ProofItem[];
};

export type DemoSectionContent = {
  title: string;
  intro: string;
  thumbnail: string;
  embedUrl?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type InsightSection = {
  title: string;
  copy: string;
  points: string[];
};

export type ProductPageContent = {
  slug: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  intro: string;
  summary: string;
  heroPoints: string[];
  benefits: string[];
  process: string[];
  proof: ProofSectionContent;
  demo: DemoSectionContent;
  insights: InsightSection[];
  faqs: FaqItem[];
  relatedServices: string[];
};

export type ServicePageContent = ProductPageContent;

export type LocationPageContent = {
  slug: string;
  areaLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localSignals: string[];
};

const productionSiteUrl = "https://cladasystems.com";

function readOptionalPublicEnv(name: string) {
  const value = process.env[name]?.trim();

  return value || undefined;
}

function getSiteUrl() {
  return (readOptionalPublicEnv("NEXT_PUBLIC_SITE_URL") ?? productionSiteUrl)
    .replace(/\/+$/, "");
}

export const publicBusinessPlaceholders = {
  phone: "NEXT_PUBLIC_BUSINESS_PHONE",
  email: "NEXT_PUBLIC_BUSINESS_EMAIL",
  streetAddress: "NEXT_PUBLIC_BUSINESS_STREET_ADDRESS",
  locality: "NEXT_PUBLIC_BUSINESS_LOCALITY",
  region: "NEXT_PUBLIC_BUSINESS_REGION",
  postalCode: "NEXT_PUBLIC_BUSINESS_POSTAL_CODE",
  country: "NEXT_PUBLIC_BUSINESS_COUNTRY",
  photoUrl: "NEXT_PUBLIC_BUSINESS_PHOTO_URL",
  testimonials: "Add only real software customer testimonials after approval.",
};

export const siteConfig = {
  name: "Clada Systems",
  url: getSiteUrl(),
  description:
    "Clada Systems is an Irish software company building workflow automation tools for renewable energy businesses. Its flagship product, SolarGRANT Pro, helps installers manage leads, grant eligibility, quotations, customer workflows, and AI-assisted sales processes from one platform.",
  defaultImage: "/clada-og.svg",
  sameAs: ["https://www.linkedin.com/company/clada-systems"],
  business: {
    phone: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_PHONE"),
    email: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_EMAIL"),
    streetAddress: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_STREET_ADDRESS"),
    locality: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_LOCALITY"),
    region: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_REGION"),
    postalCode: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_POSTAL_CODE"),
    country: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_COUNTRY") ?? "IE",
    photoUrl: readOptionalPublicEnv("NEXT_PUBLIC_BUSINESS_PHOTO_URL"),
  },
};

const dashboardProof: ProofItem = {
  title: "Installer dashboard",
  caption: "Lead management pipeline, recent leads, grant status, and open actions in one view.",
  src: "/product-screenshots/solargrant-pro-installer-dashboard-light.png",
  alt: "SolarGRANT Pro light installer dashboard with lead management pipeline and recent leads",
};

const leadTableProof: ProofItem = {
  title: "Lead review table",
  caption: "A structured queue for status, eligibility, documents, and next action.",
  src: "/product-screenshots/lead-review-table-structure.jpg",
  alt: "SolarGRANT Pro lead review table structure",
};

const seaiFormProof: ProofItem = {
  title: "Homeowner form",
  caption: "A branded homeowner intake flow for grant and quote preparation.",
  src: "/product-screenshots/seai-form-workflow.jpg",
  alt: "SolarGRANT Pro grant and quote intake form",
};

const websiteProof: ProofItem = {
  title: "Connected intake flow",
  caption: "Website and form enquiries can feed directly into the installer workflow.",
  src: "/product-screenshots/seai-form-workflow.jpg",
  alt: "SolarGRANT Pro connected intake flow",
};

const defaultDemo: DemoSectionContent = {
  title: "Watch The SolarGRANT Pro Workflow",
  intro:
    "See how a lead can move from intake to dashboard review, quotation preparation, grant readiness, and follow-up in SolarGRANT Pro.",
  thumbnail: "/product-screenshots/solargrant-pro-installer-dashboard-light.png",
  ctaLabel: "Book a Demonstration",
  ctaHref: "/contact",
};

export const servicePages = [
  {
    slug: "features",
    navTitle: "SolarGRANT Pro",
    metaTitle: "SolarGRANT Pro Workflow Automation Software",
    metaDescription:
      "Explore SolarGRANT Pro from Clada Systems: workflow automation software for renewable energy installers covering lead capture, grant eligibility, quotations, CRM workflows, and customer documentation.",
    kicker: "SolarGRANT Pro",
    h1: "Workflow Automation Software For Renewable Energy Installers",
    intro:
      "SolarGRANT Pro helps installer teams capture enquiries, qualify leads, assess grant eligibility, prepare quotations, manage customer records, and keep follow-up visible.",
    summary:
      "The platform connects the operational middle of an installer workflow: enquiry forms, lead review, grant details, quotation preparation, customer notes, document packs, and next actions.",
    heroPoints: [
      "Lead capture and homeowner intake",
      "Grant eligibility and quotation workflow",
      "Customer records and next actions",
    ],
    benefits: [
      "Capture homeowner and business enquiries through structured forms",
      "Prioritise leads using status, grant readiness, and missing-information checks",
      "Prepare quotation calls with property, usage, and upload details already collected",
      "Keep grant eligibility notes beside each customer record",
      "Track quote, survey, install, and follow-up stages in one shared dashboard",
      "Generate cleaner application packs and customer documentation",
    ],
    process: [
      "Map the installer company's current enquiry and sales process",
      "Configure lead intake, grant, quotation, and customer workflow stages",
      "Route each enquiry into review, quote, grant, and project stages",
      "Review dashboard activity and improve handover gaps with the team",
    ],
    proof: {
      kicker: "Inside the platform",
      title: "See How Leads Move Through SolarGRANT Pro",
      intro:
        "SolarGRANT Pro gives teams a structured way to review leads, check readiness, manage customer information, and move work into the next operational stage.",
      items: [dashboardProof, seaiFormProof, leadTableProof],
    },
    demo: defaultDemo,
    insights: [
      {
        title: "Why installers lose homeowner enquiries",
        copy:
          "Many missed opportunities are not caused by a lack of demand. They happen because enquiries arrive without context, teams respond slowly, and the next action is unclear.",
        points: [
          "A structured intake form asks for the details a sales team usually has to chase later.",
          "A visible lead queue helps teams call the right homeowners first.",
          "A shared status view reduces handover confusion between sales, admin, and operations.",
        ],
      },
      {
        title: "What installers should collect before quoting",
        copy:
          "Early quote conversations improve when the team already has enough information to understand the home, urgency, grant situation, and likely next step.",
        points: [
          "Contact details, county, and Eircode where available",
          "Energy usage, roof or meter photos, and broad installation goals",
          "Grant-related details needed before a final proposal is prepared",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Clada Systems a solar installer?",
        answer:
          "No. Clada Systems is an Irish software company that builds workflow automation software for renewable energy installation companies.",
      },
      {
        question: "Who is the platform built for?",
        answer:
          "It is built for renewable energy installers that want cleaner lead capture, faster follow-up, better quotation preparation, and clearer project visibility.",
      },
      {
        question: "Does every feature depend on AI?",
        answer:
          "No. SolarGRANT Pro includes AI-assisted sales follow-up, but the main value is a structured process for lead handling, quoting, grant preparation, documentation, and follow-up.",
      },
    ],
    relatedServices: [
      "quote-generator",
      "seai-grant-workflow",
      "project-management",
      "ai-sales",
    ],
  },
  {
    slug: "quote-generator",
    navTitle: "Quote Workflow",
    metaTitle: "Quotation Workflow Software For Renewable Energy Installers",
    metaDescription:
      "SolarGRANT Pro quote workflow software for renewable energy installers. Collect customer details, estimate system sizing and savings, gather uploads, and prepare cleaner quotation conversations.",
    kicker: "Quote workflow",
    h1: "Quotation Workflow Software For Installers",
    intro:
      "Turn vague homeowner enquiries into better prepared quote conversations by collecting property details, usage signals, uploads, and indicative estimate ranges before your team calls.",
    summary:
      "The SolarGRANT Pro quotation workflow supports sales preparation. It helps your team understand the opportunity earlier while final pricing stays with your company after survey and technical review.",
    heroPoints: [
      "Homeowner details before the call",
      "Estimated system and savings ranges",
      "Uploads and notes in one record",
    ],
    benefits: [
      "Collect property, usage, roof, and contact details in a consistent format",
      "Show indicative system sizing and savings ranges without presenting a final quote",
      "Request useful uploads such as meter, roof, or bill photos",
      "Give sales teams a cleaner lead summary before the first serious conversation",
      "Route quote requests into follow-up and project stages when the lead progresses",
    ],
    process: [
      "A homeowner completes the branded quote flow",
      "SolarGRANT Pro collects the details your team normally has to chase",
      "The lead record highlights estimate ranges, uploads, and missing items",
      "Your team follows up with a stronger sales call",
    ],
    proof: {
      kicker: "See the workflow",
      title: "From Intake Form To Quote-Ready Lead",
      intro:
        "SolarGRANT Pro connects homeowner upload steps, quotation preparation, and the lead summary your team reviews before calling.",
      items: [seaiFormProof, dashboardProof],
    },
    demo: {
      ...defaultDemo,
      title: "Watch The Quote Workflow",
      intro:
        "See how customer details move from quote intake into a clearer installer record for sales review.",
    },
    insights: [
      {
        title: "Cleaner quote calls start before the call",
        copy:
          "Installers often waste the first conversation collecting basic details. A structured quote workflow lets the sales team start with a clearer view of the home and the homeowner's intent.",
        points: [
          "Less time spent asking for basic property information",
          "More useful discovery questions during the call",
          "A better handover if the opportunity moves to survey or final proposal",
        ],
      },
      {
        title: "Estimated ranges should support, not replace, expertise",
        copy:
          "The software can help frame a likely system size or savings range, but it should not pretend to replace installer judgement, site survey, equipment choice, or final pricing.",
        points: [
          "Keep estimates clearly indicative",
          "Use uploads and notes to spot obvious blockers earlier",
          "Let the installer control the final quote and customer promise",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the quote generator issue final installed prices?",
        answer:
          "No. It supports lead preparation and indicative ranges. Final prices should still depend on your technical review, survey, equipment, and company process.",
      },
      {
        question: "Can homeowners upload photos or supporting files?",
        answer:
          "Yes. The flow can request useful files so the installer has better information before contacting the homeowner.",
      },
      {
        question: "Can the quote flow connect to the project pipeline?",
        answer:
          "Yes. Suitable enquiries can move into follow-up, survey, quote, and project stages inside the broader platform.",
      },
    ],
    relatedServices: [
      "seai-grant-workflow",
      "project-management",
      "free-website",
    ],
  },
  {
    slug: "seai-grant-workflow",
    navTitle: "Grant Workflow",
    metaTitle: "Grant Workflow Software For Renewable Energy Installers",
    metaDescription:
      "SolarGRANT Pro helps installers collect required grant information, reduce missing details, improve grant readiness, and streamline administration handover.",
    kicker: "Grant administration",
    h1: "Grant Eligibility Workflow For Installers",
    intro:
      "Collect grant-related details earlier, spot missing information, and give your admin team a clearer handover before the project reaches the paperwork stage.",
    summary:
      "The grant workflow is built to reduce back-and-forth. It does not guarantee approval, but it helps installers collect and review the information they need in a more organised way.",
    heroPoints: [
      "Required information collected earlier",
      "Missing details flagged sooner",
      "Grant readiness visible beside each lead",
    ],
    benefits: [
      "Ask for MPRN, county, property, and customer details in a structured flow",
      "Reduce repeated email and phone requests for the same missing information",
      "Keep readiness status visible alongside quote and project status",
      "Prepare cleaner admin handovers before paperwork begins",
      "Give installers a branded customer page for grant-related intake",
    ],
    process: [
      "Configure the information your team needs before grant admin starts",
      "Collect details through a customer-friendly form",
      "Flag missing or review-needed answers in the lead record",
      "Move grant-ready leads into the next installer action",
    ],
    proof: {
      kicker: "Grant workflow proof",
      title: "See The Homeowner Grant Intake Flow",
      intro:
        "Dedicated screenshot areas show the customer form and installer view used to review grant readiness.",
      items: [seaiFormProof, dashboardProof, leadTableProof],
    },
    demo: {
      ...defaultDemo,
      title: "Watch The Grant Intake Demo",
      intro:
        "Use a product walkthrough here to show the customer form, required fields, review screen, and next action inside the dashboard.",
    },
    insights: [
      {
        title: "How grant administration slows installer teams down",
        copy:
          "Grant admin becomes harder when required information is scattered across emails, calls, photos, and spreadsheets. The delay is usually a process problem before it is a paperwork problem.",
        points: [
          "Collect key homeowner information before the project moves too far",
          "Keep grant readiness visible to sales and admin at the same time",
          "Reduce repeated manual checks for information that should be standard",
        ],
      },
      {
        title: "Grant readiness is not the same as approval",
        copy:
          "The software should support a cleaner installer process while keeping approval decisions and compliance responsibility where they belong.",
        points: [
          "Use clear language around review and readiness",
          "Avoid promising approval before the proper checks are complete",
          "Keep the installer's internal process auditable and visible",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the software guarantee grant approval?",
        answer:
          "No. It helps installers collect and organise information for their own process, but it does not guarantee approval.",
      },
      {
        question: "Can the form match our current checklist?",
        answer:
          "Yes. The intake can be shaped around the information your team already needs before moving a lead or project forward.",
      },
      {
        question: "Is this page for homeowners applying directly?",
        answer:
          "No. Clada Systems sells software to installation companies, not homeowner grant services.",
      },
    ],
    relatedServices: ["quote-generator", "project-management", "features"],
  },
  {
    slug: "project-management",
    navTitle: "Workflow Management",
    metaTitle: "Installer Workflow Management Software",
    metaDescription:
      "Workflow management software for renewable energy installers. Track lead status, quotation status, install status, customer communication, documentation, and workflow visibility.",
    kicker: "Workflow visibility",
    h1: "Workflow Management Software For Installer Teams",
    intro:
      "Give sales, admin, and operations teams one place to see lead status, quote progress, site visit stages, install readiness, and follow-up responsibility.",
    summary:
      "The workflow management area helps installers move away from scattered spreadsheets by showing where each customer sits in the sales and delivery process.",
    heroPoints: [
      "Lead and quote status",
      "Install and paperwork stages",
      "Team next actions",
    ],
    benefits: [
      "Track every lead from new enquiry through quote, survey, install, and completion",
      "Keep customer notes, uploads, and status changes connected to the lead",
      "Give the team a shared view of who needs follow-up next",
      "Reduce missed handovers between sales and operations",
      "Spot bottlenecks before they turn into customer delays",
    ],
    process: [
      "Capture or import the lead",
      "Move the opportunity through quote and survey stages",
      "Track grant, project, and install status in the same record",
      "Review open actions and follow-up queues with the team",
    ],
    proof: {
      kicker: "Inside the dashboard",
      title: "How Leads Are Organised",
      intro:
        "Reusable dashboard screenshot blocks show pipeline status, sales priority, review queues, and team visibility.",
      items: [dashboardProof, leadTableProof],
    },
    demo: {
      ...defaultDemo,
      title: "Watch The Dashboard Demo",
      intro:
        "See how a lead can move from enquiry to quotation, survey, and active project stages inside the dashboard.",
    },
    insights: [
      {
        title: "Why spreadsheets start to fail",
        copy:
          "A spreadsheet can track rows, but it rarely gives sales, admin, and project teams a reliable shared process. As volume grows, missing context becomes expensive.",
        points: [
          "Status fields drift when everyone updates them differently",
          "Customer details live away from the next action",
          "Managers struggle to see what is stuck or overdue",
        ],
      },
      {
        title: "How workflow software helps installers operate efficiently",
        copy:
          "A clearer system does not just store information. It helps teams work in the same order, review the same signals, and keep every opportunity moving.",
        points: [
          "Sales can focus on the strongest opportunities",
          "Admin can see what information is missing",
          "Operations can understand what has been promised before delivery begins",
        ],
      },
    ],
    faqs: [
      {
        question: "Can this replace our lead spreadsheet?",
        answer:
          "For many installers, yes. SolarGRANT Pro is designed to give teams a clearer shared workflow than a spreadsheet can provide.",
      },
      {
        question: "Does it support both sales and operations?",
        answer:
          "Yes. It connects lead review, quote progress, follow-up, grant readiness, and project status in one system.",
      },
      {
        question: "Can we keep our current stages?",
        answer:
          "The workflow can be configured around your existing sales and project process during onboarding.",
      },
    ],
    relatedServices: ["features", "quote-generator", "seai-grant-workflow"],
  },
  {
    slug: "ai-sales",
    navTitle: "Sales Follow-Up",
    metaTitle: "AI-Assisted Sales Follow-Up For Installers",
    metaDescription:
      "AI-assisted sales follow-up software for installers. Support enquiry review, lead nurturing, customer response, and next-step prompts inside SolarGRANT Pro.",
    kicker: "Sales follow-up",
    h1: "AI-Assisted Sales Follow-Up For Installers",
    intro:
      "Support enquiry review, lead nurturing, and faster customer response without turning your sales process into an AI buzzword.",
    summary:
      "The sales layer helps installers respond quickly, organise lead quality, support outreach, and keep interested homeowners from going quiet after the first enquiry.",
    heroPoints: [
      "AI-assisted follow-up",
      "Follow-up prompts and nurturing",
      "Campaign-to-dashboard handoff",
    ],
    benefits: [
      "Connect campaign enquiries to structured customer intake forms",
      "Prioritise leads by urgency, readiness, and missing details",
      "Support faster follow-up with clearer call notes and next-step prompts",
      "Nurture customers who are interested but not ready to book immediately",
      "Integrate Meta ad enquiries into the same lead handling process",
    ],
    process: [
      "Capture the enquiry from website, campaign, or referral traffic",
      "Collect the customer details needed to understand the opportunity",
      "Review lead quality and suggested next action",
      "Track follow-up so interested homeowners do not disappear",
    ],
    proof: {
      kicker: "Lead review proof",
      title: "How Sales Teams Prioritise Follow-Up",
      intro:
        "SolarGRANT Pro keeps lead status, sales signals, and follow-up queues visible so installer teams can prioritise the right next action.",
      items: [dashboardProof, leadTableProof],
    },
    demo: {
      ...defaultDemo,
      title: "Watch The Lead Follow-Up Demo",
      intro:
        "See how a campaign or website lead can enter the system, be reviewed, and move into the next follow-up action.",
    },
    insights: [
      {
        title: "How faster follow-up improves solar sales",
        copy:
          "When customers submit a renewable energy enquiry, the installer that responds with useful context first often has the stronger conversation.",
        points: [
          "A quick response matters most when the lead is actively comparing options",
          "Structured forms help the team avoid a generic first call",
          "Follow-up reminders reduce drop-off after initial interest",
        ],
      },
      {
        title: "Where AI belongs in installer sales",
        copy:
          "AI should support the team with organisation, summarisation, and next-step assistance. It should not replace the installer's judgement, pricing, or customer relationship.",
        points: [
          "Use automation to reduce repetitive admin",
          "Keep human control over claims, quotes, and commitments",
          "Treat sales assistance as part of a wider workflow, not a standalone trick",
        ],
      },
    ],
    faqs: [
      {
        question: "Does AI guarantee sales?",
        answer:
          "No. The software supports faster response, better organisation, and more consistent follow-up, but it cannot guarantee sales.",
      },
      {
        question: "Can this work with Meta ads?",
        answer:
          "Yes. Campaign enquiries can be routed into the same intake, review, and follow-up process used for website leads.",
      },
      {
        question: "Will our team still control customer communication?",
        answer:
          "Yes. Your team stays in control of pricing, sales conversations, and customer promises.",
      },
    ],
    relatedServices: ["features", "quote-generator", "seai-grant-workflow"],
  },
  {
    slug: "pricing",
    navTitle: "Discuss Fit",
    metaTitle: "Discuss SolarGRANT Pro With Clada Systems",
    metaDescription:
      "Book a demonstration with Clada Systems to discuss your installer workflow and the right SolarGRANT Pro setup for your renewable energy business.",
    kicker: "Workflow discussion",
    h1: "Discuss Your Installer Workflow With Clada Systems",
    intro:
      "SolarGRANT Pro is scoped around each installer's workflow, lead sources, quotation process, grant administration and customer handover requirements.",
    summary:
      "Rather than publishing fixed packages, Clada Systems uses a demonstration-led process to understand your business workflow and recommend the right SolarGRANT Pro setup.",
    heroPoints: [
      "Workflow review",
      "SolarGRANT Pro demonstration",
      "Implementation discussion",
    ],
    benefits: [
      "Lead capture and homeowner intake requirements",
      "Quote workflow and sales preparation needs",
      "Grant readiness and administration handover",
      "CRM, customer records and installer dashboard setup",
      "AI-assisted follow-up where it supports the team",
      "Customer documentation and application pack requirements",
      "Professional support model for your installer process",
    ],
    process: [
      "Book a demonstration with Clada Systems",
      "Review your current website, lead sources, and sales process",
      "Discuss workflow configuration, onboarding, and support requirements",
      "Agree the right SolarGRANT Pro setup and next steps",
    ],
    proof: {
      kicker: "What we discuss",
      title: "Software Shaped Around The Installer Workflow",
      intro:
        "The demonstration focuses on the dashboard, intake forms, quote workflow, grant readiness, and the operational process your team needs to improve.",
      items: [websiteProof, dashboardProof, seaiFormProof],
    },
    demo: {
      ...defaultDemo,
      title: "Watch The SolarGRANT Pro Walkthrough",
      intro:
        "See how SolarGRANT Pro can support enquiry capture, quotation preparation, grant readiness, customer records, and follow-up in one installer workflow.",
    },
    insights: [
      {
        title: "Why we discuss workflow before pricing",
        copy:
          "Renewable energy installers often have different lead sources, admin responsibilities, team structures, and handover points. A short workflow review makes the recommendation more useful than a public package table.",
        points: [
          "Website enquiries can feed directly into the platform",
          "The dashboard gives the team one shared view of active leads",
          "Onboarding can be shaped around the installer's actual process",
        ],
      },
    ],
    faqs: [
      {
        question: "How is SolarGRANT Pro pricing handled?",
        answer:
          "Clada Systems discusses pricing after a demonstration and workflow review, so the recommended setup reflects your lead sources, sales process, grant administration, documentation needs, and support requirements.",
      },
      {
        question: "Is there public package pricing?",
        answer:
          "No. SolarGRANT Pro is sold through a book-a-demo model because installer workflows vary. The discussion focuses on fit, implementation, and the right level of support.",
      },
      {
        question: "Can setup vary by installer?",
        answer:
          "Yes. Final setup depends on your current website, lead sources, sales process, and workflow requirements.",
      },
    ],
    relatedServices: ["features", "quote-generator", "project-management"],
  },
  {
    slug: "free-website",
    navTitle: "Website Intake",
    metaTitle: "Lead Capture Website Support For Installers",
    metaDescription:
      "Professional lead capture website support from Clada Systems can help installer enquiries feed directly into SolarGRANT Pro workflows.",
    kicker: "Website intake",
    h1: "Website Intake Connected To SolarGRANT Pro",
    intro:
      "Installer websites work better when enquiries arrive with enough context to support quotation, grant, and follow-up workflows.",
    summary:
      "Website intake exists because lead generation and lead handling should not be disconnected. Homeowner forms, calls to action, and follow-up should feed the same installer process.",
    heroPoints: [
      "Professional website",
      "Lead capture forms",
      "Connected to your workflow",
    ],
    benefits: [
      "Professional website and intake support where required",
      "Homeowner enquiry forms connected to quote and grant intake",
      "Clear calls to action for solar, grant, and quote enquiries",
      "A cleaner first impression for your installer company",
      "No manual retyping between website forms and lead review",
    ],
    process: [
      "Review your current website and lead sources",
      "Build or refine the pages and calls to action",
      "Connect homeowner forms to SolarGRANT Pro",
      "Launch the site and review lead quality after enquiries arrive",
    ],
    proof: {
      kicker: "Website proof",
      title: "A Website Built To Feed The Workflow",
      intro:
        "Website screenshots, demo thumbnails, and form screenshots can be shown together to prove the offer is more than a brochure site.",
      items: [websiteProof, seaiFormProof, dashboardProof],
    },
    demo: {
      ...defaultDemo,
      title: "Watch The Website-To-Dashboard Demo",
      intro:
        "See how a website enquiry can move from customer form submission into the installer dashboard for review.",
    },
    insights: [
      {
        title: "Why website intake belongs in the software workflow",
        copy:
          "A website can create more admin if it only sends loose contact forms to an inbox. The offer is stronger when the site is connected to qualification, quote prep, and follow-up.",
        points: [
          "Homeowners are guided into useful forms instead of vague messages",
          "Leads arrive with the context the team needs to respond",
          "The website becomes part of the workflow, not a separate brochure",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Clada Systems support our lead capture website?",
        answer:
          "Yes. Website and form support can be included where it helps connect installer enquiries into SolarGRANT Pro.",
      },
      {
        question: "Does the website connect to the dashboard?",
        answer:
          "Yes. The goal is to capture homeowner enquiries and route them into the quote, grant, and follow-up process.",
      },
      {
        question: "Can it replace an existing installer website?",
        answer:
          "In many cases, yes. During onboarding, Clada Systems can review whether replacing or improving the current site is the better route.",
      },
    ],
    relatedServices: ["features", "quote-generator", "project-management"],
  },
] satisfies ProductPageContent[];

export const locationPages = [
  {
    slug: "dublin",
    areaLabel: "Dublin",
    metaTitle: "Renewable Energy Installer Software Dublin",
    metaDescription:
      "Workflow automation software for renewable energy installation companies serving Dublin, including lead capture, quotation preparation, grant information collection, and project visibility.",
    h1: "Installer Workflow Software For Dublin Teams",
    intro:
      "Clada Systems helps installer teams serving Dublin manage homeowner enquiries, quotation preparation, grant details, and project status in one software workflow.",
    localSignals: [
      "Lead capture for Dublin solar enquiries",
      "Quote and grant workflow visibility",
      "Project tracking for installer teams",
    ],
  },
  {
    slug: "cork",
    areaLabel: "Cork",
    metaTitle: "Renewable Energy Installer Software Cork",
    metaDescription:
      "Installer workflow software for Cork teams that need better lead capture, quotation preparation, grant workflow, and project visibility.",
    h1: "Installer Workflow Software For Cork Teams",
    intro:
      "For installers serving Cork, Clada Systems helps organise homeowner leads, quote preparation, grant information, and project follow-up.",
    localSignals: [
      "Homeowner lead intake",
      "Quote preparation workflow",
      "Installer project visibility",
    ],
  },
] satisfies LocationPageContent[];

export const homepageFaqs = [
  {
    question: "Is Clada Systems for homeowners?",
    answer:
      "No. Clada Systems is a software company for renewable energy installation companies in Ireland.",
  },
  {
    question: "What does SolarGRANT Pro include?",
    answer:
      "It includes lead capture, grant eligibility checks, CRM and workflow management, quote generation, AI-assisted sales follow-up, customer documentation, and application pack generation.",
  },
  {
    question: "Does the platform guarantee grant approval?",
    answer:
      "No. The grant workflow helps installers collect and organise information, but it does not guarantee approval.",
  },
] satisfies FaqItem[];

export const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "SolarGRANT Pro", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const platformNavItems = [
  {
    label: "Quote Workflow",
    href: "/quote-generator",
    description: "Prepare stronger quotation conversations from structured intake.",
  },
  {
    label: "Grant Workflow",
    href: "/seai-grant-workflow",
    description: "Collect grant details earlier and reduce administration gaps.",
  },
  {
    label: "Sales Follow-Up",
    href: "/ai-sales",
    description: "Keep next actions visible with practical AI-assisted support.",
  },
  {
    label: "Installer Workflows",
    href: "/project-management",
    description: "Manage records, status, documents, and handovers in one place.",
  },
];

export const corePublicPaths = [
  "/",
  "/about",
  "/features",
  "/quote-generator",
  "/seai-grant-workflow",
  "/project-management",
  "/ai-sales",
  "/pricing",
  "/free-website",
  "/contact",
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export function getIndexablePaths() {
  return corePublicPaths;
}
