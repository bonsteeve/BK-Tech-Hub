"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Wrench, Rocket, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals to create a strategic foundation.",
    icon: Search,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a comprehensive plan covering design, content, SEO, and technology.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Our team creates and develops your solution with regular check-ins and feedback loops.",
    icon: Wrench,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We launch your project and provide ongoing optimization based on real performance data.",
    icon: Rocket,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
  },
];

export function Process() {
  return (
    <Section variant="muted" id="process" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
          >
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for digital success
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-28 left-[12.5%] right-[12.5%] h-1 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-emerald-500/20 rounded-full" />
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center group">
                  {/* Icon Container */}
                  <div className="relative inline-flex mb-8">
                    {/* Pulsing background */}
                    <motion.div
                      className={cn("absolute inset-0 rounded-2xl", step.bgColor)}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    
                    {/* Main icon box */}
                    <motion.div
                      className={cn(
                        "relative w-24 h-24 rounded-2xl flex items-center justify-center",
                        "bg-gradient-to-br shadow-lg",
                        step.color
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Number badge */}
                    <motion.span
                      className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-card border-2 border-primary text-primary text-sm font-bold flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.2 }}
                    >
                      {step.number}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6 items-start">
                {/* Icon */}
                <div className="relative shrink-0">
                  <motion.div
                    className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br shadow-lg",
                      step.color
                    )}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-card border border-primary text-primary text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center ml-8 my-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                  <ArrowRight className="w-4 h-4 text-muted-foreground/50 ml-2 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
