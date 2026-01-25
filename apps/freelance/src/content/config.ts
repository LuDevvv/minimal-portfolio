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

export const collections = {
	'projects': projectsCollection,
};
