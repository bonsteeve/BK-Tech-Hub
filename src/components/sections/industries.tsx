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
  { 
    name: "Professional Services", 
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-500",
    description: "Law firms, consultancies, agencies"
  },
  { 
    name: "SaaS & Technology", 
    icon: Code2,
    gradient: "from-violet-500 to-purple-500",
    description: "Software companies, startups"
  },
  { 
    name: "E-commerce & Retail", 
    icon: ShoppingCart,
    gradient: "from-orange-500 to-red-500",
    description: "Online stores, marketplaces"
  },
  { 
    name: "Healthcare & Wellness", 
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    description: "Clinics, wellness centers"
  },
  { 
    name: "Finance & Consulting", 
    icon: TrendingUp,
    gradient: "from-emerald-500 to-green-500",
    description: "Financial services, advisors"
  },
  { 
    name: "Manufacturing & Industrial", 
    icon: Factory,
    gradient: "from-amber-500 to-yellow-500",
    description: "B2B manufacturing, industrial"
  },
];

export function Industries() {
  return (
    <Section id="industries" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.1), transparent)`,
          }}
        />
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
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="flex -space-x-3">
              {industries.slice(0, 4).map((industry, i) => (
                <motion.div
                  key={industry.name}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br border-2 border-background",
                    industry.gradient
                  )}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <industry.icon className="w-5 h-5 text-white" />
                </motion.div>
              ))}
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center bg-card border-2 border-background"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-xs font-bold text-muted-foreground">+2</span>
              </motion.div>
            </div>
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise across sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={cn(
                  "relative flex items-center gap-4 p-5 rounded-2xl",
                  "bg-card/50 border border-border/50",
                  "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                )}
              >
                {/* Background gradient on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity",
                  industry.gradient
                )} />

                {/* Icon */}
                <motion.div
                  className={cn(
                    "relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0",
                    "bg-gradient-to-br shadow-lg",
                    industry.gradient
                  )}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <industry.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <span className="font-semibold text-base group-hover:text-primary transition-colors">
                    {industry.name}
                  </span>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {industry.description}
                  </p>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Don&apos;t see your industry?{" "}
            <span className="text-primary font-medium">We adapt to your unique needs.</span>
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
