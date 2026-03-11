# BK Tech Hub Rebuild Handbook

## 1) Proposed Folder Structure
```text
frontend/
  app/
    about/
    blog/
      [slug]/
    book-a-call/
    contact/
    free-website-audit/
    services/
      [slug]/
    work/
      [slug]/
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    blog/
    forms/
    seo/
    services/
    shared/
    site/
    ui/
  content/
    about.ts
    blog-posts.ts
    case-studies.ts
    homepage.ts
    navigation.ts
    services.ts
  lib/
    schema.ts
    seo.ts
    site-config.ts
    utils.ts
  public/
    llms.txt
  sanity/
    schemas/
```

## 2) Homepage Sample Copy
- Hero Headline: `Build a Website That Turns Traffic Into Qualified Leads`
- Hero Summary: `BK Tech Hub designs and develops high-performance websites, SEO-ready web experiences, and AI-powered automations that help SMEs grow faster with less manual work.`
- Primary CTA: `Book a Strategy Call`
- Secondary CTA: `Get a Free Website Audit`

## 3) Color Palette Recommendation
- Background Base: `#070A12`
- Background Gradient End: `#0D1320`
- Surface: `#11192A`
- Surface Elevated: `#16233A`
- Primary Accent: `#19C2B0`
- Secondary Accent: `#4EA3FF`
- Highlight: `#F2C14E`
- Text Primary: `#F5F7FA`
- Text Muted: `#A5B0C2`

## 4) Typography Recommendation
- Heading Font: `Sora`
- Body Font: `Manrope`
- Heading Style: high-contrast, tight tracking, strong scale
- Body Style: readable, neutral, conversion-oriented

## 5) Component Inventory
- Layout: `SiteHeader`, `SiteFooter`, `Section`, `SectionHeading`
- SEO: `JsonLd`, metadata utility (`createPageMetadata`)
- Motion: `FadeIn` with reduced motion support
- Forms: `ContactForm`, `BookCallForm`, `WebsiteAuditForm`
- Templates: `ServicePageTemplate`, `CaseStudyTemplate`, `BlogPostTemplate`
- UI Primitives: `Button`, `Input`, `Textarea`, `Badge`

## 6) Where to Edit Content Later
- Homepage copy and sections: `frontend/content/homepage.ts`
- Services: `frontend/content/services.ts`
- Case studies: `frontend/content/case-studies.ts`
- Blog posts: `frontend/content/blog-posts.ts`
- About page content: `frontend/content/about.ts`
- Navigation/footer links: `frontend/content/navigation.ts`
- Global business info: `frontend/lib/site-config.ts`

## 7) Vercel Deployment Instructions
1. Push `rebuild` branch to remote.
2. In Vercel, import repository and set root to `frontend`.
3. Build command: `npm run build`.
4. Output: Next.js default.
5. Add environment variables (when CMS is enabled):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
6. Deploy and verify:
   - `/sitemap.xml`
   - `/robots.txt`
   - page metadata + JSON-LD
   - forms and confirmation states
7. Connect Google Search Console and submit sitemap.

## 8) Notes for Scaling
- Current `content/*.ts` files are CMS-ready placeholders.
- Sanity starter schemas are available under `frontend/sanity/schemas`.
- SEO and schema logic is centralized in `frontend/lib/seo.ts` and `frontend/lib/schema.ts`.
