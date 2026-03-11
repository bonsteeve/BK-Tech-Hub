import { defineField, defineType } from "sanity";

export const blogPostSchema = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "author", type: "string" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
  ],
});
