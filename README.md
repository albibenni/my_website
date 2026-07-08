# my-website

Personal website — projects, CV and articles — in English and Italian.

Built with [Astro](https://astro.build): every page is pre-rendered to static
HTML at build time (great SEO), while interactive parts (theme toggle,
project filters) run client-side with small vanilla scripts. All content is
validated with [zod](https://zod.dev) at build time.

## Commands

| Command        | Action                                   |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Start the dev server at `localhost:4321` |
| `pnpm build`   | Build the production site into `dist/`   |
| `pnpm preview` | Preview the production build locally     |
| `pnpm check`   | Typecheck (`astro check`)                |
| `pnpm lint`    | ESLint (`lint:fix` to auto-fix)          |
| `pnpm format`  | Prettier (`format:check` to verify only) |

## Deployment

Hosted on Cloudflare Pages at [albertobenatti.dev](https://albertobenatti.dev).
Build command `pnpm build`, output directory `dist`. The `packageManager`
field in `package.json` pins the pnpm version Cloudflare uses — keep it in
sync when upgrading pnpm locally, since `pnpm-workspace.yaml` uses pnpm 11+
syntax that older pnpm versions reject.

The domain lives in `SITE_URL` in `astro.config.ts` (used for canonical
URLs, sitemap, robots.txt and RSS).

## Where things live

- `src/config/site.ts` — name, tagline, email, socials (zod-validated)
- `src/data/projects.ts` — project cards (zod-validated)
- `src/data/cv.ts` — experience, education, skills (zod-validated)
- `src/i18n/index.ts` — locales, UI string dictionaries, path helpers
- `src/content/articles/{en,it}/*.md` — articles (frontmatter zod-validated)
- `src/components/pages/*.astro` — page bodies shared by both languages
- `src/pages/**` — thin routes; English at `/`, Italian under `/it/`

## Writing an article

Create `src/content/articles/en/my-post.md`:

```md
---
title: "My post"
description: "Short summary used in lists and meta tags (max 200 chars)."
pubDate: 2026-07-07
tags: ["typescript"]
draft: false
# optional: slug of the Italian version, links them for hreflang/switcher
translationSlug: "il-mio-post"
---

Content in markdown…
```

Add the Italian version under `src/content/articles/it/il-mio-post.md` with
`translationSlug: "my-post"`. A translation is optional — untranslated
articles simply fall back to the articles index when switching language.

Drafts (`draft: true`) show up in `pnpm dev` but are excluded from builds,
RSS and the sitemap.

## SEO

Handled automatically: canonical URLs, `hreflang` alternates per page,
Open Graph tags, JSON-LD for articles, `sitemap-index.xml`, `robots.txt`,
and per-language RSS feeds (`/rss.xml`, `/it/rss.xml`).
