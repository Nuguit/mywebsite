import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAV_LABELS } from "./siteConfig";

// Shared between the visible <Breadcrumbs/> trail and each page's BreadcrumbList
// JSON-LD, so they can never drift apart (Google requires them to match).
const useBreadcrumbs = (current) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "es";
  const homeLabel = lang === "en" ? "Home" : "Inicio";

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = [{ path: "/", name: homeLabel }];

  let acc = "";
  segments.forEach((seg, i) => {
    acc += `/${seg}`;
    const isLast = i === segments.length - 1;
    const known = NAV_LABELS[acc];
    const name = isLast && current ? current : known ? known[lang] : seg;
    crumbs.push({ path: acc, name });
  });

  return { crumbs, lang };
};

export default useBreadcrumbs;
