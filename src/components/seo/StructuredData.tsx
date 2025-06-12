
import { Helmet } from 'react-helmet-async';

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
          "@id": "https://stellarpropertygroup.com",
          "name": "Stellar Property Management",
          "alternateName": "Stellar Property Group",
          "url": "https://stellarpropertygroup.com",
          "logo": "https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png",
          "image": "https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png",
          "description": "Professional Chicago property management company specializing in HOA and condo association management services.",
          "telephone": "+17737280652",
          "email": "info@stellarpropertygroup.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5107 North Western Avenue Ste 1S",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60625",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.975938,
            "longitude": -87.691592
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
          "openingHours": [
            "Mo-Fr 09:30-16:30"
          ],
          "sameAs": [
            "https://www.facebook.com/stellarpropertymgmt",
            "https://www.linkedin.com/company/stellarpropertymgmt",
            "https://twitter.com/stellarpropmgmt"
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Stellar Property Management",
            "url": "https://stellarpropertygroup.com"
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
            "name": "Stellar Property Management"
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
