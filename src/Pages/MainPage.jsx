import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../Pages/mainPage.css"
import Seo from '../Components/Seo/Seo';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={null}
        description={t('home.seoDescription')}
        path="/"
      />
      <div className="main-container">
        <div className="content-container">

          <motion.p
            className="hero-label"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('home.label')}
          </motion.p>

          <motion.h1
            className="name-heading cursor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Nuria <span className="accent">Guevara</span>
          </motion.h1>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {t('home.desc1')}<br />
            {t('home.desc2')}
          </motion.p>

          <motion.div
            className="quote"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            {t('home.quote')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            <Link to="/about" className="cta-button">
              {t('home.cta')}
            </Link>
          </motion.div>

        </div>
      </div>

      <section className="home-intro">
        <p className="home-intro-label">{'// '}{t('home.introLabel')}</p>
        <p className="home-intro-body">{t('home.introBody')}</p>
        <Link to="/about" className="home-intro-link">{t('home.introCta')}</Link>
      </section>
    </>
  );
};

export default MainPage;
