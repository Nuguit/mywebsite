import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Seo from '../../Components/Seo/Seo';
import useBreadcrumbs from '../../lib/useBreadcrumbs';
import { breadcrumbSchema, techSchema } from '../../lib/schema';

const Tag = ({ children }) => (
  <span style={{
    fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', padding: '3px 10px',
    border: '1px solid rgba(0, 229, 160, 0.25)', color: '#00e5a0',
    letterSpacing: '1px', textTransform: 'uppercase',
  }}>
    {children}
  </span>
);

const Block = ({ title, children }) => (
  <div style={{ marginTop: '40px' }}>
    <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#ffffff', letterSpacing: '1.5px', margin: '0 0 14px' }}>
      {title}
    </h2>
    {children}
  </div>
);

const TechPage = ({ slug, path }) => {
  const { t } = useTranslation();
  const tech = t(`technologies.${slug}`, { returnObjects: true });
  const { crumbs } = useBreadcrumbs(tech.name);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 20px 60px', boxSizing: 'border-box' }}>
      <Seo
        title={tech.seoTitle}
        description={tech.seoDescription}
        path={path}
        jsonLd={[breadcrumbSchema(crumbs), techSchema({ name: tech.name, description: tech.intro, path })]}
      />

      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#00e5a0', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 10px' }}>
        {'// '}{t('technologies.hubLabel')}
      </p>
      <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.6rem, 6vw, 4rem)', color: '#ffffff', margin: '0 0 16px', letterSpacing: '3px', lineHeight: '1' }}>
        {tech.name}
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', color: '#8892b0', margin: 0, lineHeight: '1.85' }}>
        {tech.intro}
      </p>

      <Block title={t('technologies.experienceTitle')}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', color: '#c8d6e5', lineHeight: '1.85', margin: 0 }}>
          {tech.experience}
        </p>
      </Block>

      {tech.projects && tech.projects.length > 0 && (
        <Block title={t('technologies.projectsTitle')}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {tech.projects.map(slugName => {
              const to = slugName === 'safemap' ? '/safemap' : `/otrosproyectos/${slugName}`;
              return (
                <Link key={slugName} to={to} style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', padding: '8px 14px',
                    border: '1px solid rgba(0, 229, 160, 0.3)', color: '#00e5a0', display: 'inline-block',
                  }}>
                    {t(`projects.${slugName}.title`)} →
                  </span>
                </Link>
              );
            })}
          </div>
        </Block>
      )}

      <Block title={t('technologies.practicesTitle')}>
        <ul style={{ margin: 0, padding: '0 0 0 20px', fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: '#8892b0', lineHeight: '1.9' }}>
          {tech.practices.map((practice, i) => <li key={i}>{practice}</li>)}
        </ul>
      </Block>

      {tech.tools && tech.tools.length > 0 && (
        <Block title={t('technologies.toolsTitle')}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tech.tools.map(tool => <Tag key={tool}>{tool}</Tag>)}
          </div>
        </Block>
      )}
    </div>
  );
};

export default TechPage;
