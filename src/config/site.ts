import { z } from "zod";
import { localizedStringSchema } from "@/i18n";

const socialLinkSchema = z.object({
  label: z.string().min(1),
  href: z.url(),
});

const siteConfigSchema = z.object({
  /** Your name, shown in the header, hero and meta tags. */
  author: z.string().min(1),
  /** Short professional tagline, per language. */
  tagline: localizedStringSchema,
  /** Site description used for SEO meta tags, per language. */
  description: localizedStringSchema,
  email: z.email(),
  socials: z.array(socialLinkSchema),
  /** Per-language path (under /public) of the downloadable CV. Set to null to hide the button. */
  cvPdfPath: z
    .object({
      en: z.string().startsWith("/"),
      it: z.string().startsWith("/"),
    })
    .nullable(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const siteConfig: SiteConfig = siteConfigSchema.parse({
  author: "Alberto Benatti",
  tagline: {
    en: "Software Engineer (Full Stack) building scalable, cloud-native applications.",
    it: "Software Engineer (Full Stack), costruisco applicazioni scalabili e cloud-native.",
  },
  description: {
    en: "Personal website of Alberto Benatti, full-stack software engineer: projects, CV and articles about software development.",
    it: "Sito personale di Alberto Benatti, software engineer full-stack: progetti, CV e articoli sullo sviluppo software.",
  },
  email: "albibenniyt@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/albibenni" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alberto-benatti-b0554911a",
    },
  ],
  cvPdfPath: {
    en: "/cv-alberto-benatti.pdf",
    it: "/cv-alberto-benatti-it.pdf",
  },
});
