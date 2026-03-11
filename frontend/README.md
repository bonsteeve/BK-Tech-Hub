# BK Tech Hub Frontend

This frontend is built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui primitives, and Framer Motion.

## Scripts
- `npm run dev` - start local development server
- `npm run build` - build for production
- `npm run start` - run production build
- `npm run lint` - run lint checks
- `npm run typecheck` - run TypeScript checks

## Architecture
- `app/` - route segments, pages, layouts, metadata handlers
- `components/` - reusable UI and section components
- `lib/` - utilities, SEO/schema helpers, site config
- `content/` - local content modules (fallback before/alongside CMS)

## Notes
- Content is structured to be CMS-ready (Sanity target model).
- SEO metadata and schema utilities are centralized in `lib/`.
