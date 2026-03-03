import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.string(),
    tags: z.string().optional(),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
