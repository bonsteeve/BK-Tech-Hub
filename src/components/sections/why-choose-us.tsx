"use client";

import { motion } from "framer-motion";
import { Target, Code, Handshake, Rocket } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Every decision is backed by data. We focus on metrics that matter—leads, conversions, and revenue growth.",
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "Modern tech stack, clean code, and best practices. Your website will be fast, secure, and built to last.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description:
      "We're not just vendors—we're partners in your growth. Transparent communication and ongoing support.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Solutions",
    description:
      "Stay ahead with AI integration, semantic SEO, and scalable architecture designed for tomorrow.",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why-us">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Leading Businesses Choose{" "}
              <span className="text-gradient">BK Tech Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine creative excellence with technical expertise to deliver
              digital solutions that drive real business results.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">
                  5-star client reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">
                  On-time delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">
                  Ongoing support
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-6 rounded-2xl border border-border/50 bg-card/30",
                  "hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                    "bg-gradient-to-br from-primary/20 to-secondary/20"
                  )}
                >
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
