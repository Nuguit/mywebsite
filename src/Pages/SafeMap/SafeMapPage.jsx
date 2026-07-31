import React from 'react';
import { useTranslation } from 'react-i18next';
import safemap from "../SafeMap/safemap.png";
import safemapWebp from "../SafeMap/safemap.webp";
import safemapWebpSmall from "../SafeMap/safemap-480w.webp";
import Seo from '../../Components/Seo/Seo';
import useBreadcrumbs from '../../lib/useBreadcrumbs';
import { breadcrumbSchema, projectSchema } from '../../lib/schema';
import { SITE_URL, AUTHOR } from '../../lib/siteConfig';

const tags = ["React", "Node.js", "MongoDB", "Express", "JWT", "Leaflet"];

const Field = ({ label, children }) => (
  <div style={{ marginBottom: '28px' }}>
    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: '#00e5a0', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 8px' }}>
      {label}
    </p>
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', color: '#c8d6e5', lineHeight: '1.85', margin: 0 }}>
      {children}
    </p>
  </div>
);

const SafeMapPage = () => {
  const { t } = useTranslation();
  const { crumbs } = useBreadcrumbs('SafeMap');

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 20px 60px", boxSizing: "border-box" }}>
      <Seo
        title="SafeMap"
        description={t('safemap.seoDescription')}
        path="/safemap"
        image={safemap}
        type="article"
        jsonLd={[
          breadcrumbSchema(crumbs),
          projectSchema({
            name: "SafeMap",
            description: t('safemap.seoDescription'),
            url: `${SITE_URL}/safemap`,
            image: `${SITE_URL}${safemap}`,
            tags,
          }),
        ]}
      />

      <div style={{ marginBottom: "44px" }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          color: "#00e5a0",
          letterSpacing: "3px",
          textTransform: "uppercase",
          margin: "0 0 10px",
        }}>
          {'// '}{t('safemap.label')}
        </p>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
          color: "#ffffff",
          margin: "0 0 20px",
          letterSpacing: "4px",
          lineHeight: "1",
        }}>
          SafeMap
        </h1>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              padding: "4px 12px",
              border: "1px solid rgba(0, 229, 160, 0.3)",
              color: "#00e5a0",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ borderLeft: "2px solid rgba(0, 229, 160, 0.2)", paddingLeft: "22px", marginBottom: "44px" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "#8892b0", lineHeight: "1.95", marginBottom: "20px" }}>
          {t('safemap.p1')}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "#ffffff", lineHeight: "1.95", marginBottom: "20px" }}>
          {t('safemap.p2')}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "#8892b0", lineHeight: "1.95" }}>
          {t('safemap.p3a')}{" "}
          <span style={{ color: "#00e5a0", fontFamily: "'Space Mono', monospace", fontSize: "0.95rem" }}>SafeMap</span>
          {t('safemap.p3b')}
        </p>
      </div>

      <Field label={t('projects.caseStudyProblem')}>{t('safemap.problem')}</Field>
      <Field label={t('projects.caseStudyGoals')}>{t('safemap.goals')}</Field>
      <Field label={t('projects.caseStudyArchitecture')}>{t('safemap.architecture')}</Field>
      <Field label={t('projects.caseStudyTech')}>{t('safemap.technologiesList')}</Field>
      <Field label={t('projects.caseStudyChallenges')}>{t('safemap.challenges')}</Field>
      <Field label={t('projects.caseStudySolution')}>{t('safemap.solution')}</Field>
      <Field label={t('projects.caseStudyResult')}>{t('safemap.result')}</Field>

      <a href="https://finalproject-front-seven.vercel.app/" style={{ display: "block", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
        <div
          style={{ border: "1px solid rgba(0, 229, 160, 0.18)", overflow: "hidden", transition: "box-shadow 0.3s ease, border-color 0.3s ease" }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 36px rgba(0, 229, 160, 0.12)"; e.currentTarget.style.borderColor = "rgba(0, 229, 160, 0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(0, 229, 160, 0.18)"; }}
        >
          <div style={{ backgroundColor: "#0d0d0d", padding: "10px 16px", borderBottom: "1px solid rgba(0, 229, 160, 0.1)", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ffbd2e", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#28c940", display: "inline-block" }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#8892b0", marginLeft: "10px" }}>
              finalproject-front-seven.vercel.app
            </span>
          </div>
          <picture>
            <source
              srcSet={`${safemapWebpSmall} 480w, ${safemapWebp} 1884w`}
              sizes="(max-width: 900px) 100vw, 900px"
              type="image/webp"
            />
            <img
              style={{ width: "100%", height: "auto", display: "block" }}
              src={safemap}
              alt={`Captura de pantalla de la aplicación SafeMap, proyecto de ${AUTHOR.name}`}
              width="900"
              height="560"
              loading="lazy"
            />
          </picture>
        </div>
      </a>
    </div>
  );
};

export default SafeMapPage;
