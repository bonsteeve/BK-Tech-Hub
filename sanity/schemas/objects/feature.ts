import { defineType, defineField } from 'sanity';

export const feature = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name from Lucide icons',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
