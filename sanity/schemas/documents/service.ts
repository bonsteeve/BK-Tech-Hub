import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Short Title',
      type: 'string',
      description: 'Used in navigation and cards',
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Small text above the title (e.g., "Our Core Service")',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline for the service page',
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Headline Highlight',
      type: 'string',
      description: 'Part of the headline that should be highlighted',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name from Lucide icons',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'feature' }],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [{ type: 'processStep' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
