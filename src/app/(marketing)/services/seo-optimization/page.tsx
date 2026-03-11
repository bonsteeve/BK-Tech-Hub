import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { servicesData } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

const service = servicesData["seo-optimization"];

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  keywords: [
    "SEO services",
    "search engine optimization",
    "SEO audit",
    "keyword research",
    "on-page SEO",
    "technical SEO",
    "local SEO",
  ],
  openGraph: {
    title: `${service.title} | BK Tech Hub`,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
  },
  alternates: {
    canonical: `${siteConfig.url}/services/${service.slug}`,
  },
};

export default function SEOOptimizationPage() {
  return <ServicePageTemplate service={service} />;
}
