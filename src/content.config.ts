import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Sharla Clark'),
    summary: z.string(),
    featured_image: z.string().optional(),
    featured_image_alt: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    status: z.enum(['Draft', 'Published']).default('Draft'),
  }),
});

export const collections = { blog };
