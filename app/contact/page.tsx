import { ContactPage } from "@/components/marketing-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book a Demonstration",
  description:
    "Book a demonstration of SolarGRANT Pro from Clada Systems, the Irish software platform for renewable energy installer workflows.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
