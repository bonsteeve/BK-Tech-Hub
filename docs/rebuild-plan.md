# BK Tech Hub Website Rebuild Plan (Branch: `rebuild`)

## Objectives
- Rebuild the frontend in Next.js 15 App Router + TypeScript + Tailwind + shadcn/ui + Framer Motion.
- Deliver a premium, conversion-focused, SEO-ready and AI-readable website.
- Set up a CMS-ready structure (Sanity-ready schemas/content model) for scalable content operations.

## Execution Model
- Base branch: `rebuild`
- Work approach: one step branch per implementation step, then merge each step back into `rebuild`.
- Page delivery: each primary page family implemented in its own step branch.

## Step Branches
1. `rebuild-step1-plan`:
   - Document roadmap, sitemap, content model, design system direction, homepage copy draft, wireframe sections.
2. `rebuild-step2-foundation`:
   - Migrate frontend to Next.js 15 App Router and TypeScript.
   - Tailwind + shadcn base setup.
   - Global layout, fonts, theme tokens, base UI primitives.
3. `rebuild-step3-shared-components`:
   - Header, mobile nav, sticky CTA, footer, shared section wrappers, CTA, badges, trust blocks.
4. `rebuild-step4-homepage`:
   - Full homepage implementation with motion, conversion sections, FAQ, final CTA.
5. `rebuild-step5-services`:
   - Services index + individual service page templates and pages.
6. `rebuild-step6-work`:
   - Work/case studies list page + case-study template page.
7. `rebuild-step7-about`:
   - About page with positioning, team/process story, trust elements.
8. `rebuild-step8-blog`:
   - Blog index + blog post template.
9. `rebuild-step9-contact`:
   - Contact page with conversion-focused form patterns and trust microcopy.
10. `rebuild-step10-campaign-pages`:
   - Book a Call landing page + Free Website Audit page.
11. `rebuild-step11-seo-schema-cms`:
   - Metadata API wiring across pages, schema utilities, robots/sitemap, llms.txt, CMS schema recommendations.
12. `rebuild-step12-polish`:
   - Accessibility checks, reduced-motion support, performance and final QA.

## Sitemap
- `/` Home
- `/services` Services
- `/services/web-design-development`
- `/services/seo-optimization`
- `/services/ai-automation-for-smes`
- `/services/branding-digital-presence`
- `/work`
- `/work/[slug]`
- `/about`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/book-a-call`
- `/free-website-audit`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt` (experimental)

## Information Architecture + Content Model
- Global:
  - Site settings (brand details, contact info, social links, default SEO)
  - Navigation + footer links
- Services:
  - Title, slug, summary, hero copy, outcomes, deliverables, process, FAQ, CTA.
- Case studies:
  - Client, industry, challenge, solution, outcomes/KPIs, testimonial, gallery, related services.
- Blog posts:
  - Title, slug, excerpt, body, author, date, category, tags, FAQ (optional), SEO metadata.
- Testimonials:
  - Person, role, company, quote, image/logo, related service/case study.
- FAQs:
  - Question, answer, related page type.
- Lead assets:
  - Book call content blocks, audit offer details, form success copy.

## Homepage Copy Draft (Initial)
- Hero headline: `Build a Website That Turns Traffic Into Qualified Leads.`
- Hero supporting text: `BK Tech Hub designs and develops high-performance websites, SEO-ready digital experiences, and AI automation systems that help growing businesses scale with clarity.`
- Primary CTA: `Book a Strategy Call`
- Secondary CTA: `Get a Free Website Audit`
- Value props:
  - `Modern web design built for conversion`
  - `Technical SEO foundations from day one`
  - `AI-powered automation to reduce manual work`

## Homepage Wireframe Sections
1. Hero (headline, subcopy, dual CTA, trust chips)
2. Services overview cards
3. Ideal clients/industries
4. Why BK Tech Hub (differentiators)
5. Featured work/case studies
6. Process (4-step model)
7. Testimonials/proof
8. FAQ
9. Final CTA
10. Footer

## Design System Direction
- Theme: premium dark with layered depth.
- Colors (initial tokens):
  - Background: `#070A12`, `#0D1320`
  - Surface: `#11192A`, `#16233A`
  - Primary accent: `#19C2B0`
  - Secondary accent: `#4EA3FF`
  - Highlight: `#F2C14E`
  - Text primary: `#F5F7FA`
  - Text muted: `#A5B0C2`
- Radius scale: `12px`, `18px`, `24px`
- Motion: Framer Motion with subtle entrance/hover transitions and reduced-motion fallback.

## SEO + Schema Plan
- Per-route metadata via Next Metadata API.
- Canonical, OG, Twitter cards, descriptive URLs and heading hierarchy.
- JSON-LD utility generators for:
  - Organization
  - LocalBusiness
  - Service
  - FAQPage
  - BreadcrumbList
- Add `robots.ts`, `sitemap.ts`, and `public/llms.txt`.

## Lead Generation Plan
- Sticky header CTA across key pages.
- High-intent CTA blocks across service and case-study sections.
- Contact + landing forms with trust microcopy and clear outcomes.
- Form state handling ready for server actions/CRM integration.

## Notes
- Final copy and case-study metrics can be updated in content modules or CMS entries later.
- Base architecture will separate content from presentation for scaling.
