import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateServiceSchema, generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";
import { servicesData } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic digital solutions that drive measurable growth. Web design, SEO, AI automation, and branding services for SMEs and growing businesses.",
  openGraph: {
    title: "Our Services | BK Tech Hub",
    description:
      "Strategic digital solutions that drive measurable growth. Web design, SEO, AI automation, and branding services.",
    url: `${siteConfig.url}/services`,
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  const services = Object.values(servicesData);

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: "Our Services | BK Tech Hub",
            description:
              "Strategic digital solutions that drive measurable growth.",
            url: `${siteConfig.url}/services`,
          }),
          ...services.map((service) =>
            generateServiceSchema({
              name: service.title,
              description: service.description,
              url: `${siteConfig.url}/services/${service.slug}`,
            })
          ),
        ]}
      />

      <HeroPage
        title="Strategic Digital Solutions That"
        titleHighlight="Drive Growth"
        description="From stunning websites to AI-powered automation, we provide the digital tools and strategies your business needs to thrive online."
        breadcrumbs={[{ name: "Services", href: "/services" }]}
      />

      <Section>
        <Container size="xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                          "bg-gradient-to-br from-primary/20 to-secondary/20"
                        )}
                      >
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature.title}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          <span className="text-muted-foreground">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-primary text-sm font-medium group-hover:underline">
                      Learn more →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
