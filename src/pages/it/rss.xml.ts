import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { siteConfig } from "@/config/site";
import { articlePath, getArticles, parseArticleId } from "@/data/articles";

export async function GET(context: APIContext): Promise<Response> {
  const articles = await getArticles("it");
  return rss({
    title: `${siteConfig.author} — Articoli`,
    description: siteConfig.description.it,
    site: context.site!,
    customData: "<language>it</language>",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: articlePath("it", parseArticleId(article.id).slug),
    })),
  });
}
