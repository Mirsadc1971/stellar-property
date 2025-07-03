import { Helmet } from 'react-helmet-async';
import { seoConfig } from '@/config/seo';
import { generateOGImageUrl } from '@/utils/ogImageGenerator';

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
  neighborhoodKey?: string;
  serviceType?: 'neighborhood' | 'service' | 'general';
}

// Utility function to optimize title length
const optimizeTitle = (title: string, maxLength: number = 60): string => {
  if (title.length <= maxLength) return title;
  
  // Try to truncate at word boundary
  const truncated = title.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated.substring(0, maxLength - 3) + '...';
};

// Utility function to ensure absolute canonical URLs
const getAbsoluteCanonicalUrl = (canonical?: string): string => {
  if (!canonical) return seoConfig.baseUrl;
  
  if (canonical.startsWith('http')) return canonical;
  
  const cleanPath = canonical.startsWith('/') ? canonical : `/${canonical}`;
  return `${seoConfig.baseUrl}${cleanPath}`;
};

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  keywords,
  noindex = false,
  structuredData,
  breadcrumbs,
  neighborhoodKey,
  serviceType = 'general'
}: SEOHeadProps) {
  // Optimize title for character limit
  const optimizedTitle = optimizeTitle(title, 60);
  
  // Ensure title includes site name if not already present
  const fullTitle = optimizedTitle.includes(seoConfig.siteName) 
    ? optimizedTitle 
    : `${optimizedTitle} | ${seoConfig.siteName}`;

  // Generate absolute canonical URL
  const absoluteCanonical = getAbsoluteCanonicalUrl(canonical);
  
  // Generate appropriate OG image
  let absoluteOgImage: string;
  if (ogImage) {
    absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${seoConfig.baseUrl}${ogImage}`;
  } else if (neighborhoodKey && serviceType === 'neighborhood') {
    absoluteOgImage = generateOGImageUrl({
      title: optimizedTitle,
      neighborhood: neighborhoodKey,
      type: 'neighborhood'
    });
  } else if (serviceType === 'service') {
    absoluteOgImage = generateOGImageUrl({
      title: optimizedTitle,
      type: 'service'
    });
  } else {
    absoluteOgImage = `${seoConfig.baseUrl}${seoConfig.images.defaultOg}`;
  }

  // Enhanced keywords with neighborhood-specific terms
  let enhancedKeywords = keywords;
  if (neighborhoodKey && seoConfig.neighborhoods.keywords[neighborhoodKey as keyof typeof seoConfig.neighborhoods.keywords]) {
    const neighborhoodKeywords = seoConfig.neighborhoods.keywords[neighborhoodKey as keyof typeof seoConfig.neighborhoods.keywords];
    enhancedKeywords = keywords ? `${keywords}, ${neighborhoodKeywords}` : neighborhoodKeywords;
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {enhancedKeywords && <meta name="keywords" content={enhancedKeywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={absoluteCanonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absoluteCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${seoConfig.siteName} - ${optimizedTitle}`} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={absoluteCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={`${seoConfig.siteName} - ${optimizedTitle}`} />

      {/* Enhanced Local SEO Tags */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content={`${seoConfig.business.geo.latitude};${seoConfig.business.geo.longitude}`} />
      <meta name="ICBM" content={`${seoConfig.business.geo.latitude}, ${seoConfig.business.geo.longitude}`} />
      
      {/* Additional Local SEO */}
      {neighborhoodKey && (
        <>
          <meta name="geo.placename" content={`${seoConfig.routeLabels[neighborhoodKey as keyof typeof seoConfig.routeLabels]}, Chicago`} />
          <meta name="geo.region" content="US-IL-Chicago" />
        </>
      )}

      {/* Enhanced Schema.org */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={absoluteOgImage} />

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
              "item": getAbsoluteCanonicalUrl(crumb.url)
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}