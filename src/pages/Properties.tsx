import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/seo/OptimizedImage";
import { Building, MapPin, Home, DollarSign } from "lucide-react";

export default function Properties() {
  // Sample properties data
  const properties = [
    {
      id: 1,
      title: "Lakefront Condominiums",
      type: "Condominium",
      location: "North Side, Chicago",
      units: "120 Units",
      description: "Luxury lakefront condominiums with stunning views of Lake Michigan. Features include 24/7 doorman, fitness center, and rooftop deck.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      id: 2,
      title: "Downtown High-Rise",
      type: "Condominium",
      location: "Downtown Chicago",
      units: "250 Units",
      description: "Modern high-rise in the heart of downtown Chicago with premium amenities including indoor pool, business center, and concierge services.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      id: 3,
      title: "Suburban Condo Complex",
      type: "Condominium",
      location: "Chicago Suburbs",
      units: "85 Units",
      description: "Family-friendly suburban condominium complex with spacious units, community pool, and well-maintained grounds.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    },
    {
      id: 4,
      title: "Historic Brownstone Association",
      type: "HOA",
      location: "Lincoln Park, Chicago",
      units: "24 Units",
      description: "Beautifully preserved historic brownstones with modern interiors, managed by our expert historic property team.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
    },
    {
      id: 5,
      title: "Riverside Townhomes",
      type: "HOA",
      location: "West Loop, Chicago",
      units: "42 Units",
      description: "Contemporary townhome community with private patios, garage parking, and riverside walking paths.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
    },
    {
      id: 6,
      title: "Parkview Residences",
      type: "Condominium",
      location: "Hyde Park, Chicago",
      units: "68 Units",
      description: "Elegant mid-rise condominium building overlooking Jackson Park with spacious floor plans and updated amenities.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Our Managed Properties</h1>
            <p className="text-lg text-gray-600">
              Explore our portfolio of professionally managed properties throughout Chicago and the North Suburbs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Properties" 
            subtitle="Discover some of our premier managed properties across Chicago's diverse neighborhoods."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <OptimizedImage
                    src={property.image}
                    alt={`${property.title} - ${property.type} in ${property.location} managed by Stellar Property Management`}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={256}
                    aspectRatio="400/256"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold text-darkBlue bg-blue-50 px-2 py-1 rounded">
                      {property.type}
                    </span>
                    <span className="text-sm text-gray-600">
                      {property.units}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mt-1 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <p>{property.location}</p>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{property.description}</p>
                  <Button variant="outline" className="w-full mt-2 border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                    View Property Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Property Management Services</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our comprehensive property management services ensure your property maintains its value and your community thrives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-darkBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">HOA Management</h3>
                <p className="text-gray-600">
                  Complete association management including board support, financial management, and rule enforcement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-darkBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
                <p className="text-gray-600">
                  Proactive maintenance programs and 24/7 emergency response to protect your property investment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-darkBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
                <p className="text-gray-600">
                  Comprehensive financial management including budgeting, reporting, and collections.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link to="/services">
                <Button className="bg-darkBlue hover:bg-blue-800">
                  View All Property Management Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to Experience Professional Property Management?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied property owners who trust Stellar Property Management with their valuable investments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-darkBlue hover:bg-gray-100">
                Contact Our Team
              </Button>
            </Link>
            <Link to="/request-proposal">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-darkBlue">
                Get Free Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}