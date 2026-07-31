import safemap from "../SafeMap/safemap.png";
import safemapWebp from "../SafeMap/safemap.webp";
import safemapWebpSmall from "../SafeMap/safemap-480w.webp";
import pastinpixels from "./pastinpixels.jpg";
import pastinpixelsWebp from "./pastinpixels.webp";
import pastinpixelsWebpSmall from "./pastinpixels-480w.webp";
import palmotion from "./palmotion.jpg";
import palmotionWebp from "./palmotion.webp";
import palmotionWebpSmall from "./palmotion-480w.webp";
import movieselector from "./movieselector.jpg";
import movieselectorWebp from "./movieselector.webp";
import movieselectorWebpSmall from "./movieselector-480w.webp";
import eagles from "./eagles.jpeg";
import eaglesWebp from "./eagles.webp";
import eaglesWebpSmall from "./eagles-480w.webp";

// Shared by the OtrosProyectos index grid and each ProjectCaseStudy page,
// so image/tags/links only live in one place.
export const projectsMeta = [
  {
    slug: "pastinpixels",
    tags: ["React", "TFG", "DAW"],
    image: pastinpixels,
    imageWebp: pastinpixelsWebp,
    imageWebpSmall: pastinpixelsWebpSmall,
    imageWidth: 982,
    link: "https://pastinpixel.vercel.app/",
    internal: false,
    status: "live",
    caseStudy: true,
  },
  {
    slug: "palmotion",
    tags: ["Python", "Streamlit"],
    image: palmotion,
    imageWebp: palmotionWebp,
    imageWebpSmall: palmotionWebpSmall,
    imageWidth: 730,
    link: "https://palmotion.streamlit.app/",
    internal: false,
    status: "live",
    caseStudy: true,
  },
  {
    slug: "movieselector",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    image: movieselector,
    imageWebp: movieselectorWebp,
    imageWebpSmall: movieselectorWebpSmall,
    imageWidth: 940,
    link: "https://nuguit.github.io/cinema/",
    internal: false,
    status: "live",
    caseStudy: true,
  },
  {
    slug: "eaglesinspain",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    image: eagles,
    imageWebp: eaglesWebp,
    imageWebpSmall: eaglesWebpSmall,
    imageWidth: 1280,
    link: "https://eaglesinspain.free.nf/",
    internal: false,
    status: "live",
    caseStudy: true,
  },
  {
    slug: "safemap",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: safemap,
    imageWebp: safemapWebp,
    imageWebpSmall: safemapWebpSmall,
    imageWidth: 1884,
    link: "/safemap",
    internal: true,
    status: "live",
    caseStudy: false,
  },
];

// Maps a tag string to a dedicated technology page, when one exists.
export const TECH_TAG_PATHS = {
  React: "/react",
  "Node.js": "/nodejs",
  JavaScript: "/javascript",
  PHP: "/php",
  WordPress: "/wordpress",
  MySQL: "/mysql",
  MongoDB: "/mongodb",
  API: "/api",
};
