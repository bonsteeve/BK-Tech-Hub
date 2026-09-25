import { defineField, defineType } from "sanity";

export const faqItemSchema = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string" }),
    defineField({ name: "answer", type: "text" }),
    defineField({
      name: "pageType",
      type: "string",
      options: {
        list: ["home", "service", "blog", "general"],
      },
    }),
    defineField({ name: "relatedSlug", type: "string" }),
  ],
});
