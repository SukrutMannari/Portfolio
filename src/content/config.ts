import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // must match a key in CATEGORIES (src/data/site.ts)
    category: z.enum(['aero', 'robotics', 'electronics', 'automation', 'ai', 'structures']),
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

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.string(),
    caption: z.string().optional(),
    tag: z.string().optional(),
    order: z.number().default(0),
  }),
});

const games = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['python', 'game', 'experiment']),
    description: z.string(),
    thumbnail: z.string().optional(),
    entry: z.string(), // path to game or PyScript file
    github: z.string().optional(),
    date: z.coerce.date(),
  }),
});

const service = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    hours: z.number().optional(),
    role: z.string().optional(),
    category: z.enum(['library', 'njhs', 'school', 'community', 'other']).default('other'),
    notes: z.string().optional(),
  }),
});

const taekwondo = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    eventType: z.enum(['grading', 'competition', 'teaching', 'training', 'other']),
    notes: z.string().optional(),
  }),
});

const performances = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string().optional(),
    instrument: z.string().default('Baritone Saxophone'),
    role: z.string().optional(),
    performanceType: z.enum(['band', 'solo', 'competition', 'other']).default('band'),
    notes: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { projects, journal, photos, games, service, taekwondo, performances };
