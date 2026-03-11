"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "BK Tech Hub transformed our online presence. Within 3 months, our organic traffic increased by 200% and lead quality improved dramatically.",
    name: "Sarah M.",
    role: "CEO",
    company: "GrowthFirst Consulting",
    rating: 5,
  },
  {
    quote:
      "The AI automation they implemented saves our team 20+ hours per week. The ROI was evident within the first month.",
    name: "James K.",
    role: "Operations Director",
    company: "ScaleUp Solutions",
    rating: 5,
  },
  {
    quote:
      "Finally, a web agency that understands business goals. They didn't just build a beautiful website—they built a lead generation machine.",
    name: "Michelle T.",
    role: "Founder",
    company: "Bright Ideas Agency",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section variant="muted" id="testimonials">
      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/20 transition-all">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        "bg-gradient-to-br from-primary/20 to-secondary/20",
                        "text-sm font-semibold text-primary"
                      )}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
