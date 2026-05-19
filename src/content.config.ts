import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const itemStringOrObject = z.union([
	z.string(),
	z.object({ modId: z.string(), itemId: z.string() })
]);

const ingredientStringOrObject = z.union([
	z.string(),
	z.object({ modId: z.string(), itemId: z.string() }),
	z.null()
]);

const baseRecipeSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	modFilter: z.string(),
	resultItem: itemStringOrObject,
	resultCount: z.number().optional().default(1),
});

const recipeLoader = (path: string) => glob({
	base: `./src/content/recipes/${path}`,
	pattern: '**/*.json'
})

const craftingRecipes = defineCollection({
	loader: recipeLoader('crafting'),
	schema: baseRecipeSchema.extend({
		ingredients: z.array(ingredientStringOrObject).length(9)
	})
});

const smithingRecipes = defineCollection({
	loader: recipeLoader('smithing'),
	schema: baseRecipeSchema.extend({
		template: ingredientStringOrObject.optional(),
		baseItem: itemStringOrObject,
		additionItem: itemStringOrObject,
	}),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	craftingRecipes,
	smithingRecipes,
};
