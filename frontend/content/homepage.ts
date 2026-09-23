export const homeContent = {
  hero: {
    /**
     * A/B the hero media:
     * - "phone" = extended ConversaOS WhatsApp animation
     * - "video" = uses heroVideoSrc in /public/videos
     */
    visual: "video" as "phone" | "video",
    heroVideoSrc: "/videos/conversaos_hero_en.mp4",
    heroVideoPoster: "/videos/hero-poster.jpg",
    titleBefore: "Turn Your WhatsApp Into a ",
    titleHighlight: "24/7 Sales Assistant",
    summary:
      "Automate conversations, save time and never miss an opportunity. ConversaOS understands your business, replies with human takeover, generates quotes, books appointments, and sends reminders.",
    primaryCta: { href: "/book-a-demo", label: "Book a Demo" },
    secondaryCta: { href: "https://app.bktechhub.com/signup", label: "Sign up", external: true },
    microcopy: "More leads. Less work.",
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
    title: "Ready to automate WhatsApp and grow with BK Tech Hub?",
    summary:
      "Book a ConversaOS demo — or talk to us about websites, hosting, and SEO for your business.",
    primaryCta: { href: "/book-a-demo", label: "Book a Demo" },
    secondaryCta: { href: "/services", label: "Explore Services" },
  },
} as const;
