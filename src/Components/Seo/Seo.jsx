import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { SITE_URL, SITE_OG_IMAGE } from "../../lib/siteConfig";
import { personSchema, websiteSchema, webPageSchema } from "../../lib/schema";

const Seo = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  schemaType = "WebPage",
  jsonLd = [],
  includeBase = true,
  noindex = false,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "es";
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} · Nuria Guevara` : "Nuria Guevara";

  // Only the sitewide default OG image has known, correct (landscape)
  // dimensions — a page-supplied image (e.g. a project screenshot) may be
  // any aspect ratio, so we don't claim width/height for those.
  const usingDefaultImage = !image;
  const absoluteImage = usingDefaultImage
    ? SITE_OG_IMAGE.url
    : image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  const graph = [
    ...(includeBase ? [personSchema(), websiteSchema()] : []),
    webPageSchema({ path, title: fullTitle, description, schemaType }),
    ...jsonLd,
  ];

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,follow" />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      {usingDefaultImage && (
        <>
          <meta property="og:image:width" content={String(SITE_OG_IMAGE.width)} />
          <meta property="og:image:height" content={String(SITE_OG_IMAGE.height)} />
        </>
      )}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Nuria Guevara" />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "es_ES"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        })}
      </script>
    </Helmet>
  );
};

export default Seo;
