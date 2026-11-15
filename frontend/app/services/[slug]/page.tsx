import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { WebsiteCreationPage } from "@/components/services/website-creation-page";
import { getServiceBySlug, services } from "@/content/services";
import { websiteCreationContent } from "@/content/website-creation";
import { createPageMetadata, websiteCreationSEO } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  if (service.slug === "website-creation") {
    return {
      ...createPageMetadata({
        title: websiteCreationSEO.title,
        description: websiteCreationSEO.description,
        path: `/services/${service.slug}`,
        keywords: websiteCreationSEO.keywords,
      }),
      title: { absolute: websiteCreationSEO.title },
      alternates: { canonical: websiteCreationSEO.canonical },
    };
  }

  return createPageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: [service.name, "BK Tech Hub services", "digital growth services"],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isWebsiteCreation = service.slug === "website-creation";
  const faq = isWebsiteCreation ? websiteCreationContent.faqs.items : service.faq;

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            name: service.name,
            path: `/services/${service.slug}`,
            description: service.summary,
          }),
          buildFaqSchema(faq),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      {isWebsiteCreation ? (
        <WebsiteCreationPage />
      ) : (
        <ServicePageTemplate service={service} />
      )}
    </>
  );
}
