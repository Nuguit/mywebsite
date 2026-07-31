import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../../Components/Seo/Seo';
import useBreadcrumbs from '../../lib/useBreadcrumbs';
import { breadcrumbSchema, contactPointSchema } from '../../lib/schema';
import { AUTHOR } from '../../lib/siteConfig';
import github from '../SobreMi/github.svg';

const ContactCard = ({ href, iconSrc, label, value }) => (
  <a
    href={href}
    target={href.startsWith('mailto:') ? undefined : '_blank'}
    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    style={{ textDecoration: 'none' }}
  >
    <div
      style={{
        border: '1px solid rgba(0, 229, 160, 0.14)',
        backgroundColor: 'rgba(255,255,255,0.02)',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        transition: 'all 0.25s ease',
        height: '100%',
        boxSizing: 'border-box',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0, 229, 160, 0.45)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(0, 229, 160, 0.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 229, 160, 0.14)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          width="28"
          height="28"
          style={{ filter: 'invert(79%) sepia(40%) saturate(600%) hue-rotate(120deg) brightness(1.05)', flexShrink: 0 }}
        />
      )}
      <div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#00e5a0', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 6px' }}>
          {label}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#ffffff', margin: 0, wordBreak: 'break-word' }}>
          {value}
        </p>
      </div>
    </div>
  </a>
);

const Contact = () => {
  const { t } = useTranslation();
  const { crumbs } = useBreadcrumbs(t('contact.h1'));
  const linkedinUrl = AUTHOR.sameAs.find(u => u.includes('linkedin'));
  const githubUrl = AUTHOR.sameAs.find(u => u.includes('github'));

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 20px 60px', boxSizing: 'border-box' }}>
      <Seo
        title={t('contact.seoTitle')}
        description={t('contact.seoDescription')}
        path="/contacto"
        jsonLd={[breadcrumbSchema(crumbs), contactPointSchema()]}
      />

      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#00e5a0', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 10px' }}>
        {'// '}{t('contact.label')}
      </p>
      <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#ffffff', margin: '0 0 20px', letterSpacing: '4px', lineHeight: '1' }}>
        {t('contact.h1')}
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.02rem', color: '#8892b0', margin: '0 0 12px', lineHeight: '1.85' }}>
        {t('contact.intro')}
      </p>
      <p style={{
        fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: '#00e5a0',
        letterSpacing: '1px', margin: '0 0 40px', padding: '10px 14px',
        border: '1px solid rgba(0, 229, 160, 0.25)', display: 'inline-block',
      }}>
        {t('contact.availability')}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <ContactCard
          href={`mailto:${AUTHOR.email}`}
          label={t('contact.emailLabel')}
          value={AUTHOR.email}
        />
        <ContactCard
          href={linkedinUrl}
          label={t('contact.linkedinLabel')}
          value="in/nuria-guevara89"
        />
        <ContactCard
          href={githubUrl}
          iconSrc={github}
          label={t('contact.githubLabel')}
          value="github.com/Nuguit"
        />
      </div>
    </div>
  );
};

export default Contact;
