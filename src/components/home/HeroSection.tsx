
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/seo/OptimizedImage";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export default function HeroSection() {
  return (
    <>
      <SchemaMarkup type="website" />
      <SchemaMarkup type="organization" />
      
      <section 
        className="relative bg-gray-100 overflow-hidden" 
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Professional Chicago property management services by Stellar Property Management - Modern luxury condominiums in downtown Chicago"
            className="w-full h-full object-cover"
            priority={true}
            sizes="100vw"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 
              id="hero-heading" 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Chicago's Trusted Property Management Experts
            </h1>
            <p 
              className="text-xl text-white/90 mb-8"
            >
              Specialized HOA & Condo Management Services in Chicago to Maximize Your Community's Success
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-darkBlue hover:bg-blue-800"
                asChild
              >
                <Link to="/request-proposal">Get a Free Management Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
