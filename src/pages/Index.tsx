import React, { useLayoutEffect } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import LocalFAQSection from "@/components/common/LocalFAQSection";
import ChicagoOverviewSection from "@/components/home/ChicagoOverviewSection";
import AIAssistantSection from "@/components/home/AIAssistantSection";
import LocationSection from "@/components/home/LocationSection";
import { seoConfig } from "@/config/seo";
import {
  organizationData,
  featuredNeighborhoodLinks,
  serviceAreaLinks,
  chicagoFAQs
} from "@/components/home/homepageData";
import SitemapGenerator from "@/components/seo/SitemapGenerator";

const Index = () => {
  // useLayoutEffect runs before browser paint, ensuring immediate scroll
  useLayoutEffect(() => {
    // Reset scroll position immediately
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

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
      
      <ChicagoOverviewSection />
      
      <AIAssistantSection />

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
      
      <LocationSection />

      <CtaSection />
      
      {/* Generate sitemap for SEO */}
      <SitemapGenerator />
    </MainLayout>
  );
};

export default Index;