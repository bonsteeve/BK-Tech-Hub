import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { servicesData } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

const service = servicesData["web-design-development"];

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  keywords: [
    "web design",
    "web development",
    "custom website",
    "responsive design",
    "website development",
    "business website",
    "professional web design",
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

export default function WebDesignDevelopmentPage() {
  return <ServicePageTemplate service={service} />;
}
