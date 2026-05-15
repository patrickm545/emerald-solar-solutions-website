import { notFound } from "next/navigation";
import { LocationPage } from "@/components/marketing-pages";
import { getLocationPage, locationPages } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locationPages.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    notFound();
  }

  return <LocationPage location={location} />;
}
