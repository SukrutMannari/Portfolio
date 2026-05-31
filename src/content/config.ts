import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // must match a key in CATEGORIES (src/data/site.ts)
    category: z.enum(['aero', 'robotics', 'electronics', 'cad', 'automation', 'ai', 'structures']),
    status: z.enum(['complete', 'in-progress', 'planned']),
    summary: z.string(),
    skills: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    model: z.string().optional(), // path to a .glb for the 3D viewer (optional)
    github: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    date: z.coerce.date(),
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['music', 'engineering', 'academics', 'service', 'competition', 'other']),
    cover: z.string().optional(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, journal };
