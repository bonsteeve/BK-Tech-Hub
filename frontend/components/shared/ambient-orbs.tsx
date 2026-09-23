"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientOrbs() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, 38, 0], y: [0, -22, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
        animate={{ x: [0, -32, 0], y: [0, 28, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
