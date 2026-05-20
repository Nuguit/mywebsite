import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import html from "../SobreMi/html.svg";
import css from "../SobreMi/css.svg";
import javascript from "../SobreMi/javascript.svg";
import mongodb from "../SobreMi/mongodb.svg";
import react from "../SobreMi/react.svg";
import mysql from "../SobreMi/mysql.svg";
import nodejs from "../SobreMi/nodejs.svg";
import bootstrap from "../SobreMi/bootstrap.svg";
import framermotion from "../SobreMi/framermotion.svg";
import python from "../SobreMi/python.svg";
import postman from "../SobreMi/postman.svg";
import github from "../SobreMi/github.svg";
import laravel from "../SobreMi/laravel.png";
import mailchimp from "../SobreMi/mailchimp.png";
import photoshop from "../SobreMi/photoshop.png";
import picmonkey from "../SobreMi/picmonkey.png";
import office from "../SobreMi/office.png";
import adobe from "../SobreMi/adobe.png";
import canva from "../SobreMi/canva.png";
import semrush from "../SobreMi/semrush.png";
import metricool from "../SobreMi/metricool.png";
import analytics from "../SobreMi/analytics.png";
import adwords from "../SobreMi/adwords.png";
import hubspot from "../SobreMi/hubspot.svg";
import filmora from "../SobreMi/filmora.png";
import imovie from "../SobreMi/imovie.png";
import premiere from "../SobreMi/premiere.png";
import quark from "../SobreMi/quark.png";

const cardBase = {
  display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
  padding: "20px 16px", border: "1px solid rgba(0, 229, 160, 0.12)",
  backgroundColor: "rgba(255, 255, 255, 0.02)", minWidth: "88px",
  cursor: "default", transition: "all 0.25s ease",
};

const SkillCard = ({ src, name }) => (
  <div
    style={cardBase}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0, 229, 160, 0.45)"; e.currentTarget.style.backgroundColor = "rgba(0, 229, 160, 0.06)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(0, 229, 160, 0.1)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0, 229, 160, 0.12)"; e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)"; e.currentTarget.style.boxShadow = "none"; }}
  >
    <img src={src} alt={name} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "#8892b0", letterSpacing: "1px", textTransform: "uppercase", textAlign: "center" }}>
      {name}
    </span>
  </div>
);

const SectionHeader = ({ label, title }) => (
  <div style={{ marginTop: "60px", marginBottom: "28px" }}>
    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#00e5a0", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 8px" }}>
      {'// '}{label}
    </p>
    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.4rem", color: "#ffffff", margin: 0, letterSpacing: "2px" }}>
      {title}
    </h3>
  </div>
);

const CvEntry = ({ entry, index, t }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div style={{ borderLeft: "1px solid rgba(0, 229, 160, 0.18)", marginBottom: "4px" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: "none", border: "none", padding: "14px 20px",
          cursor: "pointer", display: "flex", alignItems: "center", gap: "14px",
          textAlign: "left", transition: "background 0.2s ease",
          backgroundColor: open ? "rgba(0, 229, 160, 0.04)" : "transparent",
        }}
        onMouseEnter={e => !open && (e.currentTarget.style.backgroundColor = "rgba(0, 229, 160, 0.02)")}
        onMouseLeave={e => !open && (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#00e5a0", display: "inline-block", flexShrink: 0 }}
        >
          ▶
        </motion.span>

        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "#8892b0", flexShrink: 0, minWidth: "120px" }}>
          {entry.period}
        </span>

        {entry.highlight && (
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", padding: "2px 8px",
            border: "1px solid #00e5a0", color: "#00e5a0", letterSpacing: "1px",
            textTransform: "uppercase", flexShrink: 0, animation: "pulse 2s ease-in-out infinite",
          }}>
            {t('curriculum.badgeCurrent')}
          </span>
        )}

        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.82rem", color: open ? "#00e5a0" : "#ffffff", transition: "color 0.2s ease" }}>
          {entry.role}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 20px 20px 48px", borderTop: "1px solid rgba(0, 229, 160, 0.08)" }}>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#8892b0", margin: "14px 0 16px", letterSpacing: "0.5px" }}>
                <span style={{ color: "#00e5a0" }}>{t('curriculum.cvCompany')}</span>
                {': "'}
                <span style={{ color: "#ffffff" }}>{entry.company}</span>
                {'" · '}
                <span style={{ color: "#00e5a0" }}>{t('curriculum.cvLocation')}</span>
                {': "'}
                <span style={{ color: "#ffffff" }}>{entry.location}</span>
                {'"'}
              </p>

              <div style={{ marginBottom: "16px" }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#00e5a0", margin: "0 0 8px" }}>
                  {t('curriculum.cvDesc')}: [
                </p>
                {entry.items.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#c8d6e5", margin: "0 0 6px", paddingLeft: "20px", lineHeight: "1.6" }}
                  >
                    <span style={{ color: "rgba(0, 229, 160, 0.4)", marginRight: "8px" }}>—</span>
                    {item}{i < entry.items.length - 1 ? "," : ""}
                  </motion.p>
                ))}
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#00e5a0", margin: "8px 0 0" }}>]</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                {entry.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", padding: "3px 10px", border: "1px solid rgba(0, 229, 160, 0.25)", color: "#00e5a0", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Curriculum = () => {
  const { t } = useTranslation();
  const cvData = t('curriculum.entries', { returnObjects: true });

  return (
    <div style={{ padding: "60px 20px 60px", maxWidth: "1100px", margin: "0 auto", boxSizing: "border-box" }}>

      <SectionHeader label={t('curriculum.expLabel')} title={t('curriculum.expTitle')} />
      <div style={{ fontFamily: "'Space Mono', monospace" }}>
        <p style={{ fontSize: "0.7rem", color: "rgba(0, 229, 160, 0.4)", marginBottom: "16px" }}>
          {'const experiencia = {'}
        </p>
        {cvData.map((entry, i) => (
          <CvEntry key={entry.id} entry={entry} index={i} t={t} />
        ))}
        <p style={{ fontSize: "0.7rem", color: "rgba(0, 229, 160, 0.4)", marginTop: "8px" }}>
          {'}'}
        </p>
      </div>

      <SectionHeader label={t('curriculum.stackLabel')} title={t('curriculum.stackTitle')} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillCard src={html} name="HTML" />
        <SkillCard src={css} name="CSS" />
        <SkillCard src={javascript} name="JavaScript" />
        <SkillCard src={mongodb} name="MongoDB" />
        <SkillCard src={react} name="React" />
        <SkillCard src={mysql} name="MySQL" />
        <SkillCard src={nodejs} name="Node.js" />
        <SkillCard src={bootstrap} name="Bootstrap" />
        <SkillCard src={framermotion} name="Framer Motion" />
        <SkillCard src={python} name="Python" />
        <SkillCard src={postman} name="Postman" />
        <SkillCard src={github} name="GitHub" />
        <SkillCard src="https://goncy.netlify.app/static/d52f717f79aca102bdd13af15e455879/69755/banner.jpg" name="Chakra UI" />
        <SkillCard src={laravel} name="Laravel" />
      </div>

      <SectionHeader label={t('curriculum.toolsLabel')} title={t('curriculum.toolsTitle')} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillCard src={mailchimp} name="Mailchimp" />
        <SkillCard src={picmonkey} name="PicMonkey" />
        <SkillCard src={photoshop} name="Photoshop" />
        <SkillCard src={office} name="Office" />
        <SkillCard src={adobe} name="Adobe" />
        <SkillCard src={canva} name="Canva" />
        <SkillCard src={semrush} name="SEMrush" />
        <SkillCard src={metricool} name="Metricool" />
        <SkillCard src={analytics} name="Analytics" />
        <SkillCard src={adwords} name="AdWords" />
        <SkillCard src={hubspot} name="HubSpot" />
        <SkillCard src={filmora} name="Filmora" />
        <SkillCard src={imovie} name="iMovie" />
        <SkillCard src={premiere} name="Premiere" />
        <SkillCard src={quark} name="Quark" />
      </div>

    </div>
  );
};

export default Curriculum;
