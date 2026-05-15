export type FaqItem = {
  question: string;
  answer: string;
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

const productionSiteUrl = "https://emeraldsolarsolutions.ie";

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
  name: "Emerald Solar Solutions",
  url: getSiteUrl(),
  description:
    "Emerald Solar Solutions is an Irish software company providing an AI-powered SaaS platform for solar installers, including sales software, quote generation software, SEAI workflow software, project management software, and lead capture tools.",
  defaultImage: "/emerald-logo-dark.png",
  sameAs: [
    "https://www.linkedin.com/company/emerald-solar-solutions",
    "https://x.com/emeraldsolarai",
  ],
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

export const servicePages = [
  {
    slug: "features",
    navTitle: "Features",
    metaTitle: "Solar Installer Workflow Software Features",
    metaDescription:
      "Explore the Emerald Solar Solutions SaaS platform for solar installers, including AI-assisted sales software, quote generation software, SEAI workflow software, project management software, and homeowner onboarding.",
    kicker: "Software platform features",
    h1: "Software Built Around The Solar Installer Sales Workflow",
    intro:
      "Emerald Solar Solutions brings lead capture, AI-assisted qualification, quote generation software, SEAI workflow software, project management software, and homeowner onboarding into one practical SaaS platform for Irish solar installation companies.",
    summary:
      "The Emerald Solar Solutions software platform is designed to reduce admin, speed up follow-up, and give your sales and operations team one clearer place to manage homeowner leads from first enquiry to booked job.",
    heroPoints: [
      "AI-assisted lead generation",
      "Solar sales software and quote generation software",
      "Project management software and SEAI workflow visibility",
    ],
    benefits: [
      "Capture enquiries from your website and route them into your sales workflow",
      "Use structured questions to qualify homeowners before a sales call",
      "Create cleaner solar quote conversations with system size and savings estimates",
      "Track quote, survey, install, and grant paperwork status in one dashboard",
      "Automate lead follow-up so fewer opportunities go cold",
      "Include a professional lead-generation website with the EUR500/month package",
    ],
    process: [
      "Map your current sales and admin workflow",
      "Set up lead capture, qualification, and quote steps",
      "Configure SEAI grant readiness and project status tracking",
      "Train your team on follow-up and project management",
      "Review performance and improve the workflow over time",
    ],
    faqs: [
      {
        question: "Is Emerald Solar Solutions a solar installer?",
        answer:
          "No. Emerald Solar Solutions is a software company serving solar installation companies. The platform helps installers generate, qualify, quote, and manage homeowner leads.",
      },
      {
        question: "Who is the software for?",
        answer:
          "It is built for solar installation companies in Ireland that want a better system for sales follow-up, quote preparation, SEAI information collection, and project management.",
      },
    ],
    relatedServices: ["quote-generator", "seai-grant-workflow", "project-management"],
  },
  {
    slug: "quote-generator",
    navTitle: "Quote Generator",
    metaTitle: "Solar Quote Generator Software for Installers | Emerald Solar Solutions",
    metaDescription:
      "Solar quote generator software for installers. Capture homeowner details, estimate system size and savings, pre-qualify leads, collect files, and prepare better sales calls.",
    kicker: "Quote generator software",
    h1: "Solar Quote Generator Software For Installers",
    intro:
      "Give your sales team structured quote generation software to capture homeowner details, estimate system size, estimate savings, and prepare better sales conversations before a technical review or final proposal.",
    summary:
      "The Emerald Solar Solutions quote generation software helps installers turn loose enquiries into clearer opportunities by collecting the information your team needs before the first serious sales call.",
    heroPoints: [
      "Capture homeowner details",
      "Estimate system size and savings",
      "Collect files and prepare sales calls",
    ],
    benefits: [
      "Collect property, usage, roof, and contact information in a consistent format",
      "Pre-qualify leads so your sales team can prioritise the best opportunities",
      "Estimate system size and savings ranges without presenting them as final quotes",
      "Collect photos, files, or notes needed for a better follow-up conversation",
      "Route quote requests into your wider solar installer workflow software",
    ],
    process: [
      "A homeowner lead completes your branded quote flow",
      "The system collects the details your sales team normally chases manually",
      "Your team reviews the estimate, notes, and lead quality",
      "Follow-up tasks and quote status are tracked in the platform",
      "Final pricing stays with your company after survey and technical review",
    ],
    faqs: [
      {
        question: "Does the quote generator create final installed prices?",
        answer:
          "No. It supports indicative qualification and sales preparation. Final pricing should still depend on your technical review, site survey, equipment choices, and company process.",
      },
      {
        question: "Can it capture photos or extra files?",
        answer:
          "Yes. The workflow can be set up to request supporting information so your team has more context before contacting the homeowner lead.",
      },
    ],
    relatedServices: ["ai-sales", "seai-grant-workflow", "project-management"],
  },
  {
    slug: "seai-grant-workflow",
    navTitle: "SEAI Grant Workflow",
    metaTitle: "SEAI Grant Workflow Software for Solar Installers | Emerald Solar Solutions",
    metaDescription:
      "SEAI workflow software for solar installers. Collect homeowner details, reduce missing information, check grant readiness, and prepare cleaner internal application workflows.",
    kicker: "SEAI workflow software",
    h1: "SEAI Grant Workflow Software",
    intro:
      "Use SEAI workflow software to reduce back-and-forth around grant information by collecting homeowner details, checking readiness, and keeping paperwork status visible alongside each lead or project.",
    summary:
      "The Emerald Solar Solutions SEAI workflow software helps your team gather cleaner information earlier. It does not guarantee SEAI approval, but it can reduce missing details and make your admin process easier to manage.",
    heroPoints: [
      "Collect homeowner details",
      "Reduce missing information",
      "Track grant paperwork status",
    ],
    benefits: [
      "Ask the right grant-related questions before your team has to chase them",
      "Flag missing homeowner information earlier in the sales journey",
      "Keep grant readiness visible beside quote, survey, and project status",
      "Prepare cleaner internal application packs for your admin team",
      "Reduce manual follow-up around repeat SEAI form questions",
    ],
    process: [
      "Configure the grant readiness questions your team needs",
      "Collect details from homeowner leads through a structured form",
      "Highlight missing information before the project moves forward",
      "Track grant paperwork status from enquiry through installation workflow",
      "Keep your team aligned without relying on scattered spreadsheets",
    ],
    faqs: [
      {
        question: "Does the software guarantee SEAI approval?",
        answer:
          "No. Emerald Solar Solutions does not guarantee SEAI approval. The workflow helps installers collect and organise information for their own process.",
      },
      {
        question: "Can it replace our current admin checklist?",
        answer:
          "It can be configured around your existing checklist so your team has a cleaner digital workflow instead of repeating the same information requests manually.",
      },
    ],
    relatedServices: ["quote-generator", "project-management", "features"],
  },
  {
    slug: "project-management",
    navTitle: "Project Management",
    metaTitle: "Project Management Software for Solar Installers | Emerald Solar Solutions",
    metaDescription:
      "Project management software for solar installers. Track leads, quote status, site visits, project status, SEAI paperwork, customer communication, and team visibility.",
    kicker: "Project management",
    h1: "Project Management Software For Solar Installers",
    intro:
      "Keep your team aligned with solar installer workflow software for lead status, quote status, site visit status, project status, SEAI paperwork, customer communication, and next actions.",
    summary:
      "Emerald Solar Solutions project management software helps installers move away from messy spreadsheets and disconnected tools by giving sales and operations a clearer shared workflow.",
    heroPoints: [
      "Track quote and site visit status",
      "Manage project and paperwork stages",
      "Improve team visibility",
    ],
    benefits: [
      "Track each lead from new enquiry through quote, site visit, booked job, and completion",
      "See quote status, site visit status, project status, and grant paperwork status",
      "Keep customer communication and internal notes in context",
      "Give sales, admin, and operations teams a shared view of next actions",
      "Reduce missed handovers between sales and project delivery",
    ],
    process: [
      "Import or capture new leads in your workflow",
      "Move opportunities through quote, follow-up, and survey stages",
      "Track project milestones and paperwork status",
      "Keep team notes and customer updates in one place",
      "Review pipeline visibility and operational bottlenecks",
    ],
    faqs: [
      {
        question: "Is this a replacement for our spreadsheet?",
        answer:
          "For many installers, yes. The platform gives your team a clearer pipeline and project view than a shared spreadsheet can provide.",
      },
      {
        question: "Can sales and operations use the same system?",
        answer:
          "Yes. The workflow is designed to connect lead handling, quoting, follow-up, project status, and paperwork visibility.",
      },
    ],
    relatedServices: ["features", "ai-sales", "seai-grant-workflow"],
  },
  {
    slug: "ai-sales",
    navTitle: "AI Sales",
    metaTitle: "AI Sales Software for Solar Installers | Emerald Solar Solutions",
    metaDescription:
      "AI-assisted sales software and solar sales software for installers in Ireland. Respond faster, qualify leads, support follow-up, improve sales scripts, and nurture homeowner enquiries.",
    kicker: "AI-assisted sales",
    h1: "AI-Assisted Lead Generation And Sales Follow-Up",
    intro:
      "Respond faster to solar enquiries, qualify homeowners more consistently, support follow-up, prepare sales scripts, and reduce missed opportunities without pretending AI can guarantee sales.",
    summary:
      "The Emerald Solar Solutions AI-assisted sales software helps your team prioritise the right leads, keep conversations moving, and avoid the silent drop-off that happens when follow-up depends on memory alone.",
    heroPoints: [
      "Faster lead response",
      "Better lead qualification",
      "Follow-up and script support",
    ],
    benefits: [
      "Help your sales team respond to new homeowner leads faster",
      "Use structured qualification to separate strong leads from vague enquiries",
      "Support sales scripts and call preparation with lead context",
      "Nurture homeowners who are interested but not ready to book immediately",
      "Reduce missed opportunities caused by slow or inconsistent follow-up",
    ],
    process: [
      "Capture the lead through your site or campaign",
      "Qualify the homeowner with structured questions",
      "Suggest next-step messaging and sales talking points",
      "Track follow-up status so leads do not go quiet unnoticed",
      "Review outcomes and refine your sales workflow",
    ],
    faqs: [
      {
        question: "Does AI guarantee more sales?",
        answer:
          "No. AI does not guarantee sales. It supports faster response, clearer qualification, and more consistent follow-up so your team can work opportunities more effectively.",
      },
      {
        question: "Can our team still control the sales conversation?",
        answer:
          "Yes. The software supports your team with context, prompts, and workflow structure while your company stays in control of pricing and customer communication.",
      },
    ],
    relatedServices: ["quote-generator", "project-management", "pricing"],
  },
  {
    slug: "pricing",
    navTitle: "Pricing",
    metaTitle: "Solar Installer Software Pricing | Emerald Solar Solutions",
    metaDescription:
      "Solar installer software pricing from Emerald Solar Solutions. The EUR500/month SaaS platform package includes AI sales software, quote generation software, SEAI workflow software, project management software, lead capture, onboarding support, and a free professional website.",
    kicker: "Pricing",
    h1: "EUR500/month Solar Growth Software Package",
    intro:
      "A focused monthly SaaS platform for Irish solar installers who want better lead capture, qualification, quote generation software, SEAI workflow software, project management software, and project visibility.",
    summary:
      "The EUR500/month Emerald Solar Solutions package includes AI-assisted sales software, quote generation software, SEAI grant streamline form, project management software, lead capture system, free professional website, and onboarding support.",
    heroPoints: [
      "EUR500/month package",
      "Free professional website included",
      "Onboarding support included",
    ],
    benefits: [
      "AI-assisted sales software",
      "Solar quote generation software",
      "SEAI workflow software",
      "Project management software",
      "Lead capture system",
      "Free professional website",
      "Onboarding support",
    ],
    process: [
      "Book a software demo",
      "Review your current website, sales process, and workflow requirements",
      "Set up your website and lead capture workflow",
      "Launch quote, SEAI, follow-up, and project management tools",
      "Refine the system as your installer team starts using it",
    ],
    faqs: [
      {
        question: "What is included in the EUR500/month package?",
        answer:
          "It includes AI-assisted sales workflow, quote generator, SEAI grant streamline form, project management tools, lead capture, a free professional website, and onboarding support.",
      },
      {
        question: "Can setup vary?",
        answer:
          "Yes. Final setup may depend on your current website, sales process, and workflow requirements.",
      },
    ],
    relatedServices: ["features", "free-website-for-solar-installers", "contact"],
  },
  {
    slug: "free-website-for-solar-installers",
    navTitle: "Free Website",
    metaTitle: "Free Website for Solar Installers | Emerald Solar Solutions",
    metaDescription:
      "A free professional lead-generation website is included when solar installers sign up to the EUR500/month Emerald Solar Solutions software package.",
    kicker: "Free website included",
    h1: "Free Professional Website For Solar Installers",
    intro:
      "Every installer who signs up to the EUR500/month package gets a professional lead-generation website included, built to capture solar enquiries and send them directly into your workflow.",
    summary:
      "Your website should not be a brochure that creates more admin. It should capture useful homeowner information, route leads into your sales process, and support faster follow-up.",
    heroPoints: [
      "Included with the EUR500/month package",
      "Built for solar lead capture",
      "Connected to your workflow",
    ],
    benefits: [
      "Professional website included as part of the monthly software package",
      "Lead capture forms connected to your quote and SEAI workflows",
      "Cleaner calls to action for homeowners researching solar",
      "A stronger first impression for your installer company",
      "Designed to reduce manual retyping and missed enquiries",
    ],
    process: [
      "Review your current website and sales process",
      "Build or refine your lead-generation website",
      "Connect forms to quote, SEAI, and project workflows",
      "Launch with demo-ready calls to action",
      "Improve content and conversion over time",
    ],
    faqs: [
      {
        question: "Is the website really included?",
        answer:
          "Yes. A professional lead-generation website is included when your installer company signs up to the EUR500/month software package.",
      },
      {
        question: "Does the website send leads into the software?",
        answer:
          "Yes. The goal is to capture solar enquiries and route them directly into your qualification, quote, SEAI, and project workflow.",
      },
    ],
    relatedServices: ["pricing", "features", "quote-generator"],
  },
  {
    slug: "solar-panels",
    navTitle: "Solar Panel Lead Capture",
    metaTitle: "Solar Panel Lead Capture Software for Installers",
    metaDescription:
      "Solar panel lead capture software for installers. Reframe homeowner solar enquiries into qualified leads, quote workflows, and project follow-up.",
    kicker: "Installer use case",
    h1: "Solar Panel Lead Capture Software For Installers",
    intro:
      "If homeowners are finding your company through solar panel searches, Emerald Solar Solutions helps turn those enquiries into qualified leads your sales team can follow up efficiently.",
    summary:
      "This is a software use-case page for solar installers. It explains how solar businesses can use software to capture homeowner demand and manage the sales workflow more clearly.",
    heroPoints: ["Lead capture", "Qualification", "Quote workflow"],
    benefits: [
      "Capture homeowner solar panel enquiries through structured forms",
      "Ask qualification questions before your team spends time chasing details",
      "Route good leads into quote and follow-up stages",
      "Keep weaker enquiries visible without letting them interrupt the team",
    ],
    process: [
      "Capture the solar enquiry",
      "Qualify the homeowner",
      "Prepare the quote conversation",
      "Track follow-up",
      "Move suitable leads into project management",
    ],
    faqs: [
      {
        question: "Is this page for solar installers?",
        answer:
          "Yes. Emerald Solar Solutions provides software for solar installation companies that want a clearer lead capture, qualification, quote, and project workflow.",
      },
    ],
    relatedServices: ["features", "quote-generator", "ai-sales"],
  },
  {
    slug: "domestic-solar",
    navTitle: "Homeowner Lead Workflow",
    metaTitle: "Homeowner Solar Lead Workflow Software",
    metaDescription:
      "Homeowner solar lead workflow software for installers. Qualify domestic solar enquiries, collect details, and reduce back-and-forth.",
    kicker: "Installer use case",
    h1: "Homeowner Solar Lead Workflow Software",
    intro:
      "Help your installer company manage domestic solar enquiries with structured qualification, quote preparation, homeowner onboarding, and follow-up tracking.",
    summary:
      "The platform helps your sales team reduce back-and-forth with homeowner leads while keeping the final quote and sales process under your control.",
    heroPoints: ["Homeowner onboarding", "Lead qualification", "Follow-up tracking"],
    benefits: [
      "Collect homeowner details earlier",
      "Reduce repeated email and phone questions",
      "Prepare better sales calls",
      "Track domestic lead status from enquiry to booked job",
    ],
    process: [
      "Capture the homeowner enquiry",
      "Collect required details",
      "Qualify and prioritise the lead",
      "Prepare the sales call",
      "Track next actions",
    ],
    faqs: [
      {
        question: "Is this for homeowners?",
        answer:
          "No. It is for solar installation companies that sell to homeowners and need a better workflow for those leads.",
      },
    ],
    relatedServices: ["quote-generator", "seai-grant-workflow", "project-management"],
  },
  {
    slug: "commercial-solar",
    navTitle: "Commercial Lead Workflow",
    metaTitle: "Commercial Solar Lead Workflow Software",
    metaDescription:
      "Commercial solar lead workflow software for installers. Capture business enquiries, qualify opportunities, and manage quote follow-up.",
    kicker: "Installer use case",
    h1: "Commercial Solar Lead Workflow Software",
    intro:
      "Give your installer company a clearer process for capturing and qualifying commercial solar enquiries before your team invests time in detailed proposals.",
    summary:
      "Commercial opportunities often need more context. Emerald Solar Solutions helps collect lead details, organise follow-up, and keep project status visible.",
    heroPoints: ["Business enquiries", "Qualification", "Pipeline visibility"],
    benefits: [
      "Capture commercial site and usage context",
      "Prepare better sales discovery calls",
      "Track proposal and survey status",
      "Keep follow-up visible across your team",
    ],
    process: [
      "Capture the commercial enquiry",
      "Collect business and site details",
      "Qualify the opportunity",
      "Track proposal follow-up",
      "Move won work into project stages",
    ],
    faqs: [
      {
        question: "Is this commercial solar page a software use case?",
        answer:
          "Yes. Emerald Solar Solutions provides software that helps solar installers manage commercial solar sales workflows.",
      },
    ],
    relatedServices: ["features", "project-management", "ai-sales"],
  },
  {
    slug: "battery-storage",
    navTitle: "Battery Lead Workflow",
    metaTitle: "Battery Storage Lead Workflow Software",
    metaDescription:
      "Battery storage lead workflow software for solar installers. Capture interest, qualify homeowner needs, and support follow-up.",
    kicker: "Installer use case",
    h1: "Battery Storage Lead Workflow Software",
    intro:
      "Use structured lead capture to understand whether homeowner leads are interested in battery storage, future upgrades, or solar-plus-storage conversations.",
    summary:
      "Battery questions can add admin to solar sales. The platform helps your team capture interest and keep follow-up organised.",
    heroPoints: ["Battery interest", "Qualification", "Follow-up"],
    benefits: [
      "Collect battery interest during the lead capture process",
      "Prepare better sales conversations around storage needs",
      "Keep upgrade opportunities visible",
      "Avoid losing context between first enquiry and proposal",
    ],
    process: [
      "Capture solar and battery interest",
      "Ask structured qualification questions",
      "Prepare the sales conversation",
      "Track quote status",
      "Follow up on future upgrade opportunities",
    ],
    faqs: [
      {
        question: "Is this battery installation?",
        answer:
          "No. This page describes software workflows for installers managing battery-related sales enquiries.",
      },
    ],
    relatedServices: ["quote-generator", "project-management", "features"],
  },
  {
    slug: "ev-charger-installation",
    navTitle: "EV Charger Lead Workflow",
    metaTitle: "EV Charger Lead Workflow Software",
    metaDescription:
      "EV charger lead workflow software for solar installers. Capture EV interest, qualify homeowner needs, and manage solar-related follow-up.",
    kicker: "Installer use case",
    h1: "EV Charger Lead Workflow Software",
    intro:
      "If your installer company also handles EV charger interest, Emerald Solar Solutions helps capture the right context and keep follow-up connected to your solar sales workflow.",
    summary:
      "The platform helps installers organise EV charger interest as part of a broader homeowner lead, quote, and project management process.",
    heroPoints: ["EV interest capture", "Sales context", "Project visibility"],
    benefits: [
      "Capture EV charger interest alongside solar enquiries",
      "Qualify homeowner needs before follow-up",
      "Keep related solar, battery, and EV notes together",
      "Track next actions in the same project workflow",
    ],
    process: [
      "Capture the enquiry",
      "Collect EV and solar context",
      "Qualify the lead",
      "Prepare the follow-up",
      "Track status through your workflow",
    ],
    faqs: [
      {
        question: "Is this EV charger page a software workflow use case?",
        answer:
          "Yes. Emerald Solar Solutions provides software workflows for installer companies that manage solar and related homeowner enquiries.",
      },
    ],
    relatedServices: ["features", "quote-generator", "project-management"],
  },
] satisfies ProductPageContent[];

export const locationPages = [
  {
    slug: "dublin",
    areaLabel: "Dublin",
    metaTitle: "Solar Installer Software Dublin",
    metaDescription:
      "AI-assisted sales, quote generation, SEAI workflow, and project management software for solar installers serving Dublin homeowner leads.",
    h1: "Solar Installer Software For Dublin Teams",
    intro:
      "Emerald Solar Solutions helps solar installation companies serving Dublin capture, qualify, quote, and manage homeowner leads through one software workflow.",
    localSignals: [
      "Lead capture for Dublin solar enquiries",
      "Quote and SEAI workflow visibility",
      "Project management for installer teams",
    ],
  },
  {
    slug: "cork",
    areaLabel: "Cork",
    metaTitle: "Solar Installer Software Cork",
    metaDescription:
      "Solar installer software for Cork teams that need better lead capture, quote generation, SEAI workflow, and project visibility.",
    h1: "Solar Installer Software For Cork Teams",
    intro:
      "For installers serving Cork, Emerald Solar Solutions helps organise homeowner leads, quote preparation, SEAI information collection, and project status.",
    localSignals: [
      "Homeowner lead qualification",
      "Quote generator workflow",
      "Installer project visibility",
    ],
  },
  {
    slug: "galway",
    areaLabel: "Galway",
    metaTitle: "Solar Installer Software Galway",
    metaDescription:
      "AI sales and project management software for solar installers serving Galway and the west of Ireland.",
    h1: "Solar Installer Software For Galway Teams",
    intro:
      "Emerald Solar Solutions supports installer teams serving Galway with lead capture, quote generation, SEAI workflow, and project management tools.",
    localSignals: [
      "AI-assisted follow-up",
      "SEAI information collection",
      "Sales pipeline visibility",
    ],
  },
  {
    slug: "limerick",
    areaLabel: "Limerick",
    metaTitle: "Solar Installer Software Limerick",
    metaDescription:
      "Software for solar installers serving Limerick, including AI lead generation, quote workflow, SEAI grant forms, and project management.",
    h1: "Solar Installer Software For Limerick Teams",
    intro:
      "Installer companies serving Limerick can use Emerald Solar Solutions to reduce admin, qualify leads faster, and keep quote and project status visible.",
    localSignals: [
      "Lead capture workflow",
      "Solar quote generator",
      "Project and paperwork tracking",
    ],
  },
  {
    slug: "waterford",
    areaLabel: "Waterford",
    metaTitle: "Solar Installer Software Waterford",
    metaDescription:
      "Solar installer software for Waterford teams that need lead capture, quote generation, SEAI workflow, and project management.",
    h1: "Solar Installer Software For Waterford Teams",
    intro:
      "Emerald Solar Solutions helps installers serving Waterford manage homeowner enquiries, quote preparation, follow-up, and project visibility.",
    localSignals: [
      "Homeowner onboarding",
      "Follow-up automation",
      "SEAI readiness workflow",
    ],
  },
  {
    slug: "kildare",
    areaLabel: "Kildare",
    metaTitle: "Solar Installer Software Kildare",
    metaDescription:
      "AI-assisted lead generation and project workflow software for solar installation companies serving Kildare.",
    h1: "Solar Installer Software For Kildare Teams",
    intro:
      "For installers serving Kildare, Emerald Solar Solutions keeps lead qualification, quote generation, SEAI details, and project tracking in one workflow.",
    localSignals: [
      "Lead qualification",
      "Quote workflow",
      "Team visibility",
    ],
  },
  {
    slug: "meath",
    areaLabel: "Meath",
    metaTitle: "Solar Installer Software Meath",
    metaDescription:
      "Solar installer software for Meath teams that want better lead capture, AI-assisted follow-up, SEAI workflow, and project management.",
    h1: "Solar Installer Software For Meath Teams",
    intro:
      "Emerald Solar Solutions helps installer teams serving Meath reduce admin and keep homeowner lead, quote, and project details organised.",
    localSignals: [
      "AI-assisted sales workflow",
      "SEAI grant information collection",
      "Project status tracking",
    ],
  },
  {
    slug: "wicklow",
    areaLabel: "Wicklow",
    metaTitle: "Solar Installer Software Wicklow",
    metaDescription:
      "Software for solar installation companies serving Wicklow, with lead generation, quote workflow, SEAI forms, and project management.",
    h1: "Solar Installer Software For Wicklow Teams",
    intro:
      "Installer companies serving Wicklow can use Emerald Solar Solutions to capture better leads, qualify homeowners faster, and manage project status.",
    localSignals: [
      "Lead capture",
      "Quote and SEAI workflow",
      "Installer project management",
    ],
  },
] satisfies LocationPageContent[];

export const homepageFaqs = [
  {
    question: "Is Emerald Solar Solutions for homeowners?",
    answer:
      "No. Emerald Solar Solutions is a software company that sells tools to solar installation companies in Ireland.",
  },
  {
    question: "What does the EUR500/month package include?",
    answer:
      "It includes AI-assisted sales software, quote generation software, SEAI workflow software, project management software, lead capture, a free professional website, and onboarding support.",
  },
  {
    question: "Does the platform guarantee SEAI grant approval?",
    answer:
      "No. The SEAI workflow helps installers collect and organise information, but it does not guarantee approval.",
  },
  {
    question: "Who should book a demo?",
    answer:
      "Solar installation companies that want to generate better leads, qualify homeowners faster, reduce admin, and manage more jobs from one workflow should book a software demo.",
  },
] satisfies FaqItem[];

export const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Quote Generator", href: "/quote-generator" },
  { label: "SEAI Grant Workflow", href: "/seai-grant-workflow" },
  { label: "Project Management", href: "/project-management" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export function getIndexablePaths() {
  return [
    "/",
    "/about",
    "/quote",
    ...servicePages.map((page) => `/${page.slug}`),
    "/contact",
    ...locationPages.map((page) => `/locations/${page.slug}`),
  ];
}
