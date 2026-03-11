"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2,
  shouldReduceMotion 
}: { 
  value: number; 
  suffix?: string;
  duration?: number;
  shouldReduceMotion: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setCount(value);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", color: "from-sky-400 to-blue-500" },
  { value: 200, suffix: "%", label: "Avg. Traffic Boost", color: "from-emerald-400 to-green-500" },
  { value: 98, suffix: "%", label: "Client Retention", color: "from-violet-400 to-purple-500" },
  { value: 24, suffix: "/7", label: "Support Available", color: "from-amber-400 to-orange-500" },
];

export function StatsBar() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative py-8 md:py-12 border-y border-border/50 bg-muted/30 dark:bg-muted/10 overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <motion.div 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </motion.div>
                
                {!shouldReduceMotion && (
                  <motion.div
                    className={cn(
                      "absolute -inset-4 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity blur-xl -z-10",
                      stat.color
                    )}
                  />
                )}
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
