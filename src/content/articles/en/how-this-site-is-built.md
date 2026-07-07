---
title: "How this site is built"
description: "The stack behind this website: Astro, TypeScript, Tailwind CSS and zod-validated content."
pubDate: 2026-07-06
tags: ["astro", "typescript", "meta"]
---

A quick tour of the stack behind this site, for the curious.

## The stack

- **[Astro](https://astro.build)** renders every page to static HTML at build
  time, so search engines see real content — no empty JavaScript shell.
- Interactive bits (theme toggle, project filters) hydrate **client-side**
  with tiny vanilla scripts. No framework runtime is shipped at all.
- **Tailwind CSS** for styling, with automatic dark mode.
- **TypeScript in strict mode** everywhere, and **zod** validating every
  piece of content: article frontmatter, project data, even the UI
  translation dictionaries. A typo in a date or a missing Italian
  translation fails the build instead of silently shipping.

## Internationalization

English lives at the root (`/articles/...`) and Italian under `/it/`. Each
page declares `hreflang` alternates so search engines serve the right
language, and articles can point at their translation via a
`translationSlug` frontmatter field.

The source is a good starting point if you want to build something similar.
