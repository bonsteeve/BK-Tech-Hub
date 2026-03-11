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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
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
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 border-primary/30 bg-primary/5"
            >
              {badge}
            </Badge>
          )}

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-gradient">{titleHighlight}</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            {description}
          </p>

          {/* Optional Children (CTAs, etc.) */}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
