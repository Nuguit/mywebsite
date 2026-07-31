import React from 'react';
import { useTranslation } from 'react-i18next';
import SwitchImage from './SwitchImage';
import Seo from '../../Components/Seo/Seo';
import useBreadcrumbs from '../../lib/useBreadcrumbs';
import { breadcrumbSchema } from '../../lib/schema';

const corner = (pos) => ({
  position: 'absolute',
  width: 22,
  height: 22,
  zIndex: 2,
  ...pos,
});

const ProfileFrame = () => (
  <div style={{ position: 'relative', display: 'inline-block', transform: 'rotate(-1.5deg)' }}>
    <span style={{ ...corner({ top: -8, left: -8 }), borderTop: '2px solid #00e5a0', borderLeft: '2px solid #00e5a0' }} />
    <span style={{ ...corner({ top: -8, right: -8 }), borderTop: '2px solid #00e5a0', borderRight: '2px solid #00e5a0' }} />
    <span style={{ ...corner({ bottom: -8, left: -8 }), borderBottom: '2px solid #00e5a0', borderLeft: '2px solid #00e5a0' }} />
    <span style={{ ...corner({ bottom: -8, right: -8 }), borderBottom: '2px solid #00e5a0', borderRight: '2px solid #00e5a0' }} />

    <div style={{
      position: 'absolute', left: 0, right: 0, height: 2,
      background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.7), transparent)',
      animation: 'scan 3s linear infinite',
      zIndex: 3, pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)',
      pointerEvents: 'none', zIndex: 1,
    }} />
    <div style={{
      position: 'absolute', inset: -1,
      border: '1px solid rgba(0,229,160,0.25)',
      boxShadow: '0 0 32px rgba(0,229,160,0.12)',
      pointerEvents: 'none', zIndex: 2,
    }} />
    <SwitchImage />
  </div>
);

const SectionTitle = ({ children, id }) => (
  <h2 id={id} style={{
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "1.7rem",
    color: "#ffffff",
    letterSpacing: "1.5px",
    margin: "0 0 16px",
  }}>
    {children}
  </h2>
);

const SectionParagraph = ({ children, muted }) => (
  <p style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.02rem",
    color: muted ? "#8892b0" : "#c8d6e5",
    lineHeight: "1.9",
    marginBottom: "18px",
  }}>
    {children}
  </p>
);

const SobreMi = () => {
  const { t } = useTranslation();
  const { crumbs } = useBreadcrumbs(t('about.h1'));
  const sections = t('about.sections', { returnObjects: true }) || [];

  return (
    <div style={{
      padding: "20px 20px 60px",
      boxSizing: "border-box",
      width: "100%",
      maxWidth: "1000px",
      margin: "0 auto",
    }}>
      <Seo
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
        path="/about"
        type="profile"
        schemaType="ProfilePage"
        jsonLd={[breadcrumbSchema(crumbs)]}
      />

      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.7rem",
        color: "#00e5a0",
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "8px",
      }}>
        {'// '}{t('about.label')}
      </p>
      <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(2.6rem, 6vw, 4rem)",
        color: "#ffffff",
        margin: "0 0 24px",
        letterSpacing: "3px",
        lineHeight: "1",
      }}>
        {t('about.h1')}
      </h1>

      <div style={{
        borderLeft: "2px solid rgba(0, 229, 160, 0.3)",
        paddingLeft: "22px",
        marginBottom: "56px",
      }}>
        <p style={{
          fontFamily: "'La Belle Aurore', cursive",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          color: "#ffffff",
          margin: "0 0 10px",
          fontStyle: "italic",
          lineHeight: "1.4",
        }}>
          {t('about.quote')}
        </p>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.72rem",
          color: "#8892b0",
          margin: 0,
          letterSpacing: "1px",
        }}>
          {t('about.author')}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "48px", marginBottom: "56px" }}>
        <ProfileFrame />

        <div style={{ maxWidth: "760px", width: "100%" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            color: "#8892b0",
            lineHeight: "1.95",
            marginBottom: "24px",
          }}>
            {t('about.p1')}
          </p>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            color: "#ffffff",
            lineHeight: "1.95",
            marginBottom: "24px",
          }}>
            {t('about.p2')}
          </p>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            color: "#8892b0",
            lineHeight: "1.95",
          }}>
            {t('about.p3a')}{" "}
            <span style={{ color: "#00e5a0", fontFamily: "'Space Mono', monospace", fontSize: "0.95rem" }}>
              {t('about.p3highlight')}
            </span>
            {t('about.p3b')}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <SectionParagraph>{t('about.intro')}</SectionParagraph>

        {sections.map((section, i) => (
          <section key={i} style={{ marginTop: "36px" }} aria-labelledby={`about-section-${i}`}>
            <SectionTitle id={`about-section-${i}`}>{section.title}</SectionTitle>
            {section.body.map((paragraph, j) => (
              <SectionParagraph key={j} muted={j % 2 === 0}>{paragraph}</SectionParagraph>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default SobreMi;
