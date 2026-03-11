# BK Tech Hub Website

A premium, high-converting sales website for BK Tech Hub - a digital company helping businesses with website design, development, SEO-ready web experiences, and AI-powered business automation.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **CMS:** Sanity (CMS-ready architecture)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Marketing pages group
│   ├── api/                # API routes
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles & design tokens
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── sections/           # Page sections
│   ├── cards/              # Card components
│   ├── forms/              # Form components
│   └── seo/                # SEO components (JsonLd, Breadcrumbs)
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── constants.ts        # Site configuration
│   ├── schema.ts           # JSON-LD schema generators
│   └── sanity/             # Sanity CMS utilities
├── hooks/                  # Custom React hooks
└── types/                  # TypeScript types
```

## Design System

### Color Palette

- **Primary:** Electric Cyan (#00D4FF)
- **Secondary:** Violet (#8B5CF6)
- **Background:** Deep Black (#0A0A0B)
- **Elevated:** Card Black (#111113)

### Typography

- **Display Font:** Plus Jakarta Sans
- **Body Font:** Inter
- **Monospace:** JetBrains Mono

### Key Features

- Dark mode by default
- Elegant motion with Framer Motion
- Mobile-first responsive design
- Fully accessible (WCAG-conscious)
- SEO optimized with JSON-LD schemas
- AI-optimized content structure

## Branch Strategy

- `main` - Production-ready code
- `rebuild` - Active development branch
- Feature branches merge into `rebuild`

## Development Workflow

1. Create feature branch from `rebuild`
2. Implement changes
3. Test locally
4. Merge to `rebuild`
5. When stable, merge `rebuild` to `main`

## SEO Features

- Semantic HTML structure
- Dynamic metadata with Next.js Metadata API
- JSON-LD structured data (Organization, Service, FAQ, etc.)
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter cards
- llms.txt for AI systems

## Deployment

This project is configured for deployment on Vercel.

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy

See [PLAN.md](./PLAN.md) for detailed documentation.

## License

Private - BK Tech Hub
