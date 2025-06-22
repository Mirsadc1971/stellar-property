import { seoConfig } from '@/config/seo';
import routes from '@/config/routes';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemapUrls = (): SitemapUrl[] => {
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate URLs from routes configuration
  const staticUrls: SitemapUrl[] = routes
    .filter(route => !route.path.includes(':') && route.path !== '*') // Exclude dynamic routes and 404
    .map(route => {
      let priority = 0.5;
      let changefreq: SitemapUrl['changefreq'] = 'monthly';

      // Set priorities based on page importance
      if (route.path === '/') {
        priority = 1.0;
        changefreq = 'weekly';
      } else if (route.path.includes('/service-areas/') || route.path === '/services') {
        priority = 0.9;
        changefreq = 'monthly';
      } else if (route.path.includes('/neighborhoods/')) {
        priority = 0.8;
        changefreq = 'monthly';
      } else if (route.path.includes('/communities/')) {
        priority = 0.8;
        changefreq = 'monthly';
      } else if (route.path === '/properties') {
        priority = 0.9;
        changefreq = 'monthly';
      } else if (route.path === '/blog') {
        priority = 0.7;
        changefreq = 'weekly';
      } else if (route.path === '/about' || route.path === '/contact') {
        priority = 0.6;
        changefreq = 'monthly';
      } else if (route.path.includes('/forms/') || route.path === '/forms') {
        priority = 0.4;
        changefreq = 'monthly';
      }

      return {
        loc: route.path,
        lastmod: currentDate,
        changefreq,
        priority
      };
    });

  return staticUrls;
};

export const generateSitemapXml = (): string => {
  const urls = generateSitemapUrls();
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${seoConfig.baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};