import { defineType, defineField } from 'sanity';

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
});
