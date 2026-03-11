import { defineType, defineField } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
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
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this case study on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
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
      subtitle: 'client',
      media: 'featuredImage',
    },
  },
});
