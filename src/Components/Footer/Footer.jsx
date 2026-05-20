import React from 'react';
import { Flex } from '@chakra-ui/react';
import github from "../../Pages/SobreMi/github.svg";

const Footer = () => {
  return (
    <Flex
      padding="16px 40px"
      backgroundColor="#0a0a0a"
      borderTop="1px solid rgba(0, 229, 160, 0.12)"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      boxSizing="border-box"
    >
      <a
        href="https://github.com/Nuguit"
        style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
        title="GitHub"
      >
        <img
          src={github}
          alt="GitHub"
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
          GitHub
        </span>
      </a>

      <a
        href="mailto:nuria@nuriaguevarafuentes.com"
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
          nuria@nuriaguevarafuentes.com
        </span>
      </a>
    </Flex>
  );
}

export default Footer;
