import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudySchema = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "industry", type: "string" }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "challenge", type: "text" }),
    defineField({ name: "solution", type: "text" }),
    defineField({
      name: "impact",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
