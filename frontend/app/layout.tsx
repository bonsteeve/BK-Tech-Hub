import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${sora.variable} font-sans`}>{children}</body>
    </html>
  );
}
