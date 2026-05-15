import type { Metadata } from "next";
import {
  homepageFaqs,
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
    url: absoluteUrl("/"),
    logo: absoluteUrl("/emerald-logo-dark.png"),
    image: absoluteUrl(siteConfig.business.photoUrl ?? "/emerald-logo-dark.png"),
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: "Ireland",
    },
    knowsAbout: [
      "solar installer software",
      "AI-assisted lead generation",
      "solar quote generator software",
      "SEAI grant workflow software",
      "solar project management software",
      "homeowner onboarding software",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "EUR500/month Solar Growth Software Package",
        price: "500",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "SoftwareApplication",
          "@id": `${absoluteUrl("/")}#software`,
          name: siteConfig.name,
          applicationCategory: "BusinessApplication",
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
    name: siteConfig.name,
    url: absoluteUrl("/"),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Solar installation companies in Ireland",
    },
    offers: {
      "@type": "Offer",
      name: "EUR500/month Solar Growth Software Package",
      price: "500",
      priceCurrency: "EUR",
      description:
        "AI-assisted sales workflow, quote generator, SEAI grant streamline form, project management tools, lead capture system, free professional website, and onboarding support.",
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
      audienceType: "Solar installation companies",
    },
  };
}

export function createQuoteGeneratorServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl("/quote")}#service`,
    name: "Solar Quote Generator Software for Installers",
    serviceType: "Solar quote generator software",
    description:
      "Software that helps solar installers capture homeowner details, estimate system size and savings, pre-qualify leads, collect files, and prepare better sales calls.",
    url: absoluteUrl("/quote"),
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
    serviceType: "Solar installer software",
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
  title: "AI Sales Software for Solar Installers | Emerald Solar Solutions",
  description:
    "Emerald Solar Solutions provides AI-assisted sales, quote generation, SEAI grant workflow, project management, and lead capture software for solar installers in Ireland.",
  path: "/",
});

export const quotePageMetadata = createPageMetadata({
  title: "Solar Quote Generator Software for Installers | Emerald Solar Solutions",
  description:
    "Solar quote generator software for installers. Capture homeowner details, estimate system size and savings, pre-qualify leads, collect files, and prepare better sales calls.",
  path: "/quote",
});

export const homepageSchemas = [
  createOrganizationSchema(),
  createSoftwareApplicationSchema(),
  createFaqSchema(homepageFaqs),
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
      "free-website-for-solar-installers",
    ].includes(page.slug),
  );
}
