import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import HeroSection from "@/components/services/HeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServicesOfferings from "@/components/services/ServicesOfferings";
import AreasSection from "@/components/services/AreasSection";
import CtaSection from "@/components/services/CtaSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import LocalFAQSection from "@/components/common/LocalFAQSection";
import { Link } from "react-router-dom";
import { seoConfig } from "@/config/seo";

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

  // Individual service schemas
  const hoaServiceSchema = {
    serviceType: "HOA Management Services",
    description: "Complete HOA management for Chicago communities, including board meeting support, maintenance oversight, vendor management, and covenant enforcement.",
    areaServed: "Chicago, IL"
  };

  const condoServiceSchema = {
    serviceType: "Condo Association Management",
    description: "Comprehensive condo management services including financial reporting, homeowner communication, maintenance coordination, and administrative support.",
    areaServed: "Chicago and North Suburbs, IL"
  };

  const financialServiceSchema = {
    serviceType: "Financial & Accounting Services",
    description: "Accurate budgeting, monthly financial reporting, assessment collections, and delinquency tracking for Chicago communities.",
    areaServed: "Chicago, IL"
  };

  const maintenanceServiceSchema = {
    serviceType: "Maintenance Coordination",
    description: "Coordination of trusted local Chicago vendors for routine repairs, emergency services, and property maintenance.",
    areaServed: "Chicago, IL"
  };

  const relatedNeighborhoodLinks = [
    {
      title: "Lincoln Park Service Excellence",
      description: "Specialized management for Lincoln Park's mix of historic buildings and modern developments, including lakefront properties.",
      path: "/neighborhoods/lincoln-park",
      category: 'neighborhood' as const
    },
    {
      title: "Gold Coast Luxury Services",
      description: "Premium property management for Gold Coast's exclusive buildings with white-glove service and luxury amenities.",
      path: "/neighborhoods/gold-coast",
      category: 'neighborhood' as const
    },
    {
      title: "West Loop Modern Management",
      description: "Contemporary property solutions for West Loop's converted lofts and new construction developments.",
      path: "/neighborhoods/west-loop",
      category: 'neighborhood' as const
    }
  ];

  const servicesFAQs = [
    {
      question: "What does comprehensive HOA management include for Chicago properties?",
      answer: `Our complete HOA management includes board meeting support, financial management, maintenance coordination, and vendor oversight. We handle everything from <a href="/neighborhoods/river-north" class="text-darkBlue hover:underline">River North</a> high-rise buildings to <a href="/neighborhoods/old-town" class="text-darkBlue hover:underline">Old Town</a> historic properties, ensuring compliance with Chicago Municipal Code and maintaining community standards that protect property values.`
    },
    {
      question: "How do you handle financial management for Chicago condo associations?",
      answer: `We provide comprehensive financial services including budgeting, monthly reporting, assessment collections, and reserve fund management. Our team understands Chicago-specific requirements for condo associations and works with buildings throughout <a href="/service-areas/chicago" class="text-darkBlue hover:underline">downtown Chicago</a> and the <a href="/service-areas/north-suburbs" class="text-darkBlue hover:underline">North Suburbs</a> to maintain financial transparency and stability.`
    },
    {
      question: "What maintenance services do you provide for Chicago properties?",
      answer: `Our maintenance coordination includes 24/7 emergency response, preventive maintenance programs, vendor management, and project oversight. We work with licensed Chicago contractors who understand local building codes, weather challenges, and the unique needs of neighborhoods from <a href="/neighborhoods/lakeview" class="text-darkBlue hover:underline">Lakeview</a> to <a href="/neighborhoods/hyde-park" class="text-darkBlue hover:underline">Hyde Park</a>.`
    },
    {
      question: "Do you provide services for both Chicago and suburban properties?",
      answer: `Yes, we serve properties throughout <a href="/service-areas/chicago" class="text-darkBlue hover:underline">Chicago</a> and the <a href="/service-areas/north-suburbs" class="text-darkBlue hover:underline">North Suburbs</a>. Our experienced team understands the different requirements for urban high-rises versus suburban communities, providing tailored management solutions for each property type and location. <a href="/contact" class="text-darkBlue hover:underline">Contact us</a> to discuss your specific property needs.`
    }
  ];

  return (
    <MainLayout>
      <SEOHead
        title={seoConfig.titles.services}
        description="Comprehensive HOA and condo management services in Chicago. Expert financial management, maintenance coordination, board support, and community management solutions for your property."
        canonical="/services"
        keywords="Chicago HOA management services, property management services Chicago, condo association management, Chicago property maintenance, HOA board support, financial management services"
        structuredData={servicesStructuredData}
        serviceType="service"
      />
      
      {/* Enhanced Schema Markup */}
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="service" data={hoaServiceSchema} />
      <SchemaMarkup type="service" data={condoServiceSchema} />
      <SchemaMarkup type="service" data={financialServiceSchema} />
      <SchemaMarkup type="service" data={maintenanceServiceSchema} />
      
      <HeroSection />
      
      {/* Enhanced Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-darkBlue">
              Professional Property Management Services Across Chicago
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every Chicago neighborhood presents unique property management challenges. From the luxury high-rises of 
              <Link to="/neighborhoods/streeterville" className="text-darkBlue hover:underline mx-1">Streeterville</Link> 
              to the historic buildings of <Link to="/neighborhoods/bucktown" className="text-darkBlue hover:underline">Bucktown</Link>, 
              our comprehensive services are tailored to meet the specific needs of your community. Our 
              <Link to="/about" className="text-darkBlue hover:underline mx-1">experienced team</Link> 
              brings decades of Chicago property management expertise to every building we manage.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Core Services – Tailored Property Management Solutions for Chicago</h3>
              <p className="text-gray-700 mb-4 text-left">
                Stellar Property Group delivers expert, hands-on management for residential and commercial properties across the Chicago area. Our Condo Association Management services provide day-to-day operational support, board guidance, and long-term planning to ensure smooth governance and community satisfaction. For subdivisions and planned communities, our HOA Management in Chicago focuses on enforcing rules fairly, managing finances responsibly, and maintaining neighborhood appeal.
              </p>
              <p className="text-gray-700 mb-4 text-left">
                We also offer Commercial Property Management in Chicago, giving building owners peace of mind through tenant oversight, lease compliance, maintenance coordination, and vendor supervision. Our Financial Reporting & Budgeting services help associations and property owners plan wisely with detailed monthly reports, reserve studies, and audit preparation.
              </p>
              <p className="text-gray-700 text-left">
                Through our Maintenance and Vendor Coordination, we ensure prompt, professional service using trusted, licensed contractors. From routine upkeep to emergency repairs, we manage the details so you can focus on the big picture.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesOverview />
      <ServicesOfferings />
      
      {/* Neighborhood-Specific Services Section */}
      <InternalLinksSection 
        title="Neighborhood-Specific Expertise"
        links={relatedNeighborhoodLinks}
        className="py-16 bg-gray-50"
      />
      
      <AreasSection />
      
      {/* Services FAQ Section */}
      <LocalFAQSection 
        title="Property Management Services FAQ"
        faqs={servicesFAQs}
        className="bg-white"
      />
      
      <CtaSection />
    </MainLayout>
  );
}