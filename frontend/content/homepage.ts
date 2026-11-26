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
  servicesHeading: "Technology solutions for the way businesses work.",
  servicesIntroduction:
    "Whether you need a professional online presence, better customer engagement or improved business visibility, BK Tech Hub provides practical solutions to support your goals.",
  services: [
    {
      name: "Website Design & Development",
      href: "/services/website-creation",
      description:
        "Professional, responsive business websites designed to build trust, showcase your services and turn visitors into enquiries.",
      image: "/images/marketing/website-design-cover.webp",
      imageAlt: "BK Tech Hub responsive website shown on a laptop, phone and tablet",
      icon: "website",
    },
    {
      name: "WhatsApp AI Automation — BKChat",
      href: "/bkchat",
      description:
        "Automate customer conversations, respond to enquiries, qualify leads, generate quotes and manage bookings through WhatsApp.",
      image: "/images/marketing/conversaos-lifestyle.jpg",
      imageAlt: "Business owner managing customer conversations on WhatsApp",
      icon: "whatsapp",
    },
    {
      name: "Web Hosting",
      href: "/services/hosting",
      description:
        "Reliable web hosting to keep your website accessible, secure and performing consistently.",
      image: "/images/marketing/service-hosting-seo.jpg",
      imageAlt: "Analytics dashboard on a tablet in a server environment",
      icon: "hosting",
    },
    {
      name: "Search Engine Optimization",
      href: "/services/seo",
      description:
        "Improve your website's search visibility through technical SEO, on-page optimization and search-focused improvements.",
      image: "/images/marketing/seo-cover.webp",
      imageAlt: "Illustration of search optimization, rankings and website visibility",
      icon: "seo",
    },
  ],
  bkchat: {
    title: "Turn WhatsApp conversations into business opportunities.",
    summary:
      "Customers expect quick responses. BKChat helps businesses stay responsive with AI-powered WhatsApp conversations that understand their products, services and business information.",
    capabilities: [
      "Respond to customer enquiries around the clock.",
      "Share product and pricing information.",
      "Qualify potential customers.",
      "Generate quotations and support bookings.",
      "Allow human agents to take over conversations when needed.",
    ],
    primaryCta: { href: "/bkchat", label: "Discover BKChat" },
    secondaryCta: { href: "/book-a-demo", label: "Book a BKChat Demo" },
  },
  outcomes: {
    title: "Better technology. Better business operations.",
    items: [
      {
        title: "Build your online presence",
        description:
          "Establish credibility and give potential customers a professional place to discover your business.",
        icon: "presence",
      },
      {
        title: "Improve customer engagement",
        description:
          "Make it easier for customers to get information and interact with your business.",
        icon: "engagement",
      },
      {
        title: "Streamline operations",
        description:
          "Reduce repetitive customer-facing tasks through practical automation.",
        icon: "operations",
      },
      {
        title: "Improve online visibility",
        description:
          "Help potential customers find your business through search engines.",
        icon: "visibility",
      },
    ],
  },
  whyUs: {
    title: "Your technology partner for business growth.",
    summary:
      "We bring essential business technology services together under one roof. From establishing your online presence to automating customer interactions, BK Tech Hub helps you adopt technology that serves a practical business purpose.",
    items: [
      {
        title: "Integrated solutions",
        description: "Websites, hosting, SEO and automation from one technology partner.",
        icon: "integrated",
      },
      {
        title: "Business-focused approach",
        description: "Solutions built around real operational and customer engagement needs.",
        icon: "business",
      },
      {
        title: "Practical implementation",
        description: "Technology designed to support everyday business activities.",
        icon: "practical",
      },
      {
        title: "Room to grow",
        description:
          "Start with the service you need and expand your digital capabilities over time.",
        icon: "growth",
      },
    ],
  },
  finalCta: {
    title: "Let's build a smarter business together.",
    summary:
      "Whether you need a professional website, reliable hosting, better Google visibility or WhatsApp automation, BK Tech Hub can help you identify the right technology for your business.",
    primaryCta: { href: "/contact", label: "Talk to BK Tech Hub" },
    secondaryCta: { href: "/services", label: "Explore Our Services" },
  },
} as const;
