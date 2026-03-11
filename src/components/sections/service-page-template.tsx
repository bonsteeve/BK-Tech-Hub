"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout";
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
    features: Array<{ title: string; description: string }>;
    benefits: string[];
    process: Array<{ title: string; description: string }>;
    faqs: Array<{ question: string; answer: string }>;
  };
}

const featureIcons = [Sparkles, Zap, Target, TrendingUp, Sparkles, Zap, Target, TrendingUp, Sparkles];
const featureGradients = [
  "from-cyan-500 to-blue-500",
  "from-violet-500 to-purple-500",
  "from-emerald-500 to-green-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-yellow-500",
];

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
      <Section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 255, 0.1), transparent)`,
            }}
          />
        </div>

        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              const gradient = featureGradients[index % featureGradients.length];

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/5">
                    {/* Visual header */}
                    <div className={cn("relative h-32 bg-gradient-to-br", gradient, "opacity-10 group-hover:opacity-20 transition-opacity")}>
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                          backgroundSize: '20px 20px',
                        }}
                      />
                    </div>
                    
                    <div className="p-6 -mt-16 relative">
                      {/* Icon */}
                      <motion.div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                          "bg-gradient-to-br shadow-lg",
                          gradient
                        )}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section variant="muted" className="relative overflow-hidden">
        {/* Background visual */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(0,212,255,0.1)" strokeWidth="1" strokeDasharray="10 10" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute inset-8"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="1" strokeDasharray="15 15" />
                  </svg>
                </motion.div>

                {/* Center content */}
                <div className="absolute inset-16 rounded-3xl bg-card border border-border/50 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4"
                  >
                    <TrendingUp className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold text-gradient mb-2">ROI+</div>
                  <div className="text-sm text-muted-foreground">Measurable Results</div>
                </div>

                {/* Floating badges */}
                {service.benefits.slice(0, 3).map((benefit, i) => {
                  const positions = [
                    "top-4 left-0",
                    "bottom-4 right-0",
                    "top-1/2 -left-4",
                  ];
                  return (
                    <motion.div
                      key={i}
                      className={cn("absolute px-3 py-2 rounded-lg bg-card/90 border border-border/50 shadow-lg max-w-[140px]", positions[i])}
                      animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity }}
                    >
                      <span className="text-xs font-medium line-clamp-2">{benefit.slice(0, 40)}...</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
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

              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "flex items-start gap-4 p-4 rounded-xl",
                      "bg-card/50 border border-border/50 hover:border-primary/30 transition-all group"
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
            >
              <Target className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering results
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {service.process.map((step, index) => {
              const gradient = featureGradients[index % featureGradients.length];

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0 group"
                >
                  {/* Connection line */}
                  {index < service.process.length - 1 && (
                    <motion.div
                      className="absolute left-[26px] top-16 bottom-0 w-0.5"
                      initial={{ background: "rgba(255,255,255,0.1)" }}
                      whileInView={{
                        background: [
                          "rgba(255,255,255,0.1)",
                          "linear-gradient(to bottom, rgba(0,212,255,0.5), rgba(139,92,246,0.5))",
                        ],
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    />
                  )}

                  {/* Number circle */}
                  <motion.div
                    className={cn(
                      "absolute left-0 top-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg",
                      "bg-gradient-to-br text-white",
                      gradient
                    )}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Content card */}
                  <div className="p-6 rounded-xl bg-card/30 border border-border/50 group-hover:border-primary/30 group-hover:bg-card/50 transition-all">
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
            <Accordion className="w-full space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem className="rounded-xl border border-border/50 bg-card/50 px-6 overflow-hidden hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-medium hover:text-primary py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
