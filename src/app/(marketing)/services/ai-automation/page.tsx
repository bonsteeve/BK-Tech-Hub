import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { servicesData } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

const service = servicesData["ai-automation"];

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "AI chatbot",
    "lead automation",
    "SME automation",
    "process automation",
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

export default function AIAutomationPage() {
  return <ServicePageTemplate service={service} />;
}
