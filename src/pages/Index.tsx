
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
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import LocalFAQSection from "@/components/common/LocalFAQSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Users, Award, MapPin, Star, Clock } from "lucide-react";
import { seoConfig } from "@/config/seo";

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

  const featuredNeighborhoodLinks = [
    {
      title: "Lincoln Park Property Management",
      description: "Premium lakefront neighborhood management with expertise in historic Victorian homes and luxury high-rises near Lincoln Park Zoo.",
      path: "/neighborhoods/lincoln-park",
      category: 'neighborhood' as const
    },
    {
      title: "River North HOA Services",
      description: "Specialized management for converted warehouses and modern condos in Chicago's premier arts district.",
      path: "/neighborhoods/river-north",
      category: 'neighborhood' as const
    },
    {
      title: "Gold Coast Luxury Management",
      description: "Elite property management for Chicago's most prestigious lakefront neighborhood with upscale amenities.",
      path: "/neighborhoods/gold-coast",
      category: 'neighborhood' as const
    }
  ];

  const serviceAreaLinks = [
    {
      title: "Downtown Chicago Services",
      description: "Comprehensive property management for Loop high-rises, River North lofts, and Streeterville luxury towers.",
      path: "/service-areas/chicago",
      category: 'area' as const
    },
    {
      title: "North Suburbs Management",
      description: "Family-focused community management for suburban neighborhoods throughout Chicago's North Shore.",
      path: "/service-areas/north-suburbs",
      category: 'area' as const
    },
    {
      title: "Professional HOA Services",
      description: "Complete HOA management solutions including board support, financial management, and maintenance coordination.",
      path: "/services",
      category: 'service' as const
    }
  ];

  const chicagoFAQs = [
    {
      question: "What makes Stellar Property Management different from other Chicago property management companies?",
      answer: `Our deep understanding of Chicago's unique neighborhoods sets us apart. From navigating <a href="/neighborhoods/lincoln-park" class="text-darkBlue hover:underline">Lincoln Park's</a> historic preservation requirements to managing high-rise buildings in <a href="/neighborhoods/river-north" class="text-darkBlue hover:underline">River North</a>, we provide localized expertise. Our <a href="/about" class="text-darkBlue hover:underline">experienced team</a> understands Chicago Municipal Code, local vendor networks, and neighborhood-specific challenges that affect property values and resident satisfaction.`
    },
    {
      question: "Which Chicago neighborhoods does Stellar Property Management serve?",
      answer: `We proudly serve all major Chicago neighborhoods including <a href="/neighborhoods/gold-coast" class="text-darkBlue hover:underline">Gold Coast</a>, <a href="/neighborhoods/lakeview" class="text-darkBlue hover:underline">Lakeview</a>, <a href="/neighborhoods/west-loop" class="text-darkBlue hover:underline">West Loop</a>, <a href="/neighborhoods/old-town" class="text-darkBlue hover:underline">Old Town</a>, and many more. Our <a href="/service-areas/chicago" class="text-darkBlue hover:underline">comprehensive service area</a> extends throughout downtown Chicago and into the <a href="/service-areas/north-suburbs" class="text-darkBlue hover:underline">North Suburbs</a>, ensuring consistent, professional management regardless of location.`
    },
    {
      question: "How do you handle emergency maintenance for Chicago properties?",
      answer: `Our 24/7 emergency response system is specifically designed for Chicago's climate and building types. Whether it's a heating emergency during a Chicago winter in <a href="/neighborhoods/wicker-park" class="text-darkBlue hover:underline">Wicker Park</a> or a plumbing issue in a <a href="/neighborhoods/streeterville" class="text-darkBlue hover:underline">Streeterville</a> high-rise, we maintain relationships with licensed local vendors who understand Chicago building codes and can respond quickly to protect your property and residents.`
    },
    {
      question: "What are your property management fees for Chicago HOAs and condos?",
      answer: `Our management fees are competitive and tailored to each property's specific needs and location. Factors include building size, amenities, and neighborhood requirements. <a href="/contact" class="text-darkBlue hover:underline">Contact our team</a> for a personalized quote, or <a href="/request-proposal" class="text-darkBlue hover:underline">request a free proposal</a> to see how our services can benefit your Chicago property association.`
    }
  ];

  return (
    <MainLayout showBreadcrumbs={false}>
      <SEOHead
        title={seoConfig.titles.homepage}
        description={seoConfig.defaultDescription}
        canonical="/"
        keywords="Chicago HOA management, property management company Chicago, condo association management Chicago, HOA services Chicago, Chicago property management"
        structuredData={organizationData}
        serviceType="general"
      />

      <HeroSection />
      
      {/* Enhanced Chicago Property Management Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-darkBlue">
              Chicago's Most Trusted Property Management Company
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over a decade, Stellar Property Management has been the premier choice for 
              <Link to="/services" className="text-darkBlue hover:underline mx-1">HOA and condo management</Link> 
              throughout Chicago. From luxury <Link to="/neighborhoods/gold-coast" className="text-darkBlue hover:underline">Gold Coast</Link> high-rises 
              to historic <Link to="/neighborhoods/lincoln-park" className="text-darkBlue hover:underline">Lincoln Park</Link> buildings, 
              we understand the unique challenges each neighborhood presents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-darkBlue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep knowledge of Chicago neighborhoods from 
                  <Link to="/neighborhoods/the-loop" className="text-darkBlue hover:underline mx-1">The Loop</Link> 
                  to <Link to="/service-areas/north-suburbs" className="text-darkBlue hover:underline">North Suburbs</Link>
                </p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-darkBlue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Hundreds of satisfied communities across Chicago trust our 
                  <Link to="/about" className="text-darkBlue hover:underline mx-1">experienced team</Link>
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-darkBlue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock emergency response for all Chicago properties and 
                  <Link to="/contact" className="text-darkBlue hover:underline mx-1">resident needs</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Property Assistant Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-darkBlue mb-8">
              Your AI Property Management Assistant
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Get instant insights, answers, and guidance about Chicago property management directly from our advanced AI assistant. 
              Ask about specific neighborhoods like <Link to="/neighborhoods/lakeview" className="text-darkBlue hover:underline">Lakeview</Link> or 
              <Link to="/neighborhoods/west-loop" className="text-darkBlue hover:underline mx-1">West Loop</Link> management challenges.
            </p>
            <Gpt4ChatBox />
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />

      {/* Enhanced Featured Neighborhoods Section */}
      <InternalLinksSection 
        title="Premier Chicago Neighborhoods We Serve"
        links={featuredNeighborhoodLinks}
        className="py-16 bg-gray-50"
      />

      {/* Service Areas with Enhanced Content */}
      <InternalLinksSection 
        title="Our Comprehensive Service Areas"
        links={serviceAreaLinks}
        className="py-16 bg-white"
      />

      <WhyChooseUs />
      <Testimonials />
      
      {/* Enhanced Chicago-Specific FAQ Section */}
      <LocalFAQSection 
        title="Chicago Property Management FAQ"
        faqs={chicagoFAQs}
        className="bg-gray-50"
      />
      
      {/* Location Section with Enhanced Content */}
      <section className="py-16 bg-gray-100" aria-labelledby="location-heading">
        <div className="container mx-auto px-4">
          <h2 id="location-heading" className="font-heading text-3xl font-bold text-center mb-8">
            Centrally Located to Serve All Chicago Communities
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-4">
                Our strategic location in North Chicago provides easy access to all neighborhoods we serve, from 
                <Link to="/neighborhoods/rogers-park" className="text-darkBlue hover:underline mx-1">Rogers Park</Link> 
                in the north to <Link to="/neighborhoods/hyde-park" className="text-darkBlue hover:underline">Hyde Park</Link> in the south.
              </p>
            </div>
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
                for your <Link to="/neighborhoods" className="text-darkBlue hover:underline mx-1">Chicago neighborhood</Link> property
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
