import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Blog posts are written through Decap CMS (/admin) into src/content/blog.
// Field names mirror the "blog" collection in public/admin/config.yml.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Sharla Clark'),
    summary: z.string(),
    featured_image: z.string().optional(),
    featured_image_alt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['Draft', 'Published']).default('Draft'),
  }),
})

export const collections = { blog }
