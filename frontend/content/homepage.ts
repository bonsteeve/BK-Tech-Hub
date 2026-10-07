import { siteConfig } from "@/lib/site-config";

export const homeContent = {
  hero: {
    /**
     * A/B the hero media:
     * - "phone" = extended ConversaOS WhatsApp animation
     * - "video" = uses heroVideoSrc in /public/videos
     */
    visual: "video" as "phone" | "video",
    heroVideoSrc: "/videos/conversaos-journey.mp4",
    heroVideoPoster: "/videos/conversaos-journey-poster.jpg",
    brandLine: "Automate the World",
    titleBefore: "WhatsApp AI, process automation & ",
    titleHighlight: "digital growth",
    summary:
      "ConversaOS is our flagship — AI that runs your WhatsApp sales 24/7. We also build websites, hosting, and SEO so every part of your business works smarter.",
    primaryCta: { href: "/book-a-demo", label: "Book a Demo" },
    secondaryCta: { href: siteConfig.signInUrl, label: siteConfig.signInLabel, external: true },
    /** Quiet offer links under CTAs — not cards; keeps ConversaOS primary */
    pillars: [
      { label: "WhatsApp AI", href: "/conversaos" },
      { label: "Process automation", href: "/conversaos" },
      { label: "Websites", href: "/services/website-creation" },
      { label: "Hosting", href: "/services/hosting" },
      { label: "SEO", href: "/services/seo" },
    ],
  },
  features: [
    {
      title: "AI Powered Responses",
      description: "Instant, human-like replies that understand your business — with seamless human takeover.",
      icon: "bot",
    },
    {
      title: "Calendar Booking",
      description: "Let clients book appointments directly on WhatsApp, with automatic reminders.",
      icon: "calendar",
    },
    {
      title: "Quote Generation",
      description: "Send professional quotes automatically and keep deals moving.",
      icon: "quote",
    },
  ],
  journey: [
    {
      step: "01",
      title: "Understand",
      description: "ConversaOS learns your products, pricing, and FAQs so every reply stays on-brand.",
    },
    {
      step: "02",
      title: "Respond",
      description: "AI handles routine chats 24/7. Your team takes over when a conversation needs a human.",
    },
    {
      step: "03",
      title: "Close",
      description: "Generate quotes, book calendar slots, and send reminders so leads convert faster.",
    },
  ],
  services: [
    {
      name: "Website Creation",
      href: "/services/website-creation",
      description: "Conversion-focused websites that turn visitors into qualified leads.",
      icon: "globe",
    },
    {
      name: "Hosting",
      href: "/services/hosting",
      description: "Reliable, secure hosting so your site stays fast and always online.",
      icon: "server",
    },
    {
      name: "SEO",
      href: "/services/seo",
      description: "Technical and on-page SEO that improves visibility and inbound demand.",
      icon: "search",
    },
  ],
  finalCta: {
    title: "Ready to Automate the World with BK Tech Hub?",
    summary:
      "Start with a ConversaOS demo — or talk to us about websites, hosting, SEO, and the automation your business needs next.",
    primaryCta: { href: "/book-a-demo", label: "Book a Demo" },
    secondaryCta: { href: "/services", label: "Explore Services" },
  },
} as const;
