import { defineType, defineField } from 'sanity';

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
          { title: 'Ghost', value: 'ghost' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
});
