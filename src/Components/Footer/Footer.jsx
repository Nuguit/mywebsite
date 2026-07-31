import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import github from "../../Pages/SobreMi/github.svg";
import { AUTHOR } from '../../lib/siteConfig';

const Footer = () => {
  const { t } = useTranslation();
  const linkedinUrl = AUTHOR.sameAs.find(u => u.includes('linkedin'));

  return (
    <Flex
      as="footer"
      padding="16px 40px"
      backgroundColor="#0a0a0a"
      borderTop="1px solid rgba(0, 229, 160, 0.12)"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      boxSizing="border-box"
      gap="16px"
    >
      <Flex alignItems="center" gap="24px">
        <a
          href="https://github.com/Nuguit"
          style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
          title="GitHub"
        >
          <img
            src={github}
            alt=""
            aria-hidden="true"
            width="28"
            height="28"
            style={{ filter: "invert(1) brightness(0.6)", transition: "filter 0.2s ease" }}
            onMouseEnter={e => e.currentTarget.style.filter = "invert(79%) sepia(40%) saturate(600%) hue-rotate(120deg) brightness(1.05)"}
            onMouseLeave={e => e.currentTarget.style.filter = "invert(1) brightness(0.6)"}
          />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem",
            color: "#8892b0",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}>
            {t('footer.github')}
          </span>
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          title="LinkedIn"
        >
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem",
            color: "#8892b0",
            letterSpacing: "1px",
            textTransform: "uppercase",
            transition: "color 0.2s ease"
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#00e5a0"}
            onMouseLeave={e => e.currentTarget.style.color = "#8892b0"}
          >
            {t('footer.linkedin')}
          </span>
        </a>
      </Flex>

      <a
        href={`mailto:${AUTHOR.email}`}
        style={{ textDecoration: "none" }}
      >
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          color: "#8892b0",
          letterSpacing: "1px",
          transition: "color 0.2s ease"
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#00e5a0"}
          onMouseLeave={e => e.currentTarget.style.color = "#8892b0"}
        >
          {AUTHOR.email}
        </span>
      </a>
    </Flex>
  );
}

export default Footer;
