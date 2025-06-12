
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '@/config/seo';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'breadcrumb' | 'faq' | 'review';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": seoConfig.baseUrl,
          "name": seoConfig.business.name,
          "alternateName": seoConfig.business.alternateName,
          "url": seoConfig.baseUrl,
          "logo": seoConfig.defaultOgImage,
          "image": seoConfig.defaultOgImage,
          "description": seoConfig.defaultDescription,
          "telephone": seoConfig.business.phone,
          "email": seoConfig.business.email,
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            ...seoConfig.business.address
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": seoConfig.business.geo.latitude,
            "longitude": seoConfig.business.geo.longitude
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Chicago",
              "sameAs": "https://en.wikipedia.org/wiki/Chicago"
            },
            {
              "@type": "AdministrativeArea",
              "name": "North Suburbs of Chicago"
            }
          ],
          "serviceType": [
            "HOA Management",
            "Condo Association Management",
            "Property Management",
            "Community Management"
          ],
          "openingHours": seoConfig.business.openingHours,
          "sameAs": seoConfig.business.socialMedia
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": seoConfig.business.name,
            "url": seoConfig.baseUrl
          },
          "areaServed": data.areaServed,
          "serviceType": data.serviceType,
          "audience": {
            "@type": "Audience",
            "audienceType": data.audienceType
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "reviewBody": data.text,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": seoConfig.business.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.rating,
            "bestRating": "5"
          }
        };

      default:
        return {};
    }
  };

  const schema = generateSchema();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
