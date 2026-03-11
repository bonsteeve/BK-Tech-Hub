"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroPage } from "./hero-page";
import { CTASection } from "./cta-section";
import { JsonLd } from "@/components/seo";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";
import { siteConfig, ctaLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ServicePageTemplateProps {
  service: {
    slug: string;
    title: string;
    badge: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    features: Array<{ title: string; description: string }>;
    benefits: string[];
    process: Array<{ title: string; description: string }>;
    faqs: Array<{ question: string; answer: string }>;
  };
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <JsonLd
        data={[
          generateServiceSchema({
            name: service.title,
            description: service.description,
            url: `${siteConfig.url}/services/${service.slug}`,
          }),
          generateFAQSchema({ faqs: service.faqs }),
        ]}
      />

      {/* Hero */}
      <HeroPage
        badge={service.badge}
        title={service.headline}
        titleHighlight={service.headlineHighlight}
        description={service.description}
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-base px-8 h-12">
            <Link href={ctaLinks.bookCall.href}>
              {ctaLinks.bookCall.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 h-12"
          >
            <Link href={ctaLinks.freeAudit.href}>
              {ctaLinks.freeAudit.text}
            </Link>
          </Button>
        </div>
      </HeroPage>

      {/* Features Grid */}
      <Section>
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full bg-card/50 border-border/50 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section variant="muted">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Invest in <span className="text-gradient">{service.title}</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The right investment in your digital presence pays dividends for
                years to come.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-xl",
                    "bg-card/50 border border-border/50"
                  )}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section>
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering results
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Line */}
                {index < service.process.length - 1 && (
                  <div className="absolute left-[18px] top-10 bottom-0 w-0.5 bg-border" />
                )}

                {/* Number */}
                <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our {service.title.toLowerCase()} services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
