
import { useEffect } from 'react';
import { generateSitemapXml } from '@/utils/sitemapGenerator';

export default function SitemapGenerator() {
  useEffect(() => {
    // Generate sitemap and log it for development purposes
    const sitemap = generateSitemapXml();
    console.log('Generated sitemap:', sitemap);
    
    // In a production environment, you might want to send this to an API endpoint
    // to update the sitemap file dynamically
  }, []);

  return null;
}

export { generateSitemapXml };
