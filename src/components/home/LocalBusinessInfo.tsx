import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { seoConfig } from '@/config/seo';
import { NAPConsistency } from '@/components/seo/NAPConsistency';
import { GoogleReviewLink } from '@/components/seo/GoogleReviewLink';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const LocalBusinessInfo = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Chicago Office</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-darkBlue mr-2" />
                Our Location
              </h3>
              
              <NAPConsistency />
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-darkBlue mr-2" />
                  <span>Serving Chicago properties since 2007</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-darkBlue mr-2" />
                  <span>Centrally located to serve all Chicago neighborhoods</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <GoogleReviewLink 
                  placeId="ChIJA32NGOvND4gRGIKwKSQfIBs" 
                  variant="outline"
                  className="border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white"
                />
                
                <Button variant="default" className="bg-darkBlue hover:bg-blue-800" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="h-80 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                  `${seoConfig.business.address.streetAddress}, ${seoConfig.business.address.addressLocality}, ${seoConfig.business.address.addressRegion} ${seoConfig.business.address.postalCode}`
                )}`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stellar Property Management Chicago Office Location"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-4">Serving These Chicago Neighborhoods</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {[
                "Lincoln Park", "River North", "Gold Coast", "Lakeview", 
                "West Loop", "Old Town", "Wicker Park", "Bucktown",
                "Streeterville", "South Loop", "The Loop", "Uptown",
                "Rogers Park", "Edgewater", "Hyde Park", "Andersonville"
              ].map((neighborhood, index) => (
                <Link 
                  key={index}
                  to={`/neighborhoods/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-darkBlue hover:text-darkBlue transition-colors"
                >
                  {neighborhood}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalBusinessInfo;