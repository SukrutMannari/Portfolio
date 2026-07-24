import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const siteUrl = 'https://sukrutmannari.com';

  const staticPages = [
    '',
    '/about',
    '/engineering',
    '/code',
    '/academics',
    '/leadership',
    '/music',
    '/journal',
    '/resume',
  ];

  const projects = await getCollection('projects');
  const journal = await getCollection('journal');

  const projectUrls = projects.map((p) => `/projects/${p.slug}`);
  const journalUrls = journal.map((j) => `/journal/${j.slug}`);

  const allUrls = [...staticPages, ...projectUrls, ...journalUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${siteUrl}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
