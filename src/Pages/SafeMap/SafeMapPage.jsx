import React from 'react';
import { useTranslation } from 'react-i18next';
import safemap from "../SafeMap/safemap.png";

const tags = ["React", "Node.js", "MongoDB", "Express", "JWT", "Leaflet"];

const SafeMapPage = () => {
  const { t } = useTranslation();

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px 60px", boxSizing: "border-box" }}>

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
          <img style={{ width: "100%", height: "auto", display: "block" }} src={safemap} alt="SafeMap" />
        </div>
      </a>
    </div>
  );
};

export default SafeMapPage;
