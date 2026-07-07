import { z } from "zod";
import { localizedStringSchema } from "@/i18n";

const projectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: localizedStringSchema,
  tags: z.array(z.string().min(1)).min(1),
  repoUrl: z.url().optional(),
  demoUrl: z.url().optional(),
  featured: z.boolean().default(false),
});

export type Project = z.infer<typeof projectSchema>;

export const projects: Project[] = z.array(projectSchema).parse([
  {
    id: "free",
    title: "Free",
    description: {
      en: "A native macOS focus blocker with strict allowlist enforcement: website blocking with wildcard rules, weekly schedules, Pomodoro cycles, calendar import and a tamper-resistant strict mode.",
      it: "Un focus blocker nativo per macOS con allowlist rigorose: blocco dei siti con regole wildcard, programmazione settimanale, cicli Pomodoro, import dal calendario e una strict mode resistente alle manomissioni.",
    },
    tags: ["Swift", "AppKit", "macOS"],
    repoUrl: "https://github.com/albibenni/free",
    featured: true,
  },
  {
    id: "kindle-highlights",
    title: "Kindle Highlights Parser",
    description: {
      en: "An interactive TUI that parses Kindle highlights from My Clippings.txt and exports them as clean Markdown files organized by book and author — ready for an Obsidian vault.",
      it: "Una TUI interattiva che estrae le evidenziazioni Kindle da My Clippings.txt e le esporta come file Markdown puliti, organizzati per libro e autore — pronti per un vault Obsidian.",
    },
    tags: ["Go", "TUI", "CLI"],
    repoUrl: "https://github.com/albibenni/kindle-highlights",
    featured: true,
  },
  {
    id: "tui-code-projects",
    title: "New Project TUI",
    description: {
      en: "A terminal UI built with Rust and ratatui to scaffold new code projects: language presets, git hooks, makefiles and common tooling set up interactively in seconds.",
      it: "Un'interfaccia da terminale scritta in Rust con ratatui per creare lo scheletro di nuovi progetti: preset per linguaggio, git hook, makefile e tooling comune configurati interattivamente in pochi secondi.",
    },
    tags: ["Rust", "TUI", "CLI"],
    repoUrl: "https://github.com/albibenni/tui-code-projects",
    featured: true,
  },
  {
    id: "personal-website",
    title: "Personal website",
    description: {
      en: "This very site: a bilingual, SEO-friendly personal website built with Astro, Tailwind CSS and zod-validated content collections.",
      it: "Proprio questo sito: un sito personale bilingue e SEO-friendly costruito con Astro, Tailwind CSS e content collections validate con zod.",
    },
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/albibenni/my-website",
  },
]);

export const featuredProjects = projects.filter((p) => p.featured);

export const allProjectTags = [
  ...new Set(projects.flatMap((p) => p.tags)),
].sort();
