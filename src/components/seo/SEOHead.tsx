
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '@/config/seo';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  keywords,
  noindex = false,
  structuredData,
  breadcrumbs
}: SEOHeadProps) {
  const fullTitle = title.includes(seoConfig.siteName) 
    ? title 
    : `${title} | ${seoConfig.siteName}`;

  const fullCanonical = canonical ? `${seoConfig.baseUrl}${canonical}` : undefined;
  
  // Use absolute URL for OG image
  const absoluteOgImage = ogImage?.startsWith('http') 
    ? ogImage 
    : `${seoConfig.baseUrl}${ogImage || seoConfig.images.defaultOg}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical || `${seoConfig.baseUrl}/`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${seoConfig.siteName} - ${title}`} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical || `${seoConfig.baseUrl}/`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteOgImage} />
      <meta property="twitter:image:alt" content={`${seoConfig.siteName} - ${title}`} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content={`${seoConfig.business.geo.latitude};${seoConfig.business.geo.longitude}`} />
      <meta name="ICBM" content={`${seoConfig.business.geo.latitude}, ${seoConfig.business.geo.longitude}`} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Breadcrumb Structured Data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": `${seoConfig.baseUrl}${crumb.url}`
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}
