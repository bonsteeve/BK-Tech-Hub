"use client";

import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Star, 
  Zap,
  Globe,
  Search,
  Bot,
  TrendingUp,
  Target,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { ctaLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

const scenes = [
  {
    id: "web-design",
    title: "Web Design",
    subtitle: "Stunning Websites",
    description: "Custom-built for conversions",
    icon: Globe,
    color: "from-sky-400 to-blue-600",
    glowColor: "bg-sky-500",
    accentColor: "text-sky-400",
    bgGradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "seo",
    title: "SEO Optimization", 
    subtitle: "Rank Higher",
    description: "Get found by ideal customers",
    icon: Search,
    color: "from-emerald-400 to-green-600",
    glowColor: "bg-emerald-500",
    accentColor: "text-emerald-400",
    bgGradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "Work Smarter",
    description: "Intelligent systems that scale",
    icon: Bot,
    color: "from-violet-400 to-purple-600",
    glowColor: "bg-violet-500",
    accentColor: "text-violet-400",
    bgGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "growth",
    title: "Lead Generation",
    subtitle: "Grow Revenue",
    description: "Convert visitors to customers",
    icon: TrendingUp,
    color: "from-amber-400 to-orange-600",
    glowColor: "bg-amber-500",
    accentColor: "text-amber-400",
    bgGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

function AnimatedHeadline({ 
  shouldReduceMotion 
}: { 
  shouldReduceMotion: boolean;
}) {
  const line1Words = ["Build", "a", "Digital", "Presence"];
  
  if (shouldReduceMotion) {
    return (
      <>
        <span>Build a Digital Presence</span>
        <br />
        <span className="text-gradient">That Converts</span>
      </>
    );
  }

  return (
    <>
      <span className="inline-flex flex-wrap">
        {line1Words.map((word, i) => (
          <motion.span
            key={word + i}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
      <br />
      <motion.span 
        className="relative inline-block mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="text-gradient">That Converts</span>
        <motion.span
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </motion.span>
    </>
  );
}

function AnimatedParagraph({ 
  text,
  delay = 0,
  shouldReduceMotion 
}: { 
  text: string;
  delay?: number;
  shouldReduceMotion: boolean;
}) {
  if (shouldReduceMotion) {
    return <span>{text}</span>;
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
}


function AnimatedBadge({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const services = ["Modern Websites", "SEO", "AI Automation"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, services.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full",
        "bg-primary/5 dark:bg-primary/10 border border-primary/20",
        "text-sm font-medium"
      )}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Zap className="w-4 h-4 text-primary" />
      </motion.div>
      
      <div className="flex items-center gap-1.5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="text-primary font-semibold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {services[currentIndex]}
          </motion.span>
        </AnimatePresence>
        <span className="text-muted-foreground">for Growth</span>
      </div>

      <div className="flex gap-1 ml-1">
        {services.map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-colors duration-300",
              i === currentIndex ? "bg-primary" : "bg-primary/30"
            )}
            animate={i === currentIndex && !shouldReduceMotion ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function AnimatedCTAButton({ 
  href, 
  children, 
  variant = "primary",
  shouldReduceMotion,
  delay = 0
}: { 
  href: string; 
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  shouldReduceMotion: boolean;
  delay?: number;
}) {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {isPrimary && !shouldReduceMotion && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />
      )}
      <Button 
        asChild 
        size="lg" 
        variant={isPrimary ? "default" : "outline"}
        className={cn(
          "relative text-base px-8 h-14 rounded-xl font-semibold",
          isPrimary && [
            "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
            "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
          ],
          !isPrimary && [
            "border-2 border-border hover:border-primary/50",
            "hover:bg-primary/5 dark:hover:bg-primary/10",
          ],
          "transition-all duration-300"
        )}
      >
        <Link href={href}>
          {children}
        </Link>
      </Button>
    </motion.div>
  );
}

function AnimatedTrustIndicators({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground"
    >
      <motion.div 
        className="flex items-center gap-2"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Shield className="w-4 h-4 text-emerald-500" />
        </motion.div>
        <span>100% Satisfaction Guaranteed</span>
      </motion.div>
      
      <motion.span 
        className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30"
        animate={shouldReduceMotion ? {} : { 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div 
        className="flex items-center gap-1"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      >
        {[1,2,3,4,5].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 1 + i * 0.1,
              type: "spring",
              stiffness: 200
            }}
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </motion.div>
        ))}
        <motion.span 
          className="ml-1.5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        >
          5.0 from 50+ clients
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function AnimatedHeroVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const [currentScene, setCurrentScene] = useState(0);
  const scene = scenes[currentScene];
  const SceneIcon = scene.icon;

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id + "-glow"}
          className={cn(
            "absolute inset-0 rounded-full blur-[100px] opacity-30",
            scene.glowColor
          )}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-primary/20 dark:border-primary/30"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.div
            key={angle}
            className={cn(
              "absolute w-2 h-2 rounded-full",
              i === currentScene ? scene.glowColor : "bg-muted-foreground/30"
            )}
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${angle}deg) translateX(calc(50% - 4px)) translateY(-50%)`,
              transformOrigin: "0 0",
            }}
            animate={{
              scale: i === currentScene ? [1, 1.5, 1] : 1,
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-16 rounded-full border border-dashed border-secondary/20 dark:border-secondary/30"
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-24 rounded-full border-2 border-primary/20"
        animate={shouldReduceMotion ? {} : { 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[65%] aspect-[3/4]">
          <motion.div
            className={cn(
              "absolute inset-0 rounded-3xl overflow-hidden",
              "bg-gradient-to-br from-card/95 via-card/80 to-card/60",
              "dark:from-white/10 dark:via-white/5 dark:to-white/[0.02]",
              "backdrop-blur-2xl",
              "border border-border/50 dark:border-white/10",
              "shadow-2xl"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-4 border-b border-border/30 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-muted/50 rounded-full w-3/4 mx-auto" />
                </div>
                <div className="flex gap-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-1 h-4 rounded-full bg-muted-foreground/20" />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 h-[calc(100%-60px)] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene.id}
                  className="flex-1 flex flex-col"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        "bg-gradient-to-br shadow-lg",
                        scene.color
                      )}
                      animate={shouldReduceMotion ? {} : { 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <SceneIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-sm">{scene.title}</h3>
                      <p className="text-xs text-muted-foreground">{scene.description}</p>
                    </div>
                  </div>

                  {scene.id === "web-design" && (
                    <WebDesignScene shouldReduceMotion={shouldReduceMotion} />
                  )}
                  {scene.id === "seo" && (
                    <SEOScene shouldReduceMotion={shouldReduceMotion} />
                  )}
                  {scene.id === "ai-automation" && (
                    <AIScene shouldReduceMotion={shouldReduceMotion} />
                  )}
                  {scene.id === "growth" && (
                    <GrowthScene shouldReduceMotion={shouldReduceMotion} />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-auto pt-4">
                {scenes.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentScene(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      i === currentScene 
                        ? cn("w-6", scene.glowColor)
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {!shouldReduceMotion && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "absolute w-1.5 h-1.5 rounded-full",
                    i % 2 === 0 ? scene.glowColor : "bg-secondary"
                  )}
                  style={{
                    top: `${20 + (i * 15)}%`,
                    left: i % 2 === 0 ? `-${10 + i * 3}%` : `${100 + i * 3}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <FloatingServiceLabels 
        currentScene={currentScene} 
        shouldReduceMotion={shouldReduceMotion}
      />

      <motion.div
        className="absolute top-0 right-0 w-20 h-20"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-20 h-20"
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-secondary/30" />
      </motion.div>
    </div>
  );
}

function WebDesignScene({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <div className="flex-1 space-y-3">
      <div className="rounded-lg bg-muted/30 dark:bg-white/5 p-3 space-y-2">
        <div className="flex gap-2">
          <motion.div 
            className="h-2 bg-sky-400/60 rounded"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div 
            className="h-2 bg-muted-foreground/20 rounded flex-1"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
        <motion.div 
          className="h-16 rounded bg-gradient-to-r from-sky-400/20 to-blue-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3].map(i => (
            <motion.div
              key={i}
              className="h-8 rounded bg-muted/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
      
      <div className="flex gap-2">
        <motion.div
          className="flex-1 rounded-lg bg-sky-500/10 p-2 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <div className="text-lg font-bold text-sky-500">95</div>
          <div className="text-[10px] text-muted-foreground">Speed Score</div>
        </motion.div>
        <motion.div
          className="flex-1 rounded-lg bg-blue-500/10 p-2 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <div className="text-lg font-bold text-blue-500">A+</div>
          <div className="text-[10px] text-muted-foreground">Accessibility</div>
        </motion.div>
      </div>
    </div>
  );
}

function SEOScene({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const rankings = [
    { keyword: "web design agency", position: 1, change: "+5" },
    { keyword: "seo services", position: 3, change: "+12" },
    { keyword: "digital marketing", position: 2, change: "+8" },
  ];

  return (
    <div className="flex-1 space-y-3">
      <motion.div
        className="flex items-center gap-2 rounded-full bg-muted/30 dark:bg-white/5 px-3 py-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Search className="w-4 h-4 text-emerald-500" />
        <div className="h-2 bg-muted-foreground/30 rounded flex-1" />
      </motion.div>

      <div className="space-y-2">
        {rankings.map((item, i) => (
          <motion.div
            key={item.keyword}
            className="flex items-center gap-2 p-2 rounded-lg bg-muted/20 dark:bg-white/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
          >
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
              item.position === 1 ? "bg-emerald-500 text-white" : "bg-muted text-foreground"
            )}>
              {item.position}
            </div>
            <div className="flex-1 text-xs truncate">{item.keyword}</div>
            <div className="text-xs font-medium text-emerald-500">{item.change}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex items-center gap-2 p-2 rounded-lg bg-emerald-500/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <TrendingUp className="w-4 h-4 text-emerald-500" />
        <span className="text-xs">Organic Traffic</span>
        <span className="ml-auto text-sm font-bold text-emerald-500">+247%</span>
      </motion.div>
    </div>
  );
}

function AIScene({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    { type: "user", text: "Schedule a meeting" },
    { type: "ai", text: "Meeting scheduled for tomorrow at 2pm ✓" },
    { type: "user", text: "Send follow-up email" },
    { type: "ai", text: "Email drafted and sent to 24 leads ✓" },
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, messages.length]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 space-y-2 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {messages.slice(0, messageIndex + 1).map((msg, i) => (
            <motion.div
              key={i}
              className={cn(
                "flex gap-2 items-start",
                msg.type === "user" ? "justify-end" : "justify-start"
              )}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {msg.type === "ai" && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center">
                  <Bot className="w-3 h-3 text-white" />
                </div>
              )}
              <div className={cn(
                "px-3 py-2 rounded-xl text-xs max-w-[80%]",
                msg.type === "user" 
                  ? "bg-violet-500 text-white rounded-br-sm" 
                  : "bg-muted/50 dark:bg-white/10 rounded-bl-sm"
              )}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <motion.div
          className="rounded-lg bg-violet-500/10 p-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-lg font-bold text-violet-500">20h</div>
          <div className="text-[10px] text-muted-foreground">Saved/Week</div>
        </motion.div>
        <motion.div
          className="rounded-lg bg-purple-500/10 p-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-lg font-bold text-purple-500">500+</div>
          <div className="text-[10px] text-muted-foreground">Tasks/Day</div>
        </motion.div>
      </div>
    </div>
  );
}

function GrowthScene({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <div className="flex-1 space-y-3">
      <div className="space-y-1">
        {[
          { label: "Visitors", value: "10,000", width: "100%", color: "bg-amber-400/60" },
          { label: "Leads", value: "2,500", width: "70%", color: "bg-amber-500/70" },
          { label: "Customers", value: "500", width: "40%", color: "bg-orange-500/80" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="w-16 text-[10px] text-muted-foreground">{item.label}</div>
            <div className="flex-1 h-5 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                className={cn("h-full rounded-full flex items-center justify-end pr-2", item.color)}
                initial={{ width: 0 }}
                animate={{ width: item.width }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              >
                <span className="text-[9px] font-bold text-white">{item.value}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-lg bg-muted/30 dark:bg-white/5 p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-muted-foreground">Revenue Growth</span>
          <span className="text-xs font-bold text-amber-500">+156%</span>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-amber-500 to-orange-400 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="flex items-center gap-2 p-2 rounded-lg bg-amber-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Target className="w-4 h-4 text-amber-500" />
        <span className="text-xs">Conversion Rate</span>
        <span className="ml-auto text-sm font-bold text-amber-500">5.2%</span>
        <ArrowUpRight className="w-3 h-3 text-amber-500" />
      </motion.div>
    </div>
  );
}

function FloatingServiceLabels({ 
  currentScene, 
  shouldReduceMotion 
}: { 
  currentScene: number;
  shouldReduceMotion: boolean;
}) {
  const labels = [
    { 
      title: "Web Design", 
      icon: Globe, 
      position: "top-4 left-0",
      color: "from-sky-400 to-blue-500",
      shadowColor: "shadow-sky-500/20"
    },
    { 
      title: "SEO", 
      icon: Search, 
      position: "top-16 -right-2",
      color: "from-emerald-400 to-green-500",
      shadowColor: "shadow-emerald-500/20"
    },
    { 
      title: "AI Automation", 
      icon: Bot, 
      position: "bottom-20 -left-4",
      color: "from-violet-400 to-purple-500",
      shadowColor: "shadow-violet-500/20"
    },
    { 
      title: "Lead Gen", 
      icon: TrendingUp, 
      position: "bottom-4 right-0",
      color: "from-amber-400 to-orange-500",
      shadowColor: "shadow-amber-500/20"
    },
  ];

  return (
    <>
      {labels.map((label, i) => {
        const Icon = label.icon;
        const isActive = i === currentScene;
        
        return (
          <motion.div
            key={label.title}
            className={cn(
              "absolute z-30",
              label.position
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: isActive ? 1.05 : 1,
              y: shouldReduceMotion ? 0 : [0, -5, 0]
            }}
            transition={{ 
              duration: 0.5,
              delay: 0.8 + i * 0.15,
              y: { duration: 3 + i, repeat: Infinity }
            }}
          >
            <div className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-xl",
              "bg-card/90 dark:bg-card/70 backdrop-blur-xl",
              "border transition-all duration-500",
              isActive 
                ? "border-primary/50 shadow-lg " + label.shadowColor
                : "border-border/50 dark:border-white/10",
              "hover:scale-105 cursor-pointer"
            )}>
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                "bg-gradient-to-br shadow-md",
                label.color
              )}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className={cn(
                "text-xs font-semibold transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}>
                {label.title}
              </span>
              {isActive && (
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export function HeroHome() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
        
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 20% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `
          }}
          animate={shouldReduceMotion ? {} : {
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>

      <Container size="xl" className="relative pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Animated Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left relative z-10"
          >
            {/* Animated Badge */}
            <div className="mb-6">
              <AnimatedBadge shouldReduceMotion={shouldReduceMotion} />
            </div>

            {/* Animated Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <AnimatedHeadline shouldReduceMotion={shouldReduceMotion} />
            </h1>

            {/* Animated Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              <AnimatedParagraph 
                text="We help ambitious businesses generate more leads through stunning websites, strategic SEO, and AI-powered automation that works while you sleep."
                shouldReduceMotion={shouldReduceMotion}
                delay={0.9}
              />
            </p>

            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <AnimatedCTAButton
                href={ctaLinks.bookCall.href}
                variant="primary"
                shouldReduceMotion={shouldReduceMotion}
                delay={1.3}
              >
                <span>{ctaLinks.bookCall.text}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </AnimatedCTAButton>
              
              <AnimatedCTAButton
                href="/services"
                variant="secondary"
                shouldReduceMotion={shouldReduceMotion}
                delay={1.4}
              >
                <Play className="mr-2 h-4 w-4" />
                View Services
              </AnimatedCTAButton>
            </div>

            {/* Animated Trust Indicators */}
            <AnimatedTrustIndicators shouldReduceMotion={shouldReduceMotion} />

            {/* Floating Service Mini Cards - 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { 
                  icon: Globe, 
                  title: "Web Design", 
                  color: "from-sky-400 to-blue-500",
                  shadowColor: "shadow-sky-500/25",
                  floatDuration: 3,
                  floatDelay: 0,
                },
                { 
                  icon: Search, 
                  title: "SEO Optimization", 
                  color: "from-emerald-400 to-green-500",
                  shadowColor: "shadow-emerald-500/25",
                  floatDuration: 3.5,
                  floatDelay: 0.5,
                },
                { 
                  icon: Bot, 
                  title: "AI Automation", 
                  color: "from-violet-400 to-purple-500",
                  shadowColor: "shadow-violet-500/25",
                  floatDuration: 4,
                  floatDelay: 1,
                },
                { 
                  icon: TrendingUp, 
                  title: "Lead Generation", 
                  color: "from-amber-400 to-orange-500",
                  shadowColor: "shadow-amber-500/25",
                  floatDuration: 3.2,
                  floatDelay: 1.5,
                },
              ].map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: shouldReduceMotion ? 0 : [0, -8, 0],
                    }}
                    transition={{ 
                      opacity: { duration: 0.5, delay: 1.3 + index * 0.1 },
                      scale: { duration: 0.5, delay: 1.3 + index * 0.1 },
                      y: { 
                        duration: card.floatDuration, 
                        delay: card.floatDelay,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={shouldReduceMotion ? {} : { 
                      scale: 1.08,
                      transition: { duration: 0.2 }
                    }}
                    className={cn(
                      "group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer",
                      "bg-card/80 dark:bg-card/60 backdrop-blur-xl",
                      "border border-border/50 dark:border-white/10",
                      "shadow-lg hover:shadow-xl transition-shadow duration-300",
                      card.shadowColor
                    )}
                  >
                    <div className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-xl",
                      "bg-gradient-to-br shadow-md",
                      "group-hover:scale-110 transition-transform duration-300",
                      card.color
                    )}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">{card.title}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <AnimatedHeroVisual shouldReduceMotion={shouldReduceMotion} />
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
