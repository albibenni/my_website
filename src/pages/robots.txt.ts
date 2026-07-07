import type { APIContext } from "astro";

export function GET(context: APIContext): Response {
  const sitemapUrl = new URL("/sitemap-index.xml", context.site);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
