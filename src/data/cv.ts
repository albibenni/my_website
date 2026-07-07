import { z } from "zod";
import { localizedStringSchema } from "@/i18n";

const localizedListSchema = z.object({
  en: z.array(z.string().min(1)).min(1),
  it: z.array(z.string().min(1)).min(1),
});

const experienceSchema = z.object({
  company: z.string().min(1),
  role: localizedStringSchema,
  location: localizedStringSchema.optional(),
  /** Free-form period, e.g. "2023 – present". */
  period: localizedStringSchema,
  highlights: localizedListSchema,
});

const educationSchema = z.object({
  institution: z.string().min(1),
  degree: localizedStringSchema,
  period: localizedStringSchema,
  notes: localizedStringSchema.optional(),
});

const skillGroupSchema = z.object({
  label: localizedStringSchema,
  items: z.array(z.string().min(1)).min(1),
});

const cvSchema = z.object({
  summary: localizedStringSchema,
  experience: z.array(experienceSchema).min(1),
  education: z.array(educationSchema).min(1),
  skills: z.array(skillGroupSchema).min(1),
});

export type Cv = z.infer<typeof cvSchema>;

export const cv: Cv = cvSchema.parse({
  summary: {
    en: "Software Engineer with over 5 years of experience building scalable, cloud-native applications, including 2 years driving architecture in a fast-paced startup environment. Expertise in modern web technologies (TypeScript, Node.js, Java, Go and React) and cloud infrastructure (AWS). Proven track record of managing end-to-end development lifecycles, designing robust microservices, and implementing automated CI/CD pipelines to accelerate product delivery.",
    it: "Software Engineer Full Stack con 5+ anni di esperienza nello sviluppo di architetture a microservizi scalabili. Esperienza in contesti startup ed enterprise, sviluppo end-to-end, architetture backend, microservizi, CI/CD e cloud AWS.",
  },
  experience: [
    {
      company: "Freelance",
      role: {
        en: "Software Engineer (Freelance)",
        it: "Software Engineer (Freelance)",
      },
      location: {
        en: "Remote",
        it: "Remoto",
      },
      period: {
        en: "Oct 2024 – present",
        it: "10/2024 – presente",
      },
      highlights: {
        en: [
          "Working as an independent software engineer, designing and delivering full-stack solutions for clients end to end — from architecture to deployment.",
          "Building Java applications with Spring Boot, alongside TypeScript, Node.js, Go and React, with cloud infrastructure and CI/CD on AWS.",
        ],
        it: [
          "Lavoro come software engineer indipendente, progettando e realizzando soluzioni full-stack per i clienti end-to-end — dall'architettura al deployment.",
          "Sviluppo applicazioni Java con Spring Boot, oltre a TypeScript, Node.js, Go e React, con infrastruttura cloud e CI/CD su AWS.",
        ],
      },
    },
    {
      company: "Missoun",
      role: {
        en: "Full Stack Developer",
        it: "Full Stack Developer",
      },
      location: {
        en: "Remote — Netherlands",
        it: "Remoto — Olanda",
      },
      period: {
        en: "Oct 2023 – Oct 2024",
        it: "10/2023 – 10/2024",
      },
      highlights: {
        en: [
          "Joined as the first full-stack engineer and architected core systems from the ground up.",
          "3D Configurator: engineered a custom 3D product customization tool using Three.js and Next.js, replacing third-party solutions to eliminate licensing costs and significantly improve rendering performance.",
          "File Processing System: architected a scalable, multi-tenant ingestion pipeline (Go, Node.js, S3 and DynamoDB) to process large-scale 3D assets while guaranteeing strict data isolation between tenants.",
          "DevOps Pipeline: established a fully automated CI/CD pipeline via GitHub Actions, reducing deployment cycles and eliminating manual intervention for AWS releases.",
        ],
        it: [
          "Entrato come primo ingegnere Full Stack, ho architettato i sistemi principali dalle fondamenta.",
          "Configuratore 3D: sviluppo di un tool interattivo con Three.js, eliminando i costi di licenza e migliorando le performance per i clienti.",
          "File Processing: creazione di una pipeline di ingestione multi-tenant in Go e Node.js, scalabile per file di grandi dimensioni, con persistenza su PostgreSQL, DynamoDB e S3.",
          "DevOps: implementazione di una pipeline CI/CD con GitHub Actions, riducendo i tempi di rilascio ed eliminando i deployment manuali.",
        ],
      },
    },
    {
      company: "Agap2 / Dedagroup",
      role: {
        en: "Full Stack Developer",
        it: "Full Stack Developer",
      },
      location: {
        en: "Remote — Milan",
        it: "Remoto — Milano",
      },
      period: {
        en: "May 2022 – Sep 2023",
        it: "05/2022 – 09/2023",
      },
      highlights: {
        en: [
          "Collaborated with international consultants (including Thoughtworks) to deliver enterprise-grade cloud solutions.",
          "Fashion Supply Chain Platform: engineered a cloud-native AWS application to connect brands and suppliers. Built the backend with Java Spring Boot and Kafka for event-driven messaging (Saga pattern), securing the platform with Keycloak OAuth2.",
          "Store Visit Scheduler: developed a secure client scheduling system with Node.js and React, implementing granular role-based access control integrated with Azure AD.",
        ],
        it: [
          "Collaborazione con consulenti internazionali (tra cui Thoughtworks) per lo sviluppo di soluzioni cloud enterprise.",
          "Fashion Supply Chain Platform: realizzazione di un'applicazione cloud-native con Java, Spring Boot e React per connettere brand e fornitori; persistenza su PostgreSQL tramite JPA/Hibernate, Kafka per la gestione dell'architettura a eventi, autenticazione e autorizzazione basate su JWT con integrazione Keycloak (OAuth2).",
          "Store Visit Scheduler: sviluppo di un sistema di pianificazione (Node.js, React, MongoDB) con gestione degli accessi tramite Azure AD.",
        ],
      },
    },
    {
      company: "Perigea / Intesa Sanpaolo",
      role: {
        en: "Full Stack Developer",
        it: "Full Stack Developer",
      },
      location: {
        en: "Hybrid — Milan",
        it: "Ibrido — Milano",
      },
      period: {
        en: "Sep 2021 – Apr 2022",
        it: "09/2021 – 04/2022",
      },
      highlights: {
        en: [
          "Developed an enterprise investment analysis platform as part of a 4-person development team.",
          "Contributed to the full development lifecycle — from system design through deployment — using a Java Spring Boot backend, Oracle database and React frontend.",
        ],
        it: [
          "FinTech Solution: sviluppo di una piattaforma di analisi degli investimenti bancari con Java e Spring Boot.",
          "Progettazione e documentazione di API RESTful robuste e scalabili; utilizzo di JPA/Hibernate per la gestione dei database Oracle e MongoDB.",
          "Partecipazione attiva all'intero ciclo di vita del software (analisi, progettazione, sviluppo e deployment).",
        ],
      },
    },
    {
      company: "Forge",
      role: {
        en: "Full Stack Developer",
        it: "Full Stack Developer (tirocinio)",
      },
      location: {
        en: "Varese",
        it: "Varese",
      },
      period: {
        en: "Sep 2019 – Jan 2020",
        it: "09/2019 – 01/2020",
      },
      highlights: {
        en: [
          "Built a web application from the ground up to analytically determine the overlapping areas of geolocated services.",
          "Provided data-driven insights that enhanced the business's understanding of supply and demand, using Node.js for the backend, vanilla JavaScript for the frontend, SQLite for the database and Google APIs for the geolocated services.",
        ],
        it: [
          "Sviluppo di un'applicazione web per l'analisi di servizi geolocalizzati con Node.js e Google API.",
          "Tesi: Coverage App.",
        ],
      },
    },
    {
      company: "IDC",
      role: {
        en: "Security Analyst (internship)",
        it: "Security Analyst (tirocinio)",
      },
      location: {
        en: "London",
        it: "Londra",
      },
      period: {
        en: "Jun 2018 – Sep 2018",
        it: "06/2018 – 09/2018",
      },
      highlights: {
        en: [
          "Conducted market analysis of emerging cybersecurity companies while gaining international experience in London.",
        ],
        it: [
          "Analisi di mercato su aziende emergenti nel settore della cybersecurity.",
        ],
      },
    },
  ],
  education: [
    {
      institution: "Università degli Studi dell'Insubria (Varese)",
      degree: {
        en: "Bachelor's Degree in Computer Science",
        it: "Laurea Triennale in Informatica",
      },
      period: {
        en: "Oct 2016 – Feb 2021",
        it: "10/2016 – 02/2021",
      },
      notes: {
        en: "Thesis: designed and developed Coverage App (created during the Forge internship) to analyze geolocated service data.",
        it: "Tesi: Coverage App — progetto di analisi e sviluppo software.",
      },
    },
  ],
  skills: [
    {
      label: { en: "Languages", it: "Linguaggi" },
      items: ["TypeScript", "Java", "Go", "JavaScript", "Python"],
    },
    {
      label: { en: "Backend", it: "Backend" },
      items: ["Node.js", "Spring Boot", "NestJS", "REST APIs", "Microservices"],
    },
    {
      label: { en: "Frontend", it: "Frontend" },
      items: ["React", "Next.js", "HTML", "CSS", "Tailwind"],
    },
    {
      label: { en: "Cloud & DevOps", it: "Cloud & DevOps" },
      items: [
        "AWS (Lambda, S3, DynamoDB)",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
      ],
    },
    {
      label: { en: "Databases", it: "Database" },
      items: ["PostgreSQL", "MongoDB", "DynamoDB", "Oracle"],
    },
    {
      label: { en: "Security", it: "Sicurezza" },
      items: ["OAuth2", "Keycloak", "Azure AD"],
    },
    {
      label: { en: "Other", it: "Altri strumenti" },
      items: ["Kafka", "Git", "GitHub", "Vercel AI SDK"],
    },
  ],
});
