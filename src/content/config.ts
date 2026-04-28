import { defineCollection, z } from "astro:content";

const localeSchema = z.enum(["en", "ru"]);

const baseSchema = z.object({
  title: z.string(),
  pathSlug: z.string(),
  locale: localeSchema,
  translationKey: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  coverImage: z.string().optional().nullable(),
  sourceType: z.enum(["linkedin", "article", "page", "project"]),
  sourceUrl: z.string().url().optional()
});

const posts = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    featured: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    proof: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    repoUrl: z.string().url().optional()
  })
});

const pages = defineCollection({
  type: "content",
  schema: baseSchema
});

export const collections = {
  posts,
  projects,
  pages
};
