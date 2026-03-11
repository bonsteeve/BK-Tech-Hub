"use client";

import { motion } from "framer-motion";

interface FloatingShapesProps {
  className?: string;
  variant?: "hero" | "section" | "minimal";
}

export function FloatingShapes({ className, variant = "hero" }: FloatingShapesProps) {
  if (variant === "minimal") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-primary/20"
          style={{ top: "20%", left: "10%" }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-secondary/20"
          style={{ top: "60%", right: "15%" }}
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Geometric shapes */}
        <motion.div
          className="absolute w-20 h-20 border border-primary/10 rounded-2xl"
          style={{ top: "10%", right: "5%" }}
          animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-12 h-12 border border-secondary/10 rounded-full"
          style={{ bottom: "20%", left: "8%" }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-primary/5 rounded-lg"
          style={{ top: "40%", left: "3%" }}
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large rotating ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] border border-primary/5 rounded-full"
        style={{ top: "-10%", right: "-10%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Medium ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] border border-secondary/5 rounded-full"
        style={{ top: "5%", right: "5%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating squares */}
      <motion.div
        className="absolute w-16 h-16 border border-primary/10 rounded-xl"
        style={{ top: "20%", left: "5%" }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-10 h-10 bg-primary/5 rounded-lg"
        style={{ top: "60%", left: "12%" }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-8 h-8 border border-secondary/10 rounded-full"
        style={{ bottom: "30%", right: "10%" }}
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Dots */}
      <motion.div
        className="absolute w-3 h-3 bg-primary/30 rounded-full"
        style={{ top: "15%", left: "20%" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute w-2 h-2 bg-secondary/30 rounded-full"
        style={{ top: "45%", right: "25%" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="absolute w-4 h-4 bg-primary/20 rounded-full"
        style={{ bottom: "20%", left: "30%" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      {/* Lines */}
      <motion.div
        className="absolute w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{ top: "35%", left: "0%" }}
        animate={{ x: [0, 100, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-24 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        style={{ bottom: "40%", right: "0%" }}
        animate={{ x: [0, -80, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
      />
    </div>
  );
}
