# BK Tech Hub Website Redesign - Master Plan

## Project Overview

A premium, high-converting sales website for BK Tech Hub - a digital company helping businesses with website design, development, SEO-ready web experiences, and AI-powered business automation.

**Design Philosophy:** Strategic blend of hellomonday.co's clarity and conversion structure with immersive-g.com's premium visual storytelling.

---

## Table of Contents

1. [Sitemap & Information Architecture](#sitemap--information-architecture)
2. [Content Model](#content-model)
3. [Design System](#design-system)
4. [Component Inventory](#component-inventory)
5. [Homepage Copy](#homepage-copy)
6. [Wireframe Sections](#wireframe-sections)
7. [SEO Strategy](#seo-strategy)
8. [Implementation Phases](#implementation-phases)
9. [Deployment Guide](#deployment-guide)

---

## Sitemap & Information Architecture

```
bktechhub.com/
├── / (Homepage)
├── /services
│   ├── /services/web-design-development
│   ├── /services/seo-optimization
│   ├── /services/ai-automation
│   └── /services/branding-digital-presence
├── /work (Case Studies)
│   └── /work/[slug] (Individual Case Study)
├── /about
├── /blog
│   └── /blog/[slug] (Individual Blog Post)
├── /contact
├── /book-a-call
├── /free-website-audit
├── /sitemap.xml
├── /robots.txt
└── /llms.txt (AI optimization)
```

### URL Structure Guidelines
- All URLs lowercase with hyphens
- No trailing slashes
- Descriptive and keyword-rich
- Max 3 levels deep

---

## Content Model

### Page Types

#### 1. Service Page
```typescript
interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: Image;
  problemStatement: string;
  solutionOverview: string;
  features: Feature[];
  benefits: Benefit[];
  process: ProcessStep[];
  caseStudies: CaseStudy[];
  faqs: FAQ[];
  cta: CTA;
  relatedServices: Service[];
}
```

#### 2. Case Study
```typescript
interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: Result[];
  testimonial: Testimonial;
  images: Image[];
  featured: boolean;
  publishedAt: Date;
}
```

#### 3. Blog Post
```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: PortableText;
  author: Author;
  category: Category;
  tags: string[];
  featuredImage: Image;
  publishedAt: Date;
  readingTime: number;
}
```

#### 4. Testimonial
```typescript
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: Image;
  quote: string;
  rating: number;
  featured: boolean;
}
```

### Sanity CMS Schema Structure
```
sanity/
├── schemas/
│   ├── documents/
│   │   ├── service.ts
│   │   ├── caseStudy.ts
│   │   ├── blogPost.ts
│   │   ├── author.ts
│   │   ├── testimonial.ts
│   │   └── siteSettings.ts
│   ├── objects/
│   │   ├── seo.ts
│   │   ├── cta.ts
│   │   ├── faq.ts
│   │   ├── feature.ts
│   │   └── processStep.ts
│   └── index.ts
```

---

## Design System

### Color Palette

#### Primary Colors
```css
/* Dark Foundation */
--background: #0A0A0B;        /* Deep black */
--background-elevated: #111113; /* Card backgrounds */
--background-subtle: #18181B;   /* Subtle sections */

/* Accent - Electric Blue/Cyan */
--primary: #00D4FF;           /* Primary accent */
--primary-hover: #00B8E6;     /* Hover state */
--primary-glow: rgba(0, 212, 255, 0.15); /* Glow effects */

/* Secondary - Violet */
--secondary: #8B5CF6;         /* Secondary accent */
--secondary-hover: #7C3AED;   /* Hover state */

/* Gradient */
--gradient-primary: linear-gradient(135deg, #00D4FF 0%, #8B5CF6 100%);
--gradient-subtle: linear-gradient(180deg, rgba(0, 212, 255, 0.05) 0%, transparent 100%);
```

#### Text Colors
```css
--text-primary: #FFFFFF;      /* Headlines */
--text-secondary: #A1A1AA;    /* Body text */
--text-tertiary: #71717A;     /* Muted text */
--text-accent: #00D4FF;       /* Highlighted text */
```

#### Semantic Colors
```css
--success: #22C55E;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

#### Border & Surface
```css
--border: rgba(255, 255, 255, 0.08);
--border-hover: rgba(255, 255, 255, 0.15);
--surface-glass: rgba(255, 255, 255, 0.03);
```

### Typography

#### Font Stack
```css
/* Primary - Display & Headlines */
--font-display: 'Plus Jakarta Sans', system-ui, sans-serif;

/* Secondary - Body */
--font-body: 'Inter', system-ui, sans-serif;

/* Monospace - Code/Technical */
--font-mono: 'JetBrains Mono', monospace;
```

#### Type Scale
```css
/* Desktop */
--text-hero: 4.5rem;      /* 72px - Hero headlines */
--text-h1: 3.5rem;        /* 56px - Page titles */
--text-h2: 2.5rem;        /* 40px - Section titles */
--text-h3: 1.875rem;      /* 30px - Subsections */
--text-h4: 1.5rem;        /* 24px - Card titles */
--text-h5: 1.25rem;       /* 20px - Small headings */
--text-body-lg: 1.125rem; /* 18px - Large body */
--text-body: 1rem;        /* 16px - Body */
--text-sm: 0.875rem;      /* 14px - Small */
--text-xs: 0.75rem;       /* 12px - Caption */

/* Mobile Adjustments */
--text-hero-mobile: 2.5rem;
--text-h1-mobile: 2rem;
--text-h2-mobile: 1.75rem;
```

#### Line Heights
```css
--leading-tight: 1.1;
--leading-snug: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Spacing System
```css
/* Base: 4px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */

/* Section Spacing */
--section-padding: 6rem;        /* Desktop */
--section-padding-mobile: 4rem; /* Mobile */
```

### Border Radius
```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Pills */
```

### Shadows & Effects
```css
/* Elevation */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.5);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.5);

/* Glow Effects */
--glow-primary: 0 0 60px rgba(0, 212, 255, 0.15);
--glow-secondary: 0 0 60px rgba(139, 92, 246, 0.15);

/* Glass Effect */
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.08);
--glass-blur: blur(20px);
```

### Motion Guidelines
```css
/* Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;

/* Easings */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Component Inventory

### Layout Components
- `RootLayout` - App shell with navigation and footer
- `Container` - Max-width wrapper with responsive padding
- `Section` - Semantic section with consistent spacing
- `Grid` - Responsive grid layouts

### Navigation Components
- `Header` - Sticky header with logo, nav, CTA
- `MobileMenu` - Slide-out mobile navigation
- `Footer` - Site footer with navigation and info
- `Breadcrumbs` - Page breadcrumb navigation

### Hero Components
- `HeroHome` - Homepage hero with headline, copy, CTAs
- `HeroPage` - Standard page hero
- `HeroService` - Service page hero

### Content Components
- `SectionHeading` - Consistent section titles
- `FeatureCard` - Service/feature cards
- `ServiceCard` - Service overview cards
- `CaseStudyCard` - Case study preview cards
- `TestimonialCard` - Client testimonial cards
- `TeamMemberCard` - Team member profiles
- `BlogPostCard` - Blog post preview cards
- `ProcessStep` - Process/methodology steps
- `StatCard` - Statistics/metrics display
- `FAQAccordion` - FAQ expandable items
- `PricingCard` - Pricing tier display

### Interactive Components
- `Button` - Primary, secondary, ghost variants
- `CTASection` - Call-to-action sections
- `ContactForm` - Lead capture form
- `AuditForm` - Website audit request form
- `BookingEmbed` - Calendar booking integration
- `NewsletterForm` - Email signup form

### Media Components
- `OptimizedImage` - Next.js Image wrapper
- `VideoPlayer` - Video embed component
- `ImageGallery` - Case study image gallery
- `LogoCloud` - Client logo display

### Utility Components
- `Badge` - Status/category badges
- `Tag` - Content tags
- `Divider` - Section dividers
- `Skeleton` - Loading states
- `Toast` - Notification toasts

### SEO Components
- `JsonLd` - Structured data injection
- `Breadcrumbs` - SEO-friendly breadcrumbs
- `TableOfContents` - Blog post TOC

---

## Homepage Copy

### Hero Section

**Pre-headline (Badge):**
"Trusted by growing businesses"

**Headline:**
"Build a Digital Presence That Converts"

**Subheadline:**
"We help SMEs and growing businesses generate more leads through stunning websites, strategic SEO, and AI-powered automation."

**Primary CTA:** "Book a Free Strategy Call"
**Secondary CTA:** "See Our Work"

### Services Section

**Section Title:** "What We Build"
**Section Subtitle:** "Strategic digital solutions that drive measurable growth"

#### Service 1: Web Design & Development
**Title:** "Web Design & Development"
**Description:** "Custom websites built for performance, conversions, and scale. From concept to launch, we create digital experiences that turn visitors into customers."
**Features:**
- Custom design tailored to your brand
- Lightning-fast performance
- Mobile-first responsive design
- SEO-ready architecture

#### Service 2: SEO Optimization
**Title:** "SEO Optimization"
**Description:** "Get found by your ideal customers. We implement technical SEO, content strategy, and ongoing optimization to increase your organic visibility."
**Features:**
- Technical SEO audits
- Keyword strategy
- On-page optimization
- Performance monitoring

#### Service 3: AI Automation
**Title:** "AI Automation for SMEs"
**Description:** "Automate repetitive tasks and scale your operations. We implement intelligent systems that save time and reduce costs without replacing your team."
**Features:**
- Workflow automation
- AI chatbots & assistants
- Lead qualification systems
- Custom integrations

#### Service 4: Branding & Digital Presence
**Title:** "Branding & Digital Presence"
**Description:** "Stand out in a crowded market. We develop brand identities and digital strategies that communicate your value and build trust."
**Features:**
- Brand identity design
- Visual systems
- Brand messaging
- Digital strategy

### Why Choose Us Section

**Section Title:** "Why Leading Businesses Choose BK Tech Hub"

**Reason 1:**
**Title:** "Results-Driven Approach"
**Description:** "Every decision is backed by data. We focus on metrics that matter—leads, conversions, and revenue growth."

**Reason 2:**
**Title:** "Technical Excellence"
**Description:** "Modern tech stack, clean code, and best practices. Your website will be fast, secure, and built to last."

**Reason 3:**
**Title:** "Strategic Partnership"
**Description:** "We're not just vendors—we're partners in your growth. Transparent communication and ongoing support."

**Reason 4:**
**Title:** "Future-Ready Solutions"
**Description:** "Stay ahead with AI integration, semantic SEO, and scalable architecture designed for tomorrow."

### Process Section

**Section Title:** "Our Process"
**Section Subtitle:** "A proven methodology for digital success"

**Step 1: Discovery**
"We dive deep into your business, audience, and goals to create a strategic foundation."

**Step 2: Strategy**
"We develop a comprehensive plan covering design, content, SEO, and technology."

**Step 3: Design & Build**
"Our team creates and develops your solution with regular check-ins and feedback loops."

**Step 4: Launch & Optimize**
"We launch your project and provide ongoing optimization based on real performance data."

### Industries Section

**Section Title:** "Industries We Serve"
**Section Subtitle:** "Specialized expertise across sectors"

- Professional Services
- SaaS & Technology
- E-commerce & Retail
- Healthcare & Wellness
- Finance & Consulting
- Manufacturing & Industrial

### Testimonials Section

**Section Title:** "What Our Clients Say"

**Testimonial 1:**
"BK Tech Hub transformed our online presence. Within 3 months, our organic traffic increased by 200% and lead quality improved dramatically."
— *Sarah M., CEO at GrowthFirst Consulting*

**Testimonial 2:**
"The AI automation they implemented saves our team 20+ hours per week. The ROI was evident within the first month."
— *James K., Operations Director at ScaleUp Solutions*

**Testimonial 3:**
"Finally, a web agency that understands business goals. They didn't just build a beautiful website—they built a lead generation machine."
— *Michelle T., Founder at Bright Ideas Agency*

### FAQ Section

**Q: How long does a typical website project take?**
A: Most website projects take 6-10 weeks from kickoff to launch. This includes discovery, design, development, and testing phases. Complex projects with custom functionality may take longer.

**Q: Do you work with businesses outside of your area?**
A: Yes! We work with clients globally. Our process is designed for remote collaboration, with regular video calls and clear communication channels.

**Q: What's included in your SEO services?**
A: Our SEO services include technical audits, keyword research, on-page optimization, content strategy, and performance tracking. We focus on sustainable, white-hat strategies that build long-term organic visibility.

**Q: Can you help with AI automation if we're not tech-savvy?**
A: Absolutely. We handle all the technical implementation. You just need to tell us what processes you want to improve, and we'll design and build the solution.

**Q: Do you offer ongoing support after launch?**
A: Yes, we offer maintenance and support packages to keep your website secure, updated, and optimized. We also provide training so your team can manage day-to-day content updates.

### Final CTA Section

**Headline:** "Ready to Transform Your Digital Presence?"
**Subheadline:** "Let's discuss how we can help you achieve your growth goals."
**Primary CTA:** "Book Your Free Strategy Call"
**Secondary CTA:** "Get a Free Website Audit"
**Trust Text:** "No commitment required. We'll review your current situation and provide actionable insights."

### Footer

**Tagline:** "Building digital experiences that drive business growth."

**Quick Links:**
- Services
- Work
- About
- Blog
- Contact

**Services:**
- Web Design & Development
- SEO Optimization
- AI Automation
- Branding

**Contact:**
- hello@bktechhub.com
- Book a Call

**Legal:**
- Privacy Policy
- Terms of Service

---

## Wireframe Sections

### Homepage Structure

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Sticky)                                              │
│ ┌─────────┐          ┌─────────────────┐    ┌─────────────┐ │
│ │  Logo   │          │    Nav Links    │    │  Book Call  │ │
│ └─────────┘          └─────────────────┘    └─────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION (Full viewport height)                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                          │ │
│ │                    [Badge/Pre-headline]                  │ │
│ │                                                          │ │
│ │              Build a Digital Presence                    │ │
│ │                  That Converts                           │ │
│ │                                                          │ │
│ │           Supporting copy with value prop                │ │
│ │                                                          │ │
│ │         [Primary CTA]    [Secondary CTA]                 │ │
│ │                                                          │ │
│ │                    ┌─────────────┐                       │ │
│ │                    │  Hero Image │                       │ │
│ │                    └─────────────┘                       │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ LOGO CLOUD                                                  │
│    [Logo]  [Logo]  [Logo]  [Logo]  [Logo]  [Logo]          │
│    "Trusted by innovative companies"                        │
├─────────────────────────────────────────────────────────────┤
│ SERVICES SECTION                                            │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  What We Build                                         │   │
│ │  Strategic digital solutions that drive growth         │   │
│ │                                                         │   │
│ │  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌─────────┐│   │
│ │  │ Service 1 │ │ Service 2 │ │ Service 3 │ │Service 4││   │
│ │  │  [Icon]   │ │  [Icon]   │ │  [Icon]   │ │ [Icon]  ││   │
│ │  │  Title    │ │  Title    │ │  Title    │ │  Title  ││   │
│ │  │  Desc     │ │  Desc     │ │  Desc     │ │  Desc   ││   │
│ │  │  [Link]   │ │  [Link]   │ │  [Link]   │ │ [Link]  ││   │
│ │  └───────────┘ └───────────┘ └───────────┘ └─────────┘│   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ FEATURED WORK SECTION                                       │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  Our Work                                              │   │
│ │                                                         │   │
│ │  ┌─────────────────────┐  ┌─────────────────────┐     │   │
│ │  │                     │  │                     │     │   │
│ │  │    Case Study 1     │  │    Case Study 2     │     │   │
│ │  │    [Large Image]    │  │    [Large Image]    │     │   │
│ │  │    Title + Results  │  │    Title + Results  │     │   │
│ │  │                     │  │                     │     │   │
│ │  └─────────────────────┘  └─────────────────────┘     │   │
│ │                                                         │   │
│ │                    [View All Work →]                   │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ WHY CHOOSE US SECTION                                       │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  Why Leading Businesses Choose BK Tech Hub            │   │
│ │                                                         │   │
│ │  ┌────────────┐  ┌────────────┐                       │   │
│ │  │ Reason 1   │  │ Reason 2   │                       │   │
│ │  │ [Icon]     │  │ [Icon]     │                       │   │
│ │  │ Title      │  │ Title      │                       │   │
│ │  │ Desc       │  │ Desc       │                       │   │
│ │  └────────────┘  └────────────┘                       │   │
│ │  ┌────────────┐  ┌────────────┐                       │   │
│ │  │ Reason 3   │  │ Reason 4   │                       │   │
│ │  │ [Icon]     │  │ [Icon]     │                       │   │
│ │  │ Title      │  │ Title      │                       │   │
│ │  │ Desc       │  │ Desc       │                       │   │
│ │  └────────────┘  └────────────┘                       │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ PROCESS SECTION                                             │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  Our Process                                           │   │
│ │                                                         │   │
│ │  [01]─────[02]─────[03]─────[04]                       │   │
│ │  Discovery  Strategy  Build   Launch                   │   │
│ │                                                         │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ INDUSTRIES SECTION                                          │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  Industries We Serve                                   │   │
│ │                                                         │   │
│ │  [Tag] [Tag] [Tag] [Tag] [Tag] [Tag]                   │   │
│ │                                                         │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ TESTIMONIALS SECTION                                        │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  What Our Clients Say                                  │   │
│ │                                                         │   │
│ │  ┌───────────┐ ┌───────────┐ ┌───────────┐           │   │
│ │  │"Quote..." │ │"Quote..." │ │"Quote..." │           │   │
│ │  │ - Name    │ │ - Name    │ │ - Name    │           │   │
│ │  │   Role    │ │   Role    │ │   Role    │           │   │
│ │  └───────────┘ └───────────┘ └───────────┘           │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ FAQ SECTION                                                 │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  Frequently Asked Questions                            │   │
│ │                                                         │   │
│ │  ┌─────────────────────────────────────────────────┐  │   │
│ │  │ [+] How long does a website project take?        │  │   │
│ │  └─────────────────────────────────────────────────┘  │   │
│ │  ┌─────────────────────────────────────────────────┐  │   │
│ │  │ [+] Do you work with businesses outside...?      │  │   │
│ │  └─────────────────────────────────────────────────┘  │   │
│ │  ...                                                   │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ FINAL CTA SECTION                                           │
│ ┌───────────────────────────────────────────────────────┐   │
│ │                                                         │   │
│ │           Ready to Transform Your                      │   │
│ │            Digital Presence?                           │   │
│ │                                                         │   │
│ │        [Book Strategy Call]  [Free Audit]             │   │
│ │                                                         │   │
│ │          "No commitment required..."                   │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
│ ┌───────────────────────────────────────────────────────┐   │
│ │  [Logo]                                                │   │
│ │  Building digital experiences...                       │   │
│ │                                                         │   │
│ │  Quick Links    Services       Contact                │   │
│ │  - Services     - Web Design   - Email                │   │
│ │  - Work         - SEO          - Book Call            │   │
│ │  - About        - AI Auto                             │   │
│ │  - Blog         - Branding                            │   │
│ │  - Contact                                             │   │
│ │                                                         │   │
│ │  © 2024 BK Tech Hub  |  Privacy  |  Terms             │   │
│ └───────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## SEO Strategy

### Technical SEO Setup

#### Metadata Implementation
```typescript
// Each page exports metadata
export const metadata: Metadata = {
  title: 'Page Title | BK Tech Hub',
  description: 'Page description (150-160 chars)',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Page Title',
    description: 'OG Description',
    type: 'website',
    url: 'https://bktechhub.com/page',
    images: [{ url: '/og/page.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Twitter Description',
  },
  alternates: {
    canonical: 'https://bktechhub.com/page',
  },
};
```

#### Structured Data (JSON-LD)

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BK Tech Hub",
  "url": "https://bktechhub.com",
  "logo": "https://bktechhub.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/bktechhub",
    "https://twitter.com/bktechhub"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "hello@bktechhub.com"
  }
}
```

**LocalBusiness Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BK Tech Hub",
  "image": "https://bktechhub.com/images/office.jpg",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "City",
    "addressRegion": "State",
    "addressCountry": "Country"
  }
}
```

**Service Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design & Development",
  "provider": {
    "@type": "Organization",
    "name": "BK Tech Hub"
  },
  "description": "Custom websites built for performance...",
  "areaServed": "Worldwide"
}
```

**FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a typical website project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most website projects take 6-10 weeks..."
      }
    }
  ]
}
```

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://bktechhub.com/sitemap.xml
```

### Sitemap Generation
Dynamic sitemap including:
- Static pages
- Dynamic service pages
- Blog posts
- Case studies

---

## Implementation Phases

### Phase 1: Foundation (Branches: `foundation/*`)
- [ ] Initialize Next.js 15 project
- [ ] Configure TypeScript, Tailwind, ESLint
- [ ] Install and configure shadcn/ui
- [ ] Set up Framer Motion
- [ ] Create folder structure
- [ ] Set up design tokens/CSS variables
- [ ] Create base components (Button, Container, Section)

### Phase 2: Layout & Navigation (Branches: `layout/*`)
- [ ] Build Header component
- [ ] Build Footer component
- [ ] Create root layout
- [ ] Implement mobile navigation
- [ ] Add sticky CTA header

### Phase 3: SEO & Schema (Branches: `seo/*`)
- [ ] Create metadata utilities
- [ ] Build JSON-LD components
- [ ] Set up sitemap.xml
- [ ] Set up robots.txt
- [ ] Create llms.txt

### Phase 4: Homepage (Branches: `homepage/*`)
- [ ] Hero section
- [ ] Logo cloud
- [ ] Services section
- [ ] Featured work section
- [ ] Why choose us section
- [ ] Process section
- [ ] Industries section
- [ ] Testimonials section
- [ ] FAQ section
- [ ] Final CTA section

### Phase 5: Service Pages (Branches: `services/*`)
- [ ] Services landing page
- [ ] Web Design & Development page
- [ ] SEO Optimization page
- [ ] AI Automation page
- [ ] Branding page
- [ ] Service page template component

### Phase 6: Work/Case Studies (Branches: `work/*`)
- [ ] Work landing page
- [ ] Case study page template
- [ ] Case study card component

### Phase 7: Content Pages (Branches: `content/*`)
- [ ] About page
- [ ] Contact page
- [ ] Book a Call page
- [ ] Free Website Audit page

### Phase 8: Blog (Branches: `blog/*`)
- [ ] Blog landing page
- [ ] Blog post template
- [ ] Blog card component
- [ ] Category/tag filtering

### Phase 9: CMS Integration (Branches: `cms/*`)
- [ ] Set up Sanity project
- [ ] Create Sanity schemas
- [ ] Connect Next.js to Sanity
- [ ] Implement preview mode

### Phase 10: Final Polish (Branches: `polish/*`)
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Final SEO review

---

## Deployment Guide

### Vercel Deployment

1. **Connect Repository**
   ```bash
   vercel link
   ```

2. **Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://bktechhub.com
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   ```

3. **Build Settings**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Domain Configuration**
   - Add custom domain in Vercel dashboard
   - Configure DNS records

5. **Preview Deployments**
   - Enable preview deployments for PR branches
   - Set up Sanity preview webhook

### Post-Deployment Checklist
- [ ] Verify all pages render correctly
- [ ] Test all forms and CTAs
- [ ] Check structured data with Google's Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics (Google Analytics/Plausible)
- [ ] Configure error monitoring (Sentry)
- [ ] Test performance with Lighthouse
- [ ] Verify mobile responsiveness

---

## Folder Structure

```
bk-redesign/
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── work/
│   │   ├── team/
│   │   └── og/
│   ├── favicon.ico
│   ├── robots.txt
│   └── llms.txt
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx                 # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── web-design-development/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── seo-optimization/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── ai-automation/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── branding-digital-presence/
│   │   │   │       └── page.tsx
│   │   │   ├── work/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── book-a-call/
│   │   │   │   └── page.tsx
│   │   │   └── free-website-audit/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   └── audit/
│   │   │       └── route.ts
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                          # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   ├── container.tsx
│   │   │   └── section.tsx
│   │   ├── sections/
│   │   │   ├── hero-home.tsx
│   │   │   ├── hero-page.tsx
│   │   │   ├── services-grid.tsx
│   │   │   ├── featured-work.tsx
│   │   │   ├── why-choose-us.tsx
│   │   │   ├── process.tsx
│   │   │   ├── industries.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── faq.tsx
│   │   │   ├── cta-section.tsx
│   │   │   └── logo-cloud.tsx
│   │   ├── cards/
│   │   │   ├── service-card.tsx
│   │   │   ├── case-study-card.tsx
│   │   │   ├── blog-post-card.tsx
│   │   │   ├── testimonial-card.tsx
│   │   │   └── feature-card.tsx
│   │   ├── forms/
│   │   │   ├── contact-form.tsx
│   │   │   ├── audit-form.tsx
│   │   │   └── newsletter-form.tsx
│   │   └── seo/
│   │       ├── json-ld.tsx
│   │       └── breadcrumbs.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   ├── metadata.ts
│   │   ├── schema.ts
│   │   └── sanity/
│   │       ├── client.ts
│   │       ├── queries.ts
│   │       └── types.ts
│   ├── hooks/
│   │   ├── use-media-query.ts
│   │   └── use-scroll-position.ts
│   ├── styles/
│   │   └── fonts.ts
│   └── types/
│       └── index.ts
├── sanity/
│   ├── schemas/
│   │   ├── documents/
│   │   │   ├── service.ts
│   │   │   ├── caseStudy.ts
│   │   │   ├── blogPost.ts
│   │   │   ├── author.ts
│   │   │   ├── testimonial.ts
│   │   │   └── siteSettings.ts
│   │   ├── objects/
│   │   │   ├── seo.ts
│   │   │   ├── cta.ts
│   │   │   ├── faq.ts
│   │   │   ├── feature.ts
│   │   │   └── processStep.ts
│   │   └── index.ts
│   ├── lib/
│   │   └── client.ts
│   └── sanity.config.ts
├── .env.local.example
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Notes: Where to Edit Content

### Static Content (Code)
- **Homepage sections:** `src/components/sections/*.tsx`
- **Service page content:** `src/app/(marketing)/services/*/page.tsx`
- **Site metadata:** `src/lib/metadata.ts`
- **Navigation links:** `src/components/layout/header.tsx` and `footer.tsx`
- **Design tokens:** `src/app/globals.css` and `tailwind.config.ts`

### Dynamic Content (CMS)
- **Blog posts:** Sanity Studio → Blog Posts
- **Case studies:** Sanity Studio → Case Studies
- **Testimonials:** Sanity Studio → Testimonials
- **Team members:** Sanity Studio → Team (if implemented)
- **Site settings:** Sanity Studio → Settings

### SEO Content
- **Page metadata:** Individual page files or `generateMetadata` functions
- **Structured data:** `src/lib/schema.ts`
- **Sitemap:** `src/app/sitemap.ts`
- **Robots:** `src/app/robots.ts`

---

## Next Steps

1. ✅ Create this plan document
2. 🔄 Set up Next.js 15 project with all dependencies
3. 🔄 Implement design system and base components
4. 🔄 Build layout components (Header, Footer)
5. 🔄 Create SEO utilities
6. 🔄 Build homepage
7. 🔄 Create service pages
8. 🔄 Build remaining pages
9. 🔄 Set up Sanity CMS
10. 🔄 Final polish and deployment

---

*This plan serves as the source of truth for the BK Tech Hub website redesign project.*
