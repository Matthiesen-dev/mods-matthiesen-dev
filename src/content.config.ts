import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const craftingRecipes = defineCollection({
	// Use the glob loader to find individual json files
	loader: glob({
		base: './src/content/recipes/crafting',
		pattern: '**/*.json'
	}),
	schema: z.object({
		name: z.string(),
		description: z.string().optional(),
		modFilter: z.string(),
		// Validate an array of exactly 9 elements for the 3x3 layout
		ingredients: z.array(z.union([
			z.string(),
			z.object({ modId: z.string(), itemId: z.string() }),
			z.null()
		])).length(9),
		resultItem: z.union([
			z.string(),
			z.object({ modId: z.string(), itemId: z.string() })
		]),
		resultCount: z.number().optional().default(1),
	}),
});

const smithingRecipes = defineCollection({
	loader: glob({
		base: './src/content/recipes/smithing',
		pattern: '**/*.json'
	}),
	schema: z.object({
		name: z.string(),
		description: z.string().optional(),
		modFilter: z.string(),
		template: z.union([
			z.string(),
			z.object({ modId: z.string(), itemId: z.string() }),
			z.null()
		]).optional(),
		baseItem: z.union([
			z.string(),
			z.object({ modId: z.string(), itemId: z.string() })
		]),
		additionItem: z.union([
			z.string(),
			z.object({ modId: z.string(), itemId: z.string() })
		]),
		resultItem: z.union([
			z.string(),
			z.object({ modId: z.string(), itemId: z.string() })
		]),
	}),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	craftingRecipes,
	smithingRecipes,
};
