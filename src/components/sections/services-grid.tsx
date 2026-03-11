"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, Bot, Palette } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Custom websites built for performance, conversions, and scale. From concept to launch, we create digital experiences that turn visitors into customers.",
    icon: Globe,
    href: "/services/web-design-development",
    features: [
      "Custom design tailored to your brand",
      "Lightning-fast performance",
      "Mobile-first responsive design",
      "SEO-ready architecture",
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Get found by your ideal customers. We implement technical SEO, content strategy, and ongoing optimization to increase your organic visibility.",
    icon: Search,
    href: "/services/seo-optimization",
    features: [
      "Technical SEO audits",
      "Keyword strategy",
      "On-page optimization",
      "Performance monitoring",
    ],
  },
  {
    title: "AI Automation for SMEs",
    description:
      "Automate repetitive tasks and scale your operations. We implement intelligent systems that save time and reduce costs without replacing your team.",
    icon: Bot,
    href: "/services/ai-automation",
    features: [
      "Workflow automation",
      "AI chatbots & assistants",
      "Lead qualification systems",
      "Custom integrations",
    ],
  },
  {
    title: "Branding & Digital Presence",
    description:
      "Stand out in a crowded market. We develop brand identities and digital strategies that communicate your value and build trust.",
    icon: Palette,
    href: "/services/branding-digital-presence",
    features: [
      "Brand identity design",
      "Visual systems",
      "Brand messaging",
      "Digital strategy",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function ServicesGrid() {
  return (
    <Section id="services">
      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic digital solutions that drive measurable growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full group">
                <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                          "bg-gradient-to-br from-primary/20 to-secondary/20"
                        )}
                      >
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
