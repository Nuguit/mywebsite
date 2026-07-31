import { SITE_URL, AUTHOR, LAST_UPDATED } from "./siteConfig";

export const personSchema = () => ({
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: AUTHOR.name,
  alternateName: AUTHOR.fullName,
  url: SITE_URL,
  image: AUTHOR.image,
  description:
    "Desarrolladora Web Full-Stack especializada en React, Node.js y WordPress. Construye aplicaciones web de principio a fin, desde la arquitectura hasta la interfaz.",
  jobTitle: AUTHOR.jobTitle,
  knowsAbout: AUTHOR.knowsAbout,
  alumniOf: AUTHOR.alumniOf,
  sameAs: AUTHOR.sameAs,
  knowsLanguage: AUTHOR.knowsLanguage,
  email: `mailto:${AUTHOR.email}`,
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Nuria Guevara",
  description:
    "Portfolio y fuente de referencia sobre Nuria Guevara (Nuria Guevara Fuentes) — Desarrolladora Web Full-Stack, periodista y especialista en comunicación empresarial.",
  inLanguage: ["es", "en"],
  publisher: { "@id": `${SITE_URL}/#person` },
});

export const webPageSchema = ({ path, title, description, schemaType = "WebPage" }) => ({
  "@type": schemaType,
  "@id": `${SITE_URL}${path}#webpage`,
  url: `${SITE_URL}${path}`,
  name: title,
  description,
  inLanguage: "es",
  dateModified: LAST_UPDATED,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  // Google's documented pattern for ProfilePage: the page's mainEntity is
  // the Person it profiles — reinforces "this page is the authoritative
  // source about this person" for both Google and AI crawlers.
  ...(schemaType === "ProfilePage" ? { mainEntity: { "@id": `${SITE_URL}/#person` } } : {}),
});

export const breadcrumbSchema = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const faqSchema = (qas) => ({
  "@type": "FAQPage",
  mainEntity: qas.map((qa) => ({
    "@type": "Question",
    name: qa.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: qa.answer,
    },
  })),
});

export const projectSchema = ({ name, description, url, image, tags }) => ({
  "@type": "CreativeWork",
  name,
  description,
  url,
  image,
  keywords: tags?.join(", "),
  author: { "@id": `${SITE_URL}/#person` },
});

export const techSchema = ({ name, description, path }) => ({
  "@type": "DefinedTerm",
  name,
  description,
  url: `${SITE_URL}${path}`,
  inDefinedTermSet: `${SITE_URL}/curriculum`,
});

export const contactPointSchema = () => ({
  "@type": "ContactPoint",
  contactType: "professional",
  email: AUTHOR.email,
  url: `${SITE_URL}/contacto`,
  availableLanguage: AUTHOR.knowsLanguage,
});

export const collectionPageSchema = ({ path, title, description }) => ({
  "@type": "CollectionPage",
  "@id": `${SITE_URL}${path}#collection`,
  url: `${SITE_URL}${path}`,
  name: title,
  description,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  author: { "@id": `${SITE_URL}/#person` },
});
