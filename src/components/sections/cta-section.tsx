"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout";
import { ctaLinks } from "@/lib/constants";

export function CTASection() {
  return (
    <Section variant="gradient" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
      </div>

      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your{" "}
            <span className="text-gradient">Digital Presence</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help you achieve your growth goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="text-base px-8 h-12">
              <Link href={ctaLinks.bookCall.href}>
                {ctaLinks.bookCall.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
            >
              <Link href={ctaLinks.freeAudit.href}>
                {ctaLinks.freeAudit.text}
              </Link>
            </Button>
          </div>

          {/* Trust Signal */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>
              No commitment required. We&apos;ll review your current situation and
              provide actionable insights.
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
