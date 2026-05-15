import { ContactPage } from "@/components/marketing-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book a Software Demo",
  description:
    "Book a demo of the Emerald Solar Solutions SaaS platform for solar installers, including AI-assisted sales software, quote generation software, SEAI workflow software, project management software, and the free website package.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
