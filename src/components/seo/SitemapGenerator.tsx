
import { useEffect } from 'react';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://stellarpropertygroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    // Main pages
    { loc: '/', lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: '/about', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/services', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: '/contact', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/request-proposal', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: '/blog', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: '/faqs', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: '/payments', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: '/forms', lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: '/resident-info', lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },

    // Service areas
    { loc: '/service-areas/chicago', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: '/service-areas/north-suburbs', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },

    // Neighborhoods
    { loc: '/neighborhoods/the-loop', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/river-north', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/gold-coast', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/lincoln-park', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/lakeview', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/wicker-park', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/bucktown', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/old-town', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/west-loop', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/south-loop', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/streeterville', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/hyde-park', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/uptown', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/wrigleyville', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/rogers-park', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/edgewater', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/andersonville', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/ravenswood', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/logan-square', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/neighborhoods/ukrainian-village', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export default function SitemapGenerator() {
  useEffect(() => {
    // Generate sitemap and make it available for download
    const sitemap = generateSitemap();
    console.log('Generated sitemap:', sitemap);
  }, []);

  return null;
}
