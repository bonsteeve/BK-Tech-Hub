export const homeContent = {
  hero: {
    heroVideoSrc: "/videos/conversaos-journey.mp4",
    heroVideoPoster: "/videos/conversaos-journey-poster.jpg",
    brandLine: "Business Technology & Automation",
    titleBefore: "Technology that moves your ",
    titleHighlight: "business forward.",
    summary:
      "BK Tech Hub helps businesses in Kenya and beyond grow through professional website development, WhatsApp AI automation, web hosting and search engine optimization. We bring the right technology together to help you attract customers, streamline operations and build a stronger digital presence.",
    primaryCta: { href: "/services", label: "Explore Our Services" },
    secondaryCta: { href: "/contact", label: "Talk to Our Team" },
    pillars: [
      { label: "Website Design", href: "/services/website-creation" },
      { label: "WhatsApp AI", href: "/bkchat" },
      { label: "Web Hosting", href: "/services/hosting" },
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
      description: "BK Chat learns your products, pricing, and FAQs so every reply stays on-brand.",
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
      "Start with a BK Chat demo — or talk to us about websites, hosting, SEO, and the automation your business needs next.",
    primaryCta: { href: "/book-a-demo", label: "Book a Demo" },
    secondaryCta: { href: "/services", label: "Explore Services" },
  },
} as const;
