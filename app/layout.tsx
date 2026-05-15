import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "AI Sales Software Platform for Solar Installers | Emerald Solar Solutions",
    template: "%s | Emerald Solar Solutions",
  },
  description: siteConfig.description,
  openGraph: {
    title: "AI Sales Software Platform for Solar Installers | Emerald Solar Solutions",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Software Platform for Solar Installers | Emerald Solar Solutions",
    description: siteConfig.description,
    site: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

