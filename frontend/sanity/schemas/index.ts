import { blogPostSchema } from "@/sanity/schemas/blog-post";
import { caseStudySchema } from "@/sanity/schemas/case-study";
import { faqItemSchema } from "@/sanity/schemas/faq-item";
import { serviceSchema } from "@/sanity/schemas/service";
import { siteSettingsSchema } from "@/sanity/schemas/site-settings";
import { testimonialSchema } from "@/sanity/schemas/testimonial";

export const schemaTypes = [
  siteSettingsSchema,
  serviceSchema,
  caseStudySchema,
  blogPostSchema,
  testimonialSchema,
  faqItemSchema,
];
