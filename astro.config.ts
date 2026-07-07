import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// TODO: change this to your real domain once you have one.
export const SITE_URL = "https://example.com";

export default defineConfig({
  site: SITE_URL,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", it: "it" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
