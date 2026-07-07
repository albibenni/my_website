import { z } from "zod";

export const locales = ["en", "it"] as const;
export const localeSchema = z.enum(locales);
export type Locale = z.infer<typeof localeSchema>;

export const defaultLocale: Locale = "en";

export const languageNames: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
};

/** A string translated into every supported locale. */
export const localizedStringSchema = z.object({
  en: z.string().min(1),
  it: z.string().min(1),
});
export type LocalizedString = z.infer<typeof localizedStringSchema>;

const en = {
  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.articles": "Articles",
  "nav.about": "About",
  "nav.openMenu": "Open menu",
  "nav.switchLanguage": "Cambia lingua in italiano",

  "home.greeting": "Hi, I am",
  "home.viewProjects": "View projects",
  "home.readArticles": "Read articles",
  "home.featuredProjects": "Featured projects",
  "home.recentArticles": "Recent articles",
  "home.allProjects": "All projects",
  "home.allArticles": "All articles",

  "projects.title": "Projects",
  "projects.intro": "A selection of things I have built and shipped.",
  "projects.filterAll": "All",
  "projects.sourceCode": "Source code",
  "projects.liveDemo": "Live demo",

  "articles.title": "Articles",
  "articles.intro": "Notes and write-ups on things I learn and build.",
  "articles.readMore": "Read more",
  "articles.backToList": "All articles",
  "articles.updated": "Updated",
  "articles.translationAvailable": "Also available in Italian",

  "about.title": "About me",
  "about.experience": "Experience",
  "about.education": "Education",
  "about.skills": "Skills",
  "about.downloadCv": "Download CV (PDF)",

  "contact.title": "Get in touch",
  "contact.body":
    "Want to talk about a project, a role, or just say hi? Reach out through any of these.",

  "footer.rights": "All rights reserved.",
  "theme.toggle": "Toggle dark mode",

  "notFound.title": "Page not found",
  "notFound.body": "The page you are looking for does not exist or has moved.",
  "notFound.backHome": "Back to home",
} as const;

export type UIKey = keyof typeof en;

const it: Record<UIKey, string> = {
  "nav.home": "Home",
  "nav.projects": "Progetti",
  "nav.articles": "Articoli",
  "nav.about": "Chi sono",
  "nav.openMenu": "Apri il menu",
  "nav.switchLanguage": "Switch language to English",

  "home.greeting": "Ciao, sono",
  "home.viewProjects": "Guarda i progetti",
  "home.readArticles": "Leggi gli articoli",
  "home.featuredProjects": "Progetti in evidenza",
  "home.recentArticles": "Articoli recenti",
  "home.allProjects": "Tutti i progetti",
  "home.allArticles": "Tutti gli articoli",

  "projects.title": "Progetti",
  "projects.intro": "Una selezione di cose che ho costruito e pubblicato.",
  "projects.filterAll": "Tutti",
  "projects.sourceCode": "Codice sorgente",
  "projects.liveDemo": "Demo live",

  "articles.title": "Articoli",
  "articles.intro": "Appunti e approfondimenti su ciò che imparo e costruisco.",
  "articles.readMore": "Leggi tutto",
  "articles.backToList": "Tutti gli articoli",
  "articles.updated": "Aggiornato",
  "articles.translationAvailable": "Disponibile anche in inglese",

  "about.title": "Chi sono",
  "about.experience": "Esperienza",
  "about.education": "Formazione",
  "about.skills": "Competenze",
  "about.downloadCv": "Scarica il CV (PDF)",

  "contact.title": "Contattami",
  "contact.body":
    "Vuoi parlare di un progetto, di una collaborazione o semplicemente salutare? Scrivimi.",

  "footer.rights": "Tutti i diritti riservati.",
  "theme.toggle": "Attiva/disattiva tema scuro",

  "notFound.title": "Pagina non trovata",
  "notFound.body": "La pagina che cerchi non esiste o è stata spostata.",
  "notFound.backHome": "Torna alla home",
};

// Runtime guarantee (on top of the compile-time one) that every locale
// defines every key with a non-empty string.
const dictionarySchema = z.record(
  z.enum(Object.keys(en) as [UIKey, ...UIKey[]]),
  z.string().min(1),
);

export const ui: Record<Locale, Record<UIKey, string>> = {
  en: dictionarySchema.parse(en),
  it: dictionarySchema.parse(it),
};

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split("/");
  const parsed = localeSchema.safeParse(first);
  return parsed.success ? parsed.data : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key];
  };
}

/**
 * Map a pathname to its equivalent in another locale.
 * English lives at the root, Italian under /it.
 */
export function translatePath(path: string, locale: Locale): string {
  const stripped = path.replace(/^\/it(?=\/|$)/, "") || "/";
  if (locale === defaultLocale) return stripped;
  return stripped === "/" ? "/it/" : `/it${stripped}`;
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
