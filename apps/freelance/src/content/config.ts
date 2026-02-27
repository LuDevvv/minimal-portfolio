import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		img: z.string().optional(),
        link: z.string().optional(),
        publishDate: z.date().optional(),
	}),
});

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		lang: z.enum(['es', 'en']),
	}),
});

export const collections = {
	'projects': projectsCollection,
	'blog': blogCollection,
};
