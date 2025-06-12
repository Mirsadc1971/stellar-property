
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { SectionHeading } from "@/components/ui/section-heading";
import { Building, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface NeighborhoodLayoutProps {
  title: string;
  metaDescription: string;
  heroImage: string;
  description: string;
  history: string;
  landmarks: string[];
  schools: string[];
  features: string[];
}

export default function NeighborhoodLayout({
  title,
  metaDescription,
  heroImage,
  description,
  history,
  landmarks,
  schools,
  features
}: NeighborhoodLayoutProps) {
  const location = useLocation();
  const canonicalUrl = location.pathname;
  const fullTitle = `${title} Property Management - Chicago HOA & Condo Management | Stellar Property Management`;
  const keywords = `${title} property management, ${title} HOA management, ${title} condo management, Chicago property management, ${title} Chicago`;

  // Enhanced structured data for neighborhood pages
  const neighborhoodStructuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Place"],
    "name": `Stellar Property Management - ${title}`,
    "description": metaDescription,
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
    "areaServed": {
      "@type": "Place",
      "name": title,
      "containedInPlace": {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      }
    },
    "serviceType": [
      "HOA Management",
      "Condo Association Management",
      "Property Management",
      "Financial Management",
      "Maintenance Coordination"
    ],
    "telephone": "+17737280652",
    "email": "info@stellarpropertygroup.com",
    "url": `https://stellarpropertygroup.com${canonicalUrl}`,
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 09:30-16:30"],
    "sameAs": [
      "https://www.facebook.com/stellarpropertymgmt",
      "https://www.linkedin.com/company/stellarpropertymgmt"
    ]
  };

  const relatedServices = [
    { title: "HOA Management Services", path: "/services", description: "Complete association management" },
    { title: "Financial Management", path: "/services", description: "Budgeting and financial reporting" },
    { title: "Maintenance Coordination", path: "/services", description: "Property maintenance solutions" },
    { title: "Board Support", path: "/services", description: "Meeting and administrative support" }
  ];

  const nearbyAreas = [
    { name: "Lincoln Park", path: "/neighborhoods/lincoln-park" },
    { name: "Lakeview", path: "/neighborhoods/lakeview" },
    { name: "River North", path: "/neighborhoods/river-north" },
    { name: "Gold Coast", path: "/neighborhoods/gold-coast" },
    { name: "West Loop", path: "/neighborhoods/west-loop" },
    { name: "Old Town", path: "/neighborhoods/old-town" }
  ].filter(area => !area.path.includes(title.toLowerCase().replace(/[^a-z0-9]/g, '-')));

  return (
    <MainLayout>
      <SEOHead
        title={fullTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords={keywords}
        ogImage="https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png"
        structuredData={neighborhoodStructuredData}
      />

      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="service" data={{
        serviceType: "Property Management",
        description: `Professional property management services in ${title}, Chicago`,
        areaServed: title
      }} />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-white/90">{description}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Neighborhood Overview</h2>
              <p className="text-lg text-gray-600 mb-6">Discover what makes this area unique</p>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">{history}</p>
                <p className="text-gray-700 mb-6">
                  As a leading <Link to="/services" className="text-darkBlue hover:underline">Chicago property management company</Link>, 
                  Stellar Property Management understands the unique characteristics of {title} and provides tailored solutions 
                  for <Link to="/service-areas/chicago" className="text-darkBlue hover:underline">Chicago area properties</Link>.
                </p>
              </div>
              <Button className="mt-4">
                <Link to="/contact" className="flex items-center">
                  Contact Our Local Experts <Building className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2" /> Notable Landmarks
                </h3>
                <ul className="space-y-2">
                  {landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span> {landmark}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">Educational Institutions</h3>
                <ul className="space-y-2">
                  {schools.map((school, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span> {school}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">{`Property Management in ${title}`}</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {`Why property owners choose Stellar Property Management for ${title}. Our `}
            <Link to="/services" className="text-darkBlue hover:underline">comprehensive management services</Link>
            {` are designed specifically for Chicago's diverse neighborhoods.`}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our {title} Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-darkBlue mb-2">
                  <Link to={service.path} className="hover:underline">{service.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to={service.path} className="text-darkBlue text-sm font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      {nearbyAreas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Nearby Chicago Neighborhoods</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {nearbyAreas.slice(0, 6).map((area, index) => (
                <Link 
                  key={index}
                  to={area.path}
                  className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow text-darkBlue hover:underline"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/service-areas/chicago" className="text-darkBlue hover:underline font-medium">
                View All Chicago Service Areas →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Expert Property Management in {title}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Trust Stellar Property Management to handle your {title} property with the local expertise and professional service you deserve. 
            <Link to="/about" className="underline hover:no-underline ml-1">Learn more about our team</Link>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-darkBlue">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-darkBlue">
              <Link to="/request-proposal">Get Free Proposal</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
