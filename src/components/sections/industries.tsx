"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  ShoppingCart,
  Heart,
  TrendingUp,
  Factory,
} from "lucide-react";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Professional Services", icon: Briefcase },
  { name: "SaaS & Technology", icon: Code2 },
  { name: "E-commerce & Retail", icon: ShoppingCart },
  { name: "Healthcare & Wellness", icon: Heart },
  { name: "Finance & Consulting", icon: TrendingUp },
  { name: "Manufacturing & Industrial", icon: Factory },
];

export function Industries() {
  return (
    <Section id="industries">
      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise across sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "flex items-center gap-3 px-5 py-3 rounded-full",
                "bg-card/50 border border-border/50",
                "hover:border-primary/30 hover:bg-card transition-all duration-300"
              )}
            >
              <industry.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
