import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const websiteCreationSEO = {
  title: "Website Design & Development in Kenya | BK Tech Hub",
  description:
    "Get a professional business website designed to build trust, attract customers and generate enquiries. BK Tech Hub offers website design and development in Kenya.",
  keywords: [
    "website design Kenya",
    "website development Kenya",
    "website designers in Kenya",
    "business website development",
    "professional website design",
    "e-commerce website development Kenya",
    "website redesign Kenya",
  ],
  canonical: "https://www.bktechhub.com/services/website-creation",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
