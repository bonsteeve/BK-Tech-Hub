import { defineType, defineField } from 'sanity';

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
