"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquare } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "BK Tech Hub transformed our online presence. Within 3 months, our organic traffic increased by 200% and lead quality improved dramatically.",
    name: "Sarah M.",
    role: "CEO",
    company: "GrowthFirst Consulting",
    rating: 5,
    gradient: "from-cyan-500/20 to-blue-500/20",
    avatarGradient: "from-cyan-500 to-blue-500",
  },
  {
    quote:
      "The AI automation they implemented saves our team 20+ hours per week. The ROI was evident within the first month.",
    name: "James K.",
    role: "Operations Director",
    company: "ScaleUp Solutions",
    rating: 5,
    gradient: "from-violet-500/20 to-purple-500/20",
    avatarGradient: "from-violet-500 to-purple-500",
  },
  {
    quote:
      "Finally, a web agency that understands business goals. They didn't just build a beautiful website—they built a lead generation machine.",
    name: "Michelle T.",
    role: "Founder",
    company: "Bright Ideas Agency",
    rating: 5,
    gradient: "from-emerald-500/20 to-green-500/20",
    avatarGradient: "from-emerald-500 to-green-500",
  },
];

export function Testimonials() {
  return (
    <Section variant="muted" id="testimonials" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
          >
            <MessageSquare className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/5">
                {/* Top gradient accent */}
                <div className={cn("h-1 w-full bg-gradient-to-r", testimonial.avatarGradient)} />

                {/* Background gradient on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  testimonial.gradient
                )} />

                <div className="relative p-6 lg:p-8">
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-6"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground mb-8 leading-relaxed text-base lg:text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center",
                          "bg-gradient-to-br shadow-lg",
                          testimonial.avatarGradient
                        )}
                      >
                        <span className="text-lg font-bold text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-success border-2 border-card" />
                    </div>

                    <div>
                      <div className="font-semibold text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-primary">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["from-cyan-500 to-blue-500", "from-violet-500 to-purple-500", "from-emerald-500 to-green-500"].map((gradient, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 border-card bg-gradient-to-br",
                    gradient
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              Trusted by <span className="text-foreground font-semibold">50+</span> businesses
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-primary text-primary" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              <span className="text-foreground font-semibold">4.9</span> average rating
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
