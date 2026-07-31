import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../../Components/Seo/Seo';
import useBreadcrumbs from '../../lib/useBreadcrumbs';
import { breadcrumbSchema, projectSchema } from '../../lib/schema';
import { AUTHOR, SITE_URL } from '../../lib/siteConfig';
import { projectsMeta } from './projectsData';

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

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const meta = projectsMeta.find(p => p.slug === slug);

  const title = meta ? t(`projects.${slug}.title`) : slug;
  const { crumbs } = useBreadcrumbs(title);

  if (!meta) {
    return <Navigate to="/otrosproyectos" replace />;
  }

  const description = t(`projects.${slug}.description`);
  const seoDescription = t(`projects.${slug}.seoDescription`, { defaultValue: description });

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '20px 20px 60px', boxSizing: 'border-box' }}>
      <Seo
        title={title}
        description={seoDescription}
        path={`/otrosproyectos/${slug}`}
        image={meta.image}
        type="article"
        jsonLd={[
          breadcrumbSchema(crumbs),
          projectSchema({
            name: title,
            description: seoDescription,
            url: `${SITE_URL}/otrosproyectos/${slug}`,
            image: `${SITE_URL}${meta.image}`,
            tags: meta.tags,
          }),
        ]}
      />

      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#00e5a0', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 10px' }}>
        {'// '}{t('projects.pageLabel')}
      </p>
      <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.6rem, 6vw, 4rem)', color: '#ffffff', margin: '0 0 16px', letterSpacing: '3px', lineHeight: '1' }}>
        {title}
      </h1>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {meta.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', padding: '4px 12px',
            border: '1px solid rgba(0, 229, 160, 0.3)', color: '#00e5a0',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {meta.image && (
        <picture>
          {meta.imageWebp && (
            <source
              srcSet={`${meta.imageWebpSmall} 480w, ${meta.imageWebp} ${meta.imageWidth}w`}
              sizes="(max-width: 820px) 100vw, 820px"
              type="image/webp"
            />
          )}
          <img
            src={meta.image}
            alt={`Captura de pantalla del proyecto ${title}, de ${AUTHOR.name}`}
            width="820"
            height="410"
            loading="eager"
            style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid rgba(0, 229, 160, 0.18)', marginBottom: '36px' }}
          />
        </picture>
      )}

      <Field label={t('projects.caseStudyProblem')}>
        {t(`projects.${slug}.problem`)}
      </Field>
      <Field label={t('projects.caseStudyGoals')}>
        {t(`projects.${slug}.goals`)}
      </Field>
      <Field label={t('projects.caseStudyArchitecture')}>
        {t(`projects.${slug}.architecture`)}
      </Field>
      <Field label={t('projects.caseStudyTech')}>
        {t(`projects.${slug}.technologies`)}
      </Field>
      <Field label={t('projects.caseStudyChallenges')}>
        {t(`projects.${slug}.challenges`)}
      </Field>
      <Field label={t('projects.caseStudySolution')}>
        {t(`projects.${slug}.solution`)}
      </Field>
      <Field label={t('projects.caseStudyResult')}>
        {t(`projects.${slug}.result`)}
      </Field>

      {!meta.internal && (
        <a
          href={meta.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block', marginTop: '12px', textDecoration: 'none',
            fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', padding: '12px 20px',
            border: '1px solid #00e5a0', color: '#00e5a0', letterSpacing: '1px', textTransform: 'uppercase',
          }}
        >
          {t('projects.caseStudyVisit')} →
        </a>
      )}
    </div>
  );
};

export default ProjectCaseStudy;
