"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { GradientMesh, FloatingShapes } from "@/components/visuals";
import { ctaLinks } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <GradientMesh className="-z-10" />
      <FloatingShapes className="-z-10" variant="minimal" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <Container size="xl" className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1.5 border-primary/30 bg-primary/5"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2 text-primary" />
                <span className="text-sm">Trusted by growing businesses</span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
            >
              Build a Digital Presence{" "}
              <span className="text-gradient">That Converts</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              We help SMEs and growing businesses generate more leads through
              stunning websites, strategic SEO, and AI-powered automation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
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
                <Link href={ctaLinks.viewWork.href}>{ctaLinks.viewWork.text}</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "200%", label: "Avg. Traffic Increase" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero/hero-main.png"
                alt="Digital agency innovation - modern websites, dashboards, and digital experiences"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30"
              animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
