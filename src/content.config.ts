import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

/**
 * Articles live in src/content/articles/<locale>/<slug>.md.
 * The locale is derived from the folder name; the slug from the file name.
 */
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string().min(1).max(120),
    description: z.string().min(1).max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string().min(1)).default([]),
    draft: z.boolean().default(false),
    /**
     * Slug of the same article in the other language, if a translation
     * exists (e.g. "ciao-mondo"). Used for hreflang and the language switcher.
     */
    translationSlug: z.string().optional(),
  }),
});

export const collections = { articles };
