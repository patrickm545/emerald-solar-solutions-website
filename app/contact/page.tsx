import { ContactPage } from "@/components/marketing-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book a Software Demo",
  description:
    "Book a demo of Emerald Solar Solutions software for solar installers, including AI lead generation, quote generator, SEAI grant workflow, project management, and the free website package.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
