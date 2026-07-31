import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../../Components/Seo/Seo';
import useBreadcrumbs from '../../lib/useBreadcrumbs';
import { breadcrumbSchema, collectionPageSchema } from '../../lib/schema';

const CategoryCard = ({ name, comingSoon }) => (
  <div style={{
    border: "1px dashed rgba(0, 229, 160, 0.18)", backgroundColor: "rgba(255,255,255,0.01)",
    padding: "24px", display: "flex", flexDirection: "column", gap: "10px",
  }}>
    <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#ffffff", margin: 0, letterSpacing: "1.5px" }}>
      {name}
    </h2>
    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "rgba(0, 229, 160, 0.5)", letterSpacing: "2px", textTransform: "uppercase" }}>
      {comingSoon}
    </span>
  </div>
);

const Blog = () => {
  const { t } = useTranslation();
  const categories = t('blog.categories', { returnObjects: true }) || [];
  const { crumbs } = useBreadcrumbs(t('blog.h1'));

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px 20px 60px", boxSizing: "border-box" }}>
      <Seo
        title={t('blog.seoTitle')}
        description={t('blog.seoDescription')}
        path="/blog"
        jsonLd={[breadcrumbSchema(crumbs), collectionPageSchema({ path: '/blog', title: t('blog.seoTitle'), description: t('blog.seoDescription') })]}
      />

      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#00e5a0", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 10px" }}>
        {'// '}{t('blog.label')}
      </p>
      <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", color: "#ffffff", margin: "0 0 12px", letterSpacing: "4px", lineHeight: "1" }}>
        {t('blog.h1')}
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#8892b0", margin: "0 0 40px", lineHeight: "1.7", maxWidth: "640px" }}>
        {t('blog.intro')}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
        {categories.map(cat => (
          <CategoryCard key={cat} name={cat} comingSoon={t('blog.comingSoon')} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
