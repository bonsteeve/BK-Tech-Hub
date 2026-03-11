import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug, services } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";
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

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            name: service.name,
            path: `/services/${service.slug}`,
            description: service.summary,
          }),
          buildFaqSchema(service.faq),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
