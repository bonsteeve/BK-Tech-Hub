"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Breadcrumbs } from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HeroPageProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbs: Array<{ name: string; href: string }>;
  className?: string;
  children?: React.ReactNode;
}

export function HeroPage({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  className,
  children,
}: HeroPageProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
        className
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, -40, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-20 h-20 border border-primary/10 rounded-2xl"
          animate={{ rotate: [0, 90, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[5%] w-12 h-12 border border-secondary/10 rounded-full"
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-[15%] w-3 h-3 bg-primary/30 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[20%] w-2 h-2 bg-secondary/30 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

        {/* Decorative lines */}
        <motion.div
          className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{ x: [0, 100, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
          animate={{ x: [0, -80, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
      </div>

      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/5"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-gradient">{titleHighlight}</span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Optional Children (CTAs, etc.) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
