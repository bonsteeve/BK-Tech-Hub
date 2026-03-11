"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Main container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 212, 255, 0.3)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(0, 212, 255, 0.3)" />
              </linearGradient>
            </defs>
            <circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="url(#ring-gradient)"
              strokeWidth="1"
              strokeDasharray="20 10"
            />
          </svg>
        </motion.div>

        {/* Inner rotating ring (counter) */}
        <motion.div
          className="absolute w-[85%] h-[85%]"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              strokeDasharray="30 20"
            />
          </svg>
        </motion.div>

        {/* Central dashboard mockup */}
        <motion.div
          className="absolute w-[70%] h-[70%] rounded-3xl bg-card/80 border border-border/50 backdrop-blur-sm overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Browser bar */}
          <div className="h-8 bg-muted/50 border-b border-border/50 flex items-center px-3 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-4">
              <div className="h-4 bg-background/50 rounded-md max-w-[60%]" />
            </div>
          </div>

          {/* Content area */}
          <div className="p-4 space-y-3">
            {/* Nav mockup */}
            <div className="flex justify-between items-center">
              <div className="w-20 h-4 bg-primary/20 rounded" />
              <div className="flex gap-2">
                <div className="w-12 h-3 bg-muted rounded" />
                <div className="w-12 h-3 bg-muted rounded" />
                <div className="w-12 h-3 bg-muted rounded" />
              </div>
            </div>

            {/* Hero mockup */}
            <div className="space-y-2 py-4">
              <motion.div
                className="h-6 bg-gradient-to-r from-primary/30 to-secondary/30 rounded w-[80%]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="h-3 bg-muted/50 rounded w-[60%]" />
              <div className="h-3 bg-muted/50 rounded w-[40%]" />
            </div>

            {/* Cards mockup */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/30 p-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-4 h-4 rounded bg-primary/30 mb-2" />
                  <div className="h-2 bg-muted/50 rounded w-full mb-1" />
                  <div className="h-2 bg-muted/50 rounded w-[70%]" />
                </motion.div>
              ))}
            </div>

            {/* Chart mockup */}
            <motion.div
              className="h-16 mt-2 flex items-end gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary/40 to-primary/10 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements around dashboard */}
        <motion.div
          className="absolute w-16 h-16 -top-4 -right-4 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute w-14 h-14 -bottom-2 -left-2 rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute w-12 h-12 top-1/4 -left-8 rounded-lg bg-card border border-border/50 flex items-center justify-center shadow-lg"
          animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
