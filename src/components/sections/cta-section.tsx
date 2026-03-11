"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout";
import { ctaLinks } from "@/lib/constants";

export function CTASection() {
  return (
    <Section variant="gradient" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Animated lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{ opacity: [0, 1, 0], x: [-100, 100, -100] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
          animate={{ opacity: [0, 1, 0], x: [100, -100, 100] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-16 left-[10%] w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6 text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-[10%] w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Zap className="w-5 h-5 text-secondary" />
      </motion.div>

      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">Limited spots available this month</span>
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-gradient">Digital Presence</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how we can help you achieve your growth goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="text-base px-8 h-14 shadow-lg shadow-primary/25">
                <Link href={ctaLinks.bookCall.href}>
                  {ctaLinks.bookCall.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 h-14"
              >
                <Link href={ctaLinks.freeAudit.href}>
                  {ctaLinks.freeAudit.text}
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>No commitment required</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Free strategy call</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Actionable insights</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
