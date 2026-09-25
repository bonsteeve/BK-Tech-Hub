# Sanity CMS Recommendations for BK Tech Hub

## Collections
- `siteSettings`: global identity, contact details, default SEO, social links.
- `service`: service pages, outcomes, process steps, FAQ, CTA blocks.
- `caseStudy`: challenge, solution, metrics, testimonial, related services.
- `blogPost`: article content, categories, tags, author, SEO fields.
- `testimonial`: quote, author, company, role, related service/case study.
- `faqItem`: reusable Q&A entries mapped to page types.

## Suggested Fields
### siteSettings
- `siteTitle`, `siteUrl`, `defaultMetaDescription`, `email`, `phone`, `address`, `socialLinks`, `logo`, `ogImage`.

### service
- `title`, `slug`, `summary`, `description`, `idealFor[]`, `outcomes[]`, `deliverables[]`, `process[]`, `faq[]`, `seo`.

### caseStudy
- `title`, `slug`, `industry`, `summary`, `challenge`, `solution`, `impact[]`, `servicesUsed[]`, `testimonial`, `seo`.

### blogPost
- `title`, `slug`, `excerpt`, `publishedAt`, `author`, `category`, `body`, `keyTakeaway`, `faq[]`, `seo`.

### testimonial
- `author`, `role`, `company`, `quote`, `avatar`, `relatedService`, `relatedCaseStudy`.

### faqItem
- `question`, `answer`, `pageType`, `relatedSlug`.

## SEO Field Object
- `metaTitle`, `metaDescription`, `canonicalUrl`, `ogTitle`, `ogDescription`, `ogImage`, `noindex`.

## Implementation Notes
- Keep content and presentation separated by mapping Sanity payloads into typed frontend models.
- Use GROQ queries per page type and co-locate query definitions in `frontend/lib/sanity/queries.ts`.
- Keep homepage sections in a `homePage` document if frequent non-technical editing is needed.
