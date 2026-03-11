import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BK Tech Hub | Modern Web Design, SEO, and AI Automation",
    template: "%s | BK Tech Hub",
  },
  description: siteConfig.description,
  keywords: [
    "web design",
    "web development",
    "technical SEO",
    "AI automation",
    "digital agency",
    "SME growth",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "BK Tech Hub | Modern Web Design, SEO, and AI Automation",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "BK Tech Hub | Modern Web Design, SEO, and AI Automation",
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
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${sora.variable} font-sans`}>
        <a
          href="#main-content"
          className="sr-only z-[999] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen overflow-x-clip">
          <JsonLd data={[buildOrganizationSchema(), buildLocalBusinessSchema()]} />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
