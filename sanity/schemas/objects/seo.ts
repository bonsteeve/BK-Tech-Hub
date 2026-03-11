import { defineType, defineField } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Override the default page title for SEO',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Override the default description for SEO (150-160 characters recommended)',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social sharing (1200x630 recommended)',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Hide this page from search engines',
      initialValue: false,
    }),
  ],
});
