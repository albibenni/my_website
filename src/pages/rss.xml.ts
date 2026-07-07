import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { siteConfig } from "@/config/site";
import { articlePath, getArticles, parseArticleId } from "@/data/articles";

export async function GET(context: APIContext): Promise<Response> {
  const articles = await getArticles("en");
  return rss({
    title: `${siteConfig.author} — Articles`,
    description: siteConfig.description.en,
    site: context.site!,
    customData: "<language>en</language>",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: articlePath("en", parseArticleId(article.id).slug),
    })),
  });
}
