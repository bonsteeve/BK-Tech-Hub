"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, Bot, Palette, CheckCircle } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Custom websites built for performance, conversions, and scale. From concept to launch, we create digital experiences that turn visitors into customers.",
    icon: Globe,
    href: "/services/web-design-development",
    image: "/images/services/service-web-design.png",
    features: [
      "Custom design tailored to your brand",
      "Lightning-fast performance",
      "Mobile-first responsive design",
      "SEO-ready architecture",
    ],
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
  },
  {
    title: "SEO Optimization",
    description:
      "Get found by your ideal customers. We implement technical SEO, content strategy, and ongoing optimization to increase your organic visibility.",
    icon: Search,
    href: "/services/seo-optimization",
    image: "/images/services/service-seo.png",
    features: [
      "Technical SEO audits",
      "Keyword strategy",
      "On-page optimization",
      "Performance monitoring",
    ],
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 via-emerald-500/5 to-transparent",
  },
  {
    title: "AI Automation for SMEs",
    description:
      "Automate repetitive tasks and scale your operations. We implement intelligent systems that save time and reduce costs without replacing your team.",
    icon: Bot,
    href: "/services/ai-automation",
    image: "/images/services/service-ai-automation.png",
    features: [
      "Workflow automation",
      "AI chatbots & assistants",
      "Lead qualification systems",
      "Custom integrations",
    ],
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-500/10 via-violet-500/5 to-transparent",
  },
  {
    title: "Branding & Digital Presence",
    description:
      "Stand out in a crowded market. We develop brand identities and digital strategies that communicate your value and build trust.",
    icon: Palette,
    href: "/services/branding-digital-presence",
    image: "/images/services/service-branding.png",
    features: [
      "Brand identity design",
      "Visual systems",
      "Brand messaging",
      "Digital strategy",
    ],
    gradient: "from-orange-500 to-pink-600",
    bgGradient: "from-orange-500/10 via-pink-500/5 to-transparent",
  },
];

export function ServicesGrid() {
  return (
    <Section id="services" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <Container size="xl">
        {/* Section Header */}
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
            <div className="w-8 h-8 rounded-lg bg-primary/30" />
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic digital solutions that drive measurable growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full group">
                <div className="h-full rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-primary/5">
                  {/* Visual Header with Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary/60 shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
