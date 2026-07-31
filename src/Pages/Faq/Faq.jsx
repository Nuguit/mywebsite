import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Seo from '../../Components/Seo/Seo';
import useBreadcrumbs from '../../lib/useBreadcrumbs';
import { breadcrumbSchema, faqSchema } from '../../lib/schema';

const FaqItem = ({ item, index }) => {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div style={{ borderLeft: '1px solid rgba(0, 229, 160, 0.18)', marginBottom: '4px' }}>
      <h2 style={{ margin: 0 }}>
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%', background: 'none', border: 'none', padding: '16px 20px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px',
            textAlign: 'left', transition: 'background 0.2s ease',
            backgroundColor: open ? 'rgba(0, 229, 160, 0.04)' : 'transparent',
          }}
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#00e5a0', display: 'inline-block', flexShrink: 0 }}
            aria-hidden="true"
          >
            ▶
          </motion.span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: open ? '#00e5a0' : '#ffffff', transition: 'color 0.2s ease' }}>
            {item.question}
          </span>
        </button>
      </h2>

      {/* Always mounted (not conditionally rendered) so answers stay in the
          crawlable HTML even while visually collapsed — see the equivalent
          comment on CvEntry in Curriculum.jsx. */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: '#8892b0',
          lineHeight: '1.8', margin: 0, padding: '0 20px 20px 48px',
        }}>
          {item.answer}
        </p>
      </motion.div>
    </div>
  );
};

const Faq = () => {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true }) || [];
  const { crumbs } = useBreadcrumbs(t('faq.h1'));

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 20px 60px', boxSizing: 'border-box' }}>
      <Seo
        title={t('faq.seoTitle')}
        description={t('faq.seoDescription')}
        path="/faq"
        jsonLd={[breadcrumbSchema(crumbs), faqSchema(items)]}
      />

      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#00e5a0', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 10px' }}>
        {'// '}{t('faq.label')}
      </p>
      <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#ffffff', margin: '0 0 16px', letterSpacing: '4px', lineHeight: '1' }}>
        {t('faq.h1')}
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#8892b0', margin: '0 0 40px', lineHeight: '1.7', maxWidth: '640px' }}>
        {t('faq.intro')}
      </p>

      <div>
        {items.map((item, i) => (
          <FaqItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
