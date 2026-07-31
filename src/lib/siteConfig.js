export const SITE_URL = "https://www.nuriaguevarafuentes.com";

// Landscape (981x638, ~1.91:1) — the aspect ratio link-preview cards on
// LinkedIn/WhatsApp/Twitter expect. Kept separate from AUTHOR.image (a
// portrait photo, correct for schema.org Person.image but wrong for OG/Twitter
// card previews) so the two never get conflated again.
export const SITE_OG_IMAGE = {
  url: `${SITE_URL}/miniatura.png`,
  width: 981,
  height: 638,
};

// Bump this when content is meaningfully updated — drives dateModified in
// WebPage JSON-LD and lastmod in sitemap.xml (see scripts/generate-sitemap.js).
export const LAST_UPDATED = "2026-07-30";

export const AUTHOR = {
  name: "Nuria Guevara",
  fullName: "Nuria Guevara Fuentes",
  email: "nuria@nuriaguevarafuentes.com",
  jobTitle: "Desarrolladora Web Full-Stack",
  jobTitleEn: "Full-Stack Web Developer",
  image: `${SITE_URL}/perfil.png`,
  sameAs: [
    "https://github.com/Nuguit",
    "https://www.linkedin.com/in/nuria-guevara89/",
  ],
  knowsAbout: [
    "React", "Node.js", "JavaScript", "MongoDB", "MySQL", "Express",
    "PHP", "WordPress", "HTML", "CSS", "Python", "Laravel",
    "Bootstrap", "Framer Motion", "REST API", "SEO",
    "Comunicación empresarial", "Periodismo",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "IMMUNE Technology Institute",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad Alfonso X El Sabio",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad Isabel I",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Málaga",
    },
  ],
  knowsLanguage: ["es", "en"],
};

export const NAV_LABELS = {
  "/": { es: "Inicio", en: "Home" },
  "/about": { es: "Sobre mí", en: "About" },
  "/curriculum": { es: "Curriculum", en: "Resume" },
  "/otrosproyectos": { es: "Proyectos", en: "Projects" },
  "/safemap": { es: "SafeMap", en: "SafeMap" },
  "/faq": { es: "FAQ", en: "FAQ" },
  "/contacto": { es: "Contacto", en: "Contact" },
  "/blog": { es: "Blog", en: "Blog" },
  "/react": { es: "React", en: "React" },
  "/nodejs": { es: "Node.js", en: "Node.js" },
  "/javascript": { es: "JavaScript", en: "JavaScript" },
  "/php": { es: "PHP", en: "PHP" },
  "/wordpress": { es: "WordPress", en: "WordPress" },
  "/mysql": { es: "MySQL", en: "MySQL" },
  "/mongodb": { es: "MongoDB", en: "MongoDB" },
  "/api": { es: "API / REST", en: "API / REST" },
  "/otrosproyectos/pastinpixels": { es: "Past In Pixels", en: "Past In Pixels" },
  "/otrosproyectos/palmotion": { es: "PalMotion", en: "PalMotion" },
  "/otrosproyectos/movieselector": { es: "Movie Selector", en: "Movie Selector" },
  "/otrosproyectos/eaglesinspain": { es: "Eagles in Spain", en: "Eagles in Spain" },
};
