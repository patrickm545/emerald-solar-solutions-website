import type { Metadata } from "next";
import {
  servicePages,
  siteConfig,
  type FaqItem,
  type LocationPageContent,
  type ServicePageContent,
} from "@/lib/site-content";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "en_IE",
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.defaultImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.name,
      images: [absoluteUrl(siteConfig.defaultImage)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    alternateName: "SolarGRANT Pro software provider",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/clada-logo-dark.svg"),
    image: absoluteUrl(siteConfig.business.photoUrl ?? siteConfig.defaultImage),
    description: siteConfig.description,
    slogan: "Workflow automation software for renewable energy installers.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/clada-logo-dark.svg"),
    },
    sameAs: siteConfig.sameAs,
    areaServed: {
      "@type": "Country",
      name: "Ireland",
    },
    knowsAbout: [
      "solar installer software",
      "renewable energy installer software",
      "workflow automation software for installers",
      "SolarGRANT Pro",
      "lead management software",
      "installer sales workflow software",
      "AI-assisted sales software",
      "quote generation software",
      "grant workflow software",
      "customer workflow software",
      "application pack generation software",
      "customer documentation software",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "SolarGRANT Pro",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "SoftwareApplication",
          "@id": `${absoluteUrl("/")}#software`,
          name: "SolarGRANT Pro",
          applicationCategory: "BusinessApplication",
          applicationSubCategory: "Renewable energy installer workflow software",
          operatingSystem: "Web",
          description: siteConfig.description,
        },
      },
    ],
    ...(siteConfig.business.phone
      ? { telephone: siteConfig.business.phone }
      : {}),
    ...(siteConfig.business.email ? { email: siteConfig.business.email } : {}),
    ...(siteConfig.business.streetAddress || siteConfig.business.locality
      ? {
          address: {
            "@type": "PostalAddress",
            ...(siteConfig.business.streetAddress
              ? { streetAddress: siteConfig.business.streetAddress }
              : {}),
            ...(siteConfig.business.locality
              ? { addressLocality: siteConfig.business.locality }
              : {}),
            ...(siteConfig.business.region
              ? { addressRegion: siteConfig.business.region }
              : {}),
            ...(siteConfig.business.postalCode
              ? { postalCode: siteConfig.business.postalCode }
              : {}),
            addressCountry: siteConfig.business.country,
          },
        }
      : {}),
  };
}

export function createSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl("/")}#software`,
    name: "SolarGRANT Pro",
    alternateName: "Clada Systems workflow automation platform",
    url: absoluteUrl("/"),
    applicationCategory: "BusinessApplication",
    applicationSubCategory:
      "Lead, grant eligibility, quotation, CRM workflow, and customer documentation software",
    operatingSystem: "Web",
    description: siteConfig.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    featureList: [
      "lead capture software",
      "grant eligibility checks",
      "CRM workflow management",
      "quote generation software",
      "installer dashboard",
      "AI-assisted sales follow-up",
      "customer documentation",
      "application pack generation",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Renewable energy installation companies in Ireland",
    },
    offers: {
      "@type": "Offer",
      name: "SolarGRANT Pro",
      description:
        "Lead capture, grant eligibility checks, quote generation, customer workflow management, AI-assisted sales follow-up, customer documentation, and application pack generation.",
    },
    provider: {
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteConfig.name,
    },
  };
}

export function createServiceSchema(service: ServicePageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/${service.slug}`)}#service`,
    name: service.h1,
    serviceType: service.navTitle,
    description: service.metaDescription,
    url: absoluteUrl(`/${service.slug}`),
    provider: {
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Ireland",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Renewable energy installation companies",
    },
  };
}

export function createQuoteGeneratorServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl("/quote-generator")}#service`,
    name: "SolarGRANT Pro Quote Workflow",
    serviceType: "Quotation workflow software",
    description:
      "Software that helps installers capture customer details, estimate system size and savings, pre-qualify leads, collect files, and prepare better quotation calls.",
    url: absoluteUrl("/quote-generator"),
    provider: {
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Ireland",
    },
  };
}

export function createLocationServiceSchema(location: LocationPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/locations/${location.slug}`)}#service`,
    name: location.h1,
    serviceType: "Renewable energy installer software",
    description: location.metaDescription,
    url: absoluteUrl(`/locations/${location.slug}`),
    provider: {
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: location.areaLabel,
    },
  };
}

export function createFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const homepageMetadata = createPageMetadata({
  title: "Software Built for Renewable Energy Installers",
  description:
    "Clada Systems is an Irish software company building workflow automation tools for renewable energy businesses, including SolarGRANT Pro for leads, grants, quotations, and customer workflows.",
  path: "/",
});

export const aboutPageMetadata = createPageMetadata({
  title: "About Clada Systems",
  description:
    "Clada Systems is an Irish software company focused on digital transformation within the renewable energy sector.",
  path: "/about",
});

export const quotePageMetadata = createPageMetadata({
  title: "Quotation Workflow Software for Installers | Clada Systems",
  description:
    "SolarGRANT Pro helps installers capture customer details, estimate system size and savings, pre-qualify leads, collect files, and prepare better quotation calls.",
  path: "/quote-generator",
});

export const homepageSchemas = [
  createOrganizationSchema(),
  createSoftwareApplicationSchema(),
];

export function getCoreSoftwarePages() {
  return servicePages.filter((page) =>
    [
      "features",
      "quote-generator",
      "seai-grant-workflow",
      "project-management",
      "ai-sales",
      "pricing",
      "free-website",
    ].includes(page.slug),
  );
}
