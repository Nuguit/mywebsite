const fs = require("fs");
const path = require("path");

// siteConfig.js is an ES module (used by the React app via webpack/babel),
// so it can't be require()'d directly from this plain Node script — read
// LAST_UPDATED out of the source text instead of duplicating the constant.
const siteConfigSrc = fs.readFileSync(
  path.join(__dirname, "..", "src", "lib", "siteConfig.js"),
  "utf8"
);
const match = siteConfigSrc.match(/LAST_UPDATED\s*=\s*"([^"]+)"/);
if (!match) {
  throw new Error("Could not find LAST_UPDATED in src/lib/siteConfig.js");
}
const lastmod = match[1];

const SITE_URL = "https://www.nuriaguevarafuentes.com";

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/curriculum", priority: "0.8", changefreq: "monthly" },
  { path: "/otrosproyectos", priority: "0.8", changefreq: "monthly" },
  { path: "/otrosproyectos/pastinpixels", priority: "0.6", changefreq: "yearly" },
  { path: "/otrosproyectos/palmotion", priority: "0.6", changefreq: "yearly" },
  { path: "/otrosproyectos/movieselector", priority: "0.6", changefreq: "yearly" },
  { path: "/otrosproyectos/eaglesinspain", priority: "0.6", changefreq: "yearly" },
  { path: "/safemap", priority: "0.7", changefreq: "yearly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/contacto", priority: "0.5", changefreq: "yearly" },
  // /blog is intentionally excluded: it's a "coming soon" stub with no real
  // content yet (see noindex on Blog.jsx) — listing a thin page in the
  // sitemap signals it as worth crawling/indexing, which it isn't until it
  // has actual posts. Add it back once there's real content.
  { path: "/react", priority: "0.6", changefreq: "monthly" },
  { path: "/nodejs", priority: "0.6", changefreq: "monthly" },
  { path: "/javascript", priority: "0.6", changefreq: "monthly" },
  { path: "/php", priority: "0.6", changefreq: "monthly" },
  { path: "/wordpress", priority: "0.6", changefreq: "monthly" },
  { path: "/mysql", priority: "0.6", changefreq: "monthly" },
  { path: "/mongodb", priority: "0.6", changefreq: "monthly" },
  { path: "/api", priority: "0.6", changefreq: "monthly" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), xml);
console.log(`sitemap.xml regenerated with lastmod=${lastmod} (${routes.length} URLs)`);
