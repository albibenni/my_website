import { getCollection, type CollectionEntry } from "astro:content";
import { localeSchema, type Locale } from "@/i18n";

export type Article = CollectionEntry<"articles">;

/** "en/hello-world" -> { locale: "en", slug: "hello-world" } */
export function parseArticleId(id: Article["id"]): {
  locale: Locale;
  slug: string;
} {
  const [prefix, ...rest] = id.split("/");
  const locale = localeSchema.parse(prefix);
  return { locale, slug: rest.join("/") };
}

/** Published articles for one locale, newest first. Drafts show up in dev only. */
export async function getArticles(locale: Locale): Promise<Article[]> {
  const articles = await getCollection("articles", ({ id, data }) => {
    const isPublished = !data.draft || import.meta.env.DEV;
    return id.startsWith(`${locale}/`) && isPublished;
  });
  return articles.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function articlePath(locale: Locale, slug: string): string {
  return locale === "en" ? `/articles/${slug}/` : `/it/articles/${slug}/`;
}
