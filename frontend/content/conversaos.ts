import { siteConfig } from "@/lib/site-config";

export const conversaosContent = {
  hero: {
    titleBefore: "Turn WhatsApp into your ",
    titleHighlight: "24/7 sales assistant",
    subtitle: "ConversaOS — AI-powered WhatsApp automation",
    summary:
      "Understand your business, reply with human takeover, generate quotes, book calendar appointments, and send reminders — so you capture more leads with less manual work.",
    primaryCta: { href: "/book-a-demo", label: "Book a Demo" },
    secondaryCta: { href: siteConfig.signInUrl, label: siteConfig.signInLabel, external: true },
    microcopy: "More leads. Less work.",
  },
  problem: {
    title: "WhatsApp leads shouldn’t slip through the cracks",
    summary:
      "Customers message at all hours. Manual replies are slow, quotes get delayed, and appointments fall through. ConversaOS keeps every conversation moving — day and night.",
    points: [
      "Missed messages after hours",
      "Slow quotes that lose deals",
      "No-shows without reminders",
      "Context lost when handing off chats",
    ],
  },
  features: [
    {
      title: "AI that understands your business",
      description:
        "Train ConversaOS on your services, pricing, and policies so replies stay accurate and on-brand.",
      image: "/images/marketing/conversaos-lifestyle.jpg",
      imageAlt: "Business owner using WhatsApp with ConversaOS automation",
    },
    {
      title: "Human takeover anytime",
      description:
        "AI handles routine questions. Your team jumps in for complex or high-value conversations without losing context.",
      image: "/images/marketing/poster-conversaos.jpg",
      imageAlt: "ConversaOS WhatsApp automation product visual",
    },
    {
      title: "Automatic quote generation",
      description:
        "Qualify the request, build a professional quote, and send it on WhatsApp — fast.",
      image: "/images/marketing/service-websites.jpg",
      imageAlt: "Professional quote and business workspace",
    },
    {
      title: "Calendar booking & reminders",
      description:
        "Clients book appointments directly in chat. ConversaOS syncs calendars and sends reminders automatically.",
      image: "/images/marketing/conversaos-booking.jpg",
      imageAlt: "Appointment booking confirmation on WhatsApp",
    },
  ],
  journey: [
    {
      step: "01",
      title: "Understand",
      description: "Connect WhatsApp and teach ConversaOS your business knowledge.",
      image: "/images/marketing/conversaos-lifestyle.jpg",
    },
    {
      step: "02",
      title: "Respond",
      description: "AI replies instantly; humans take over with one click when needed.",
      image: "/images/marketing/poster-conversaos.jpg",
    },
    {
      step: "03",
      title: "Close",
      description: "Quotes, bookings, and reminders turn conversations into revenue.",
      image: "/images/marketing/conversaos-booking.jpg",
    },
  ],
  faq: [
    {
      question: "What channels does ConversaOS support?",
      answer:
        "ConversaOS is built for WhatsApp Business conversations — the channel where many SMEs already win or lose leads.",
    },
    {
      question: "Can my team take over from the AI?",
      answer:
        "Yes. Human takeover is built in so agents can continue any chat with full context.",
    },
    {
      question: "Does it generate quotes and book meetings?",
      answer:
        "Yes. ConversaOS can qualify leads, generate quotes, book calendar appointments, and send reminders.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a demo with BK Tech Hub. We’ll map your WhatsApp workflows and show ConversaOS on your use cases.",
    },
  ],
  finalCta: {
    title: "See ConversaOS on your WhatsApp workflows",
    summary: "Book a live demo — or sign in if you already have access. New accounts will be available in the app.",
    primaryCta: { href: "/book-a-demo", label: "Book a Demo" },
    secondaryCta: { href: siteConfig.signInUrl, label: siteConfig.signInLabel, external: true },
  },
} as const;
