# Sanity CMS Setup Guide

This guide explains how to set up Sanity CMS for the BK Tech Hub website.

## Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (free at sanity.io)

## Quick Start

### 1. Create Sanity Project

```bash
# Navigate to sanity directory
cd sanity

# Install Sanity CLI globally
npm install -g @sanity/cli

# Initialize Sanity project (interactive setup)
sanity init --project-id YOUR_PROJECT_ID --dataset production
```

Or create a new project:

```bash
sanity init --create-project "BK Tech Hub" --dataset production
```

### 2. Install Dependencies

```bash
npm install @sanity/client @sanity/image-url next-sanity
```

### 3. Configure Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token  # For server-side operations
```

### 4. Register Schemas

Update your `sanity.config.ts`:

```typescript
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import {
  service,
  caseStudy,
  blogPost,
  author,
  testimonial,
  siteSettings,
  seo,
  feature,
  processStep,
  faq,
  cta,
} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'BK Tech Hub',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [
      // Documents
      service,
      caseStudy,
      blogPost,
      author,
      testimonial,
      siteSettings,
      // Objects
      seo,
      feature,
      processStep,
      faq,
      cta,
    ],
  },
});
```

## Content Model

### Documents

| Document | Description |
|----------|-------------|
| **Service** | Service pages (Web Design, SEO, etc.) |
| **Case Study** | Client projects and results |
| **Blog Post** | Blog articles with rich content |
| **Author** | Blog post authors |
| **Testimonial** | Client testimonials |
| **Site Settings** | Global site configuration |

### Objects

| Object | Description |
|--------|-------------|
| **SEO** | SEO metadata for pages |
| **Feature** | Feature item with title, description, icon |
| **Process Step** | Step in a process flow |
| **FAQ** | Question and answer pair |
| **CTA** | Call-to-action button |

## Sanity Client Setup

Create `src/lib/sanity/client.ts`:

```typescript
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
```

## Example Queries

Create `src/lib/sanity/queries.ts`:

```typescript
import { groq } from 'next-sanity';

// Get all services
export const servicesQuery = groq`
  *[_type == "service"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    shortTitle,
    description,
    icon,
    features,
    seo
  }
`;

// Get single service by slug
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    badge,
    headline,
    headlineHighlight,
    description,
    icon,
    features,
    benefits,
    process,
    faqs,
    seo
  }
`;

// Get featured case studies
export const featuredCaseStudiesQuery = groq`
  *[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    client,
    industry,
    description,
    results,
    "services": services[]->title,
    featuredImage
  }
`;

// Get all blog posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    tags,
    featuredImage,
    publishedAt,
    featured,
    "author": author->{name, role, image}
  }
`;

// Get featured testimonials
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    name,
    role,
    company,
    quote,
    image,
    rating
  }
`;

// Get site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    email,
    phone,
    address,
    social,
    defaultSeo
  }
`;
```

## Usage in Next.js

### Server Component Example

```typescript
import { client } from '@/lib/sanity/client';
import { servicesQuery } from '@/lib/sanity/queries';

export default async function ServicesPage() {
  const services = await client.fetch(servicesQuery);
  
  return (
    <div>
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
}
```

### With Revalidation

```typescript
export const revalidate = 60; // Revalidate every 60 seconds

// Or use on-demand revalidation with webhooks
```

## Preview Mode

Set up preview mode for draft content editing:

1. Create API route for preview
2. Configure Sanity webhook
3. Add preview banner component

## Deployment

### Sanity Studio

Deploy Sanity Studio to Sanity hosting:

```bash
cd sanity
sanity deploy
```

### Webhooks (Optional)

Set up webhooks to trigger Next.js revalidation when content changes:

1. Go to Sanity project settings
2. Add webhook URL: `https://yourdomain.com/api/revalidate`
3. Set secret for security

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
