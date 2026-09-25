import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [{ url: "/images/brand/logo-mark.svg", type: "image/svg+xml" }],
    apple: "/images/favicon1.png",
  },
  keywords: [
    "BK Tech Hub",
    "Automate the World",
    "ConversaOS",
    "WhatsApp automation",
    "AI WhatsApp",
    "process automation",
    "website creation",
    "hosting",
    "SEO",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} font-sans`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only z-[999] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-brand-yellow focus:px-3 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen overflow-x-clip">
          <JsonLd data={[buildOrganizationSchema(), buildLocalBusinessSchema()]} />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
