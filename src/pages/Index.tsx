
import React, { useEffect, useLayoutEffect } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import MapComponent from "@/components/ui/MapComponent";
import Gpt4ChatBox from "@/components/home/Gpt4ChatBox";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Users, Award } from "lucide-react";

const Index = () => {
  // useLayoutEffect runs before browser paint, ensuring immediate scroll
  useLayoutEffect(() => {
    // Reset scroll position immediately
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://stellarpropertygroup.com",
    "name": "Stellar Property Management",
    "alternateName": "Stellar Property Group",
    "url": "https://stellarpropertygroup.com",
    "logo": "https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png",
    "image": "https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png",
    "description": "Professional Chicago property management company specializing in HOA and condo association management services. Expert solutions for property maintenance, financial management, and community success.",
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
      "Community Management",
      "Financial Management",
      "Maintenance Coordination"
    ],
    "openingHours": [
      "Mo-Fr 09:30-16:30"
    ],
    "sameAs": [
      "https://www.facebook.com/stellarpropertymgmt",
      "https://www.linkedin.com/company/stellarpropertymgmt",
      "https://twitter.com/stellarpropmgmt"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Management Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "HOA Management Chicago",
          "description": "Complete HOA and condo association management services in Chicago"
        },
        {
          "@type": "Service", 
          "name": "Property Maintenance",
          "description": "24/7 maintenance services for Chicago properties"
        },
        {
          "@type": "Service",
          "name": "Financial Management",
          "description": "Professional financial services for property associations in Chicago"
        }
      ]
    }
  };

  return (
    <MainLayout showBreadcrumbs={false}>
      <SEOHead
        title="Chicago Property Management & HOA Services | Stellar Property Management"
        description="Stellar Property Management offers expert property management services in Chicago for HOAs and condos. Trust our team for reliable, affordable solutions with 24/7 support."
        canonical="/"
        keywords="Chicago HOA management, property management company Chicago, condo association management Chicago, HOA services Chicago, Chicago property management"
        structuredData={organizationData}
      />

      <HeroSection />
      
      {/* AI Property Assistant Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-darkBlue mb-8">
              Your AI Property Management Assistant
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Get instant insights, answers, and guidance about property management directly from our advanced AI assistant.
            </p>
            <Gpt4ChatBox />
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />

      {/* Featured Neighborhoods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-4">
            Featured Chicago Neighborhoods
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Discover our specialized property management services across Chicago's most prestigious neighborhoods.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-3">
                <Link to="/neighborhoods/lincoln-park" className="text-darkBlue hover:underline">Lincoln Park</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Prestigious lakefront neighborhood with historic Victorian homes and luxury high-rises.
              </p>
              <Link to="/neighborhoods/lincoln-park" className="text-darkBlue font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-3">
                <Link to="/neighborhoods/river-north" className="text-darkBlue hover:underline">River North</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Dynamic arts district with converted warehouses and modern condominiums.
              </p>
              <Link to="/neighborhoods/river-north" className="text-darkBlue font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-3">
                <Link to="/neighborhoods/gold-coast" className="text-darkBlue hover:underline">Gold Coast</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Upscale district known for luxury shopping, fine dining, and elegant architecture.
              </p>
              <Link to="/neighborhoods/gold-coast" className="text-darkBlue font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/service-areas/chicago" className="text-darkBlue hover:underline font-medium">
              View All Chicago Service Areas →
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      
      {/* Service Areas Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Building className="h-12 w-12 text-darkBlue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                <Link to="/service-areas/chicago" className="text-darkBlue hover:underline">Chicago Neighborhoods</Link>
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive property management across all Chicago neighborhoods, from downtown high-rises to historic districts.
              </p>
              <Link to="/service-areas/chicago" className="text-darkBlue font-medium inline-flex items-center">
                Explore Chicago Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Users className="h-12 w-12 text-darkBlue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                <Link to="/service-areas/north-suburbs" className="text-darkBlue hover:underline">North Suburbs</Link>
              </h3>
              <p className="text-gray-600 mb-6">
                Professional management services for suburban communities throughout Chicago's North Shore and surrounding areas.
              </p>
              <Link to="/service-areas/north-suburbs" className="text-darkBlue font-medium inline-flex items-center">
                Explore Suburban Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-16 bg-gray-100" aria-labelledby="location-heading">
        <div className="container mx-auto px-4">
          <h2 id="location-heading" className="font-heading text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="max-w-3xl mx-auto">
            <MapComponent 
              latitude={41.975938} 
              longitude={-87.691592}
              className="h-[400px] rounded-lg shadow-lg overflow-hidden"
            />
            <div className="text-center mt-6">
              <address className="text-gray-600 not-italic">
                5107 North Western Avenue Ste 1S<br />
                Chicago, Illinois 60625
              </address>
              <p className="text-gray-600 mt-2">
                <Link to="/contact" className="text-darkBlue hover:underline">Contact us</Link> to schedule a consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  );
};

export default Index;
