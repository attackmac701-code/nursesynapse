import type { APIRoute } from "astro";
export const prerender = true;

const SITE = "https://nursesynapse.com";

const urls = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/nclex", changefreq: "weekly", priority: "0.9" },
  { loc: "/guides/ai-tools-for-nurses", changefreq: "monthly", priority: "0.9" },
  { loc: "/reviews/uworld-nursing-review", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews/nursing-com-review", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews/simple-nursing-review", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews/archer-review-nclex", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews/kaplan-nursing-review", changefreq: "monthly", priority: "0.8" },
  { loc: "/about", changefreq: "monthly", priority: "0.5" },
  { loc: "/contact", changefreq: "yearly", priority: "0.3" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/disclaimer", changefreq: "yearly", priority: "0.3" },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u =>
      `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    ).join("\n") +
    `\n</urlset>\n`;
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
