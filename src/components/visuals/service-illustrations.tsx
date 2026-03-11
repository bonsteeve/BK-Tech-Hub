"use client";

import { motion } from "framer-motion";

interface IllustrationProps {
  className?: string;
}

export function WebDesignIllustration({ className }: IllustrationProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="web-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Browser window */}
        <motion.rect
          x="50" y="30" width="300" height="220"
          rx="12" fill="url(#web-grad)" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Browser bar */}
        <rect x="50" y="30" width="300" height="30" rx="12" fill="rgba(255,255,255,0.05)" />
        <circle cx="70" cy="45" r="5" fill="rgba(255,100,100,0.5)" />
        <circle cx="88" cy="45" r="5" fill="rgba(255,200,100,0.5)" />
        <circle cx="106" cy="45" r="5" fill="rgba(100,255,100,0.5)" />
        
        {/* Content blocks */}
        <motion.rect
          x="70" y="80" width="120" height="15" rx="4" fill="rgba(0, 212, 255, 0.4)"
          animate={{ width: [100, 120, 100] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <rect x="70" y="105" width="260" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="70" y="120" width="200" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
        
        {/* Grid items */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={70 + i * 90} y="150" width="75" height="80"
            rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
}

export function SEOIllustration({ className }: IllustrationProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="seo-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 212, 255, 0.4)" />
          </linearGradient>
        </defs>
        
        {/* Chart background */}
        <rect x="50" y="50" width="300" height="200" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="50" y1={90 + i * 40} x2="350" y2={90 + i * 40} stroke="rgba(255,255,255,0.05)" />
        ))}
        
        {/* Chart bars */}
        {[40, 65, 45, 80, 95, 70, 85, 100].map((h, i) => (
          <motion.rect
            key={i}
            x={70 + i * 35} y={250 - h * 1.8}
            width="25" height={h * 1.8}
            rx="4" fill="url(#seo-grad)"
            initial={{ height: 0, y: 250 }}
            animate={{ height: h * 1.8, y: 250 - h * 1.8 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
        
        {/* Trend line */}
        <motion.path
          d="M70 200 Q120 180, 150 160 T230 100 T310 60"
          fill="none" stroke="rgba(139, 92, 246, 0.8)" strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Search icon */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <circle cx="330" cy="80" r="25" fill="rgba(0, 212, 255, 0.2)" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="2" />
          <circle cx="325" cy="75" r="10" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
          <line x1="332" y1="82" x2="342" y2="92" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}

export function AIAutomationIllustration({ className }: IllustrationProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
          </linearGradient>
        </defs>
        
        {/* Central brain/chip */}
        <motion.circle
          cx="200" cy="150" r="60"
          fill="url(#ai-grad)" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Inner circuit pattern */}
        <motion.path
          d="M200 110 L200 130 M180 150 L220 150 M200 170 L200 190"
          stroke="rgba(255,255,255,0.5)" strokeWidth="2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="200" cy="150" r="15" fill="rgba(0, 212, 255, 0.5)" />
        
        {/* Connecting nodes */}
        {[
          { x: 80, y: 80, delay: 0 },
          { x: 320, y: 80, delay: 0.2 },
          { x: 80, y: 220, delay: 0.4 },
          { x: 320, y: 220, delay: 0.6 },
        ].map((node, i) => (
          <g key={i}>
            <motion.line
              x1="200" y1="150" x2={node.x} y2={node.y}
              stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: node.delay, duration: 0.5 }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r="20"
              fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: node.delay + 0.3 }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r="8"
              fill="rgba(139, 92, 246, 0.5)"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
            />
          </g>
        ))}
        
        {/* Data flow particles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            r="4" fill="rgba(0, 212, 255, 0.8)"
            initial={{ cx: 200, cy: 150 }}
            animate={{
              cx: [200, 80 + (i % 2) * 240, 200],
              cy: [150, 80 + Math.floor(i / 2) * 140, 150],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.75 }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BrandingIllustration({ className }: IllustrationProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
          </linearGradient>
        </defs>
        
        {/* Color palette circles */}
        <motion.circle
          cx="120" cy="150" r="50"
          fill="rgba(0, 212, 255, 0.3)" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.circle
          cx="200" cy="130" r="55"
          fill="rgba(139, 92, 246, 0.3)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.circle
          cx="270" cy="160" r="45"
          fill="rgba(236, 72, 153, 0.3)" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        
        {/* Typography lines */}
        <motion.rect
          x="80" y="230" width="100" height="12" rx="2" fill="rgba(255,255,255,0.3)"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.5 }}
        />
        <motion.rect
          x="80" y="250" width="150" height="8" rx="2" fill="rgba(255,255,255,0.15)"
          initial={{ width: 0 }}
          animate={{ width: 150 }}
          transition={{ delay: 0.6 }}
        />
        
        {/* Logo shape */}
        <motion.path
          d="M320 60 L360 100 L340 100 L340 140 L300 140 L300 100 L280 100 Z"
          fill="url(#brand-grad)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        />
        
        {/* Decorative elements */}
        <motion.rect
          x="250" y="230" width="80" height="50" rx="8"
          fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

export function CaseStudyPlaceholder({ className }: IllustrationProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 rounded-xl overflow-hidden">
        {/* Abstract pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 rounded-xl bg-primary/20 backdrop-blur-sm"
          animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm"
          animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
