import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import safemap from "../SafeMap/safemap.png";
import pastinpixels from "./pastinpixels.jpg";
import palmotion from "./palmotion.jpg";
import movieselector from "./movieselector.jpg";
import eagles from "./eagles.jpeg";

const projectsMeta = [
  {
    slug: "pastinpixels",
    tags: ["React", "TFG", "DAW"],
    image: pastinpixels,
    link: "https://pastinpixel.vercel.app/",
    internal: false,
    status: "live",
  },
  {
    slug: "palmotion",
    tags: ["Python", "Streamlit"],
    image: palmotion,
    link: "https://palmotion.streamlit.app/",
    internal: false,
    status: "live",
  },
  {
    slug: "movieselector",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    image: movieselector,
    link: "https://nuguit.github.io/cinema/",
    internal: false,
    status: "live",
  },
  {
    slug: "eaglesinspain",
    tags: ["HTML", "CSS", "JavaScript"],
    image: eagles,
    link: "https://eaglesinspain.free.nf/",
    internal: false,
    status: "live",
  },
  {
    slug: "safemap",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: safemap,
    link: "/safemap",
    internal: true,
    status: "live",
  },
];

const ProjectCard = ({ meta, t }) => {
  const statusColors = { live: "#00e5a0", wip: "#ffbd2e", soon: "#8892b0" };
  const statusLabels = {
    live: t('projects.statusLive'),
    wip: t('projects.statusWip'),
    soon: t('projects.statusSoon'),
  };

  const Wrapper = meta.internal ? Link : "a";
  const wrapperProps = meta.internal
    ? { to: meta.link, style: { textDecoration: "none" } }
    : { href: meta.link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } };

  return (
    <Wrapper {...wrapperProps}>
      <div
        style={{
          border: "1px solid rgba(0, 229, 160, 0.14)",
          backgroundColor: "rgba(255,255,255,0.02)",
          transition: "all 0.25s ease",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0, 229, 160, 0.45)"; e.currentTarget.style.boxShadow = "0 0 36px rgba(0, 229, 160, 0.1)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0, 229, 160, 0.14)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {meta.image && (
          <div style={{ borderBottom: "1px solid rgba(0, 229, 160, 0.1)", overflow: "hidden", height: "200px", backgroundColor: "#0d0d0d" }}>
            <img src={meta.image} alt={t(`projects.${meta.slug}.title`)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}

        <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#ffffff", margin: 0, letterSpacing: "2px" }}>
              {t(`projects.${meta.slug}.title`)}
            </h3>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", padding: "3px 10px",
              border: `1px solid ${statusColors[meta.status]}`, color: statusColors[meta.status],
              letterSpacing: "1px", textTransform: "uppercase", flexShrink: 0,
            }}>
              {statusLabels[meta.status]}
            </span>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#8892b0", lineHeight: "1.7", marginBottom: "20px", flex: 1 }}>
            {t(`projects.${meta.slug}.description`)}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {meta.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", padding: "3px 10px",
                border: "1px solid rgba(0, 229, 160, 0.25)", color: "#00e5a0",
                letterSpacing: "1px", textTransform: "uppercase",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const PlaceholderCard = ({ t }) => (
  <div style={{
    border: "1px dashed rgba(0, 229, 160, 0.14)", backgroundColor: "rgba(255,255,255,0.01)",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "320px", gap: "12px",
  }}>
    <span style={{ fontSize: "2rem", color: "rgba(0, 229, 160, 0.2)" }}>+</span>
    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "rgba(0, 229, 160, 0.3)", letterSpacing: "2px", textTransform: "uppercase" }}>
      {t('projects.placeholder')}
    </span>
  </div>
);

const OtrosProyectos = () => {
  const { t } = useTranslation();

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px 60px", boxSizing: "border-box" }}>
      <div style={{ marginBottom: "48px" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#00e5a0", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 10px" }}>
          {'// '}{t('projects.pageLabel')}
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", color: "#ffffff", margin: "0 0 12px", letterSpacing: "4px", lineHeight: "1" }}>
          {t('projects.pageTitle')}
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#8892b0", margin: 0, lineHeight: "1.7" }}>
          {t('projects.pageDesc')}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
        {projectsMeta.map(meta => (
          <ProjectCard key={meta.slug} meta={meta} t={t} />
        ))}
        <PlaceholderCard t={t} />
      </div>
    </div>
  );
};

export default OtrosProyectos;
