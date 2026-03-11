import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { servicesData } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

const service = servicesData["branding-digital-presence"];

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  keywords: [
    "branding services",
    "brand identity",
    "logo design",
    "visual identity",
    "brand strategy",
    "digital branding",
    "brand guidelines",
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

export default function BrandingDigitalPresencePage() {
  return <ServicePageTemplate service={service} />;
}
