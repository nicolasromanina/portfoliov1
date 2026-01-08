// api/sitemap.js - Version améliorée
export default function handler(req, res) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Dates spécifiques pour chaque page
  const pages = [
    { 
      url: '/', 
      lastmod: '2026-01-08', // Date de dernière mise à jour importante
      changefreq: 'weekly', 
      priority: '1.0' 
    },
    { 
      url: '/privacy', 
      lastmod: '2026-01-01', // Date de création
      changefreq: 'yearly', 
      priority: '0.3' 
    },
    { 
      url: '/terms', 
      lastmod: '2026-01-01', // Date de création
      changefreq: 'yearly', 
      priority: '0.3' 
    },
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://nicolashub.vercel.app${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.end(sitemap);
}