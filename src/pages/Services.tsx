
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";
import HeroSection from "@/components/services/HeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServicesOfferings from "@/components/services/ServicesOfferings";
import AreasSection from "@/components/services/AreasSection";
import CtaSection from "@/components/services/CtaSection";

export default function Services() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stellar Property Management",
    "description": "Comprehensive HOA and condo management services in Chicago including financial management, maintenance coordination, board support, and community management.",
    "url": "https://stellarpropertygroup.com/services",
    "serviceType": [
      "HOA Management Services",
      "Condo Association Management", 
      "Financial & Accounting Services",
      "Maintenance Coordination",
      "Board Meeting Support",
      "Vendor Management",
      "Emergency Response Services"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Chicago",
      "sameAs": "https://en.wikipedia.org/wiki/Chicago"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Stellar Property Management",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5107 North Western Avenue Ste 1S",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60625",
        "addressCountry": "US"
      },
      "telephone": "+17737280652",
      "email": "info@stellarpropertygroup.com"
    }
  };

  return (
    <MainLayout>
      <SEOHead
        title="Professional HOA & Property Management Services in Chicago"
        description="Comprehensive HOA and condo management services in Chicago. Expert financial management, maintenance coordination, board support, and community management solutions for your property."
        canonical="/services"
        keywords="Chicago HOA management services, property management services Chicago, condo association management, Chicago property maintenance, HOA board support, financial management services"
        structuredData={servicesStructuredData}
      />
      
      <HeroSection />
      <ServicesOverview />
      <ServicesOfferings />
      <AreasSection />
      <CtaSection />
    </MainLayout>
  );
}
