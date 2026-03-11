"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Wrench, Rocket } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals to create a strategic foundation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a comprehensive plan covering design, content, SEO, and technology.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Our team creates and develops your solution with regular check-ins and feedback loops.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We launch your project and provide ongoing optimization based on real performance data.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <Section variant="muted" id="process">
      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for digital success
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center">
                  {/* Number & Icon */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center",
                        "bg-card border border-border/50",
                        "group-hover:border-primary/30 transition-colors"
                      )}
                    >
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
