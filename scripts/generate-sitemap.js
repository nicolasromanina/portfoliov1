import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://nicolashub.vercel.app${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

const publicDir = join(__dirname, '../public');
fs.writeFileSync(join(publicDir, 'sitemap-index.xml'), sitemap);

console.log('✅ Sitemap generated successfully!');
console.log(`📅 Date: ${currentDate}`);
console.log(`📊 Pages: ${pages.length}`);