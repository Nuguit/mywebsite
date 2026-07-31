import { Flex, Text } from "@chakra-ui/layout"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import NavigationLink from "../NavigationLink/NavigationLink"

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const NAVIGATION_LINK = [
    { link: "/about", text: t('nav.about') },
    { link: "/curriculum", text: t('nav.curriculum') },
    { link: "/otrosproyectos", text: t('nav.projects') },
    { link: "/faq", text: t('nav.faq') },
    { link: "/contacto", text: t('nav.contact') },
  ]

  const toggleLang = (lang) => i18n.changeLanguage(lang)
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es'

  return (
    <Flex
      as="header"
      direction={{ base: "column", md: "row" }}
      padding={{ base: "16px 24px", md: "0 60px" }}
      backgroundColor={"#0a0a0a"}
      alignItems="center"
      justifyContent="space-between"
      height={{ base: "auto", md: "64px" }}
      borderBottom="1px solid rgba(0, 229, 160, 0.12)"
      gap={{ base: "16px", md: "0" }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Text
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="26px"
          color="#ffffff"
          letterSpacing="3px"
          lineHeight="1"
        >
          NG<span style={{ color: "#00e5a0" }}>.</span>
        </Text>
      </Link>

      <Flex as="nav" aria-label="Principal" alignItems="center" gap={"32px"}>
        {NAVIGATION_LINK.map(({ link, text }) => {
          const isActiveLink = location.pathname === link
          return (
            <NavigationLink
              to={link}
              key={link}
              aria-current={isActiveLink ? "page" : undefined}
              style={{ textDecoration: isActiveLink ? "underline" : "none" }}
            >
              <Text>{text}</Text>
            </NavigationLink>
          )
        })}

        <Flex
          role="group"
          aria-label={t('nav.languageSwitcher')}
          alignItems="center"
          gap="2px"
          borderLeft="1px solid rgba(255,255,255,0.08)"
          paddingLeft="24px"
        >
          {['es', 'en'].map((lang, i) => (
            <span key={lang}>
              <button
                onClick={() => toggleLang(lang)}
                aria-pressed={currentLang === lang}
                aria-label={lang === 'es' ? 'Español' : 'English'}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: currentLang === lang ? '#00e5a0' : '#8892b0',
                  padding: '2px 4px',
                  transition: 'color 0.2s ease',
                }}
              >
                {lang}
              </button>
              {i === 0 && (
                <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px' }} aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
