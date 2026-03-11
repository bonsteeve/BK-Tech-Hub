"use client";

import { motion } from "framer-motion";
import { Target, Code, Handshake, Rocket, CheckCircle, Star } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Every decision is backed by data. We focus on metrics that matter—leads, conversions, and revenue growth.",
    color: "from-cyan-500 to-blue-500",
    cardBg: "bg-card-primary",
    iconBg: "bg-sky-500",
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "Modern tech stack, clean code, and best practices. Your website will be fast, secure, and built to last.",
    color: "from-violet-500 to-purple-500",
    cardBg: "bg-card-secondary",
    iconBg: "bg-violet-500",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description:
      "We're not just vendors—we're partners in your growth. Transparent communication and ongoing support.",
    color: "from-emerald-500 to-green-500",
    cardBg: "bg-card-success",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Rocket,
    title: "Future-Ready Solutions",
    description:
      "Stay ahead with AI integration, semantic SEO, and scalable architecture designed for tomorrow.",
    color: "from-orange-500 to-red-500",
    cardBg: "bg-card-warning",
    iconBg: "bg-amber-500",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="relative overflow-hidden">
      {/* Background Visual Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200"
                    cy="200"
                    r="195"
                    fill="none"
                    stroke="rgba(0, 212, 255, 0.1)"
                    strokeWidth="1"
                    strokeDasharray="15 10"
                  />
                </svg>
              </motion.div>

              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute inset-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200"
                    cy="200"
                    r="195"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.1)"
                    strokeWidth="1"
                    strokeDasharray="20 15"
                  />
                </svg>
              </motion.div>

              {/* Center content */}
              <div className="absolute inset-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm overflow-hidden">
                {/* Grid pattern */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Stats display */}
                <div className="relative h-full flex flex-col items-center justify-center p-6">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-center"
                  >
                    <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">98%</div>
                    <div className="text-muted-foreground">Client Satisfaction</div>
                  </motion.div>

                  {/* Star rating */}
                  <div className="flex gap-1 mt-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + star * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-8 right-0 px-4 py-2 rounded-full bg-card border border-border/50 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-medium">50+ Projects</span>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-0 px-4 py-2 rounded-full bg-card border border-border/50 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-sm font-medium">24/7 Support</span>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-primary">Fast Delivery</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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

            {/* Reasons Grid */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "flex gap-4 p-5 rounded-xl border transition-all duration-300 group",
                    reason.cardBg
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg",
                      reason.iconBg
                    )}
                  >
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border/50">
              {["5-star reviews", "On-time delivery", "Ongoing support"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
