import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/seo/OptimizedImage";
import { Building, MapPin, Home, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/seo/SEOHead";
import { allCommunities, getCommunitiesByRegion } from '@/data/communityGenerator';

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Chicago regions
  const chicagoRegions = [
    "Far North Side",
    "North Side",
    "Northwest Side",
    "Central/Downtown"
  ];

  // Suburban regions
  const suburbanRegions = [
    "North Shore",
    "Northwest Suburbs"
  ];

  // Filter communities based on search term
  const filteredCommunities = searchTerm
    ? allCommunities.filter(community => 
        community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        community.region.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <MainLayout>
      <SEOHead
        title="Chicago Communities We Serve | Stellar Property Management"
        description="Explore our property management services across Chicago and its suburbs. Professional HOA and condo management for communities throughout Chicagoland."
        canonical="/properties"
        keywords="Chicago property management, Chicago communities, HOA management Chicago, condo management Chicago, suburban property management, Stellar Property Management"
      />

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Communities We Serve</h1>
            <p className="text-lg text-gray-600">
              Explore our property management services across Chicago and the surrounding suburbs.
              With over 100 communities served, we have the local expertise to meet your property management needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search communities by name or region..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {searchTerm && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-4">Search Results ({filteredCommunities.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCommunities.map((community) => (
                    <Link 
                      key={community.slug} 
                      to={`/communities/${community.slug}`}
                      className="block p-3 bg-white rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-darkBlue" />
                        <span className="font-medium">{community.name}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{community.region}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <Tabs defaultValue="chicago" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="chicago">Chicago</TabsTrigger>
              <TabsTrigger value="suburbs">Suburbs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chicago" className="space-y-12">
              {chicagoRegions.map((region) => {
                const communities = getCommunitiesByRegion(region);
                if (communities.length === 0) return null;
                
                return (
                  <div key={region} id={region.toLowerCase().replace(/\s+/g, '-')}>
                    <h2 className="text-2xl font-bold mb-6 text-darkBlue">{region}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {communities.map((community) => (
                        <Link 
                          key={community.slug} 
                          to={`/communities/${community.slug}`}
                          className="block p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-darkBlue" />
                            <span className="font-medium">{community.name}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{community.description.split('.')[0]}.</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
            
            <TabsContent value="suburbs" className="space-y-12">
              {suburbanRegions.map((region) => {
                const communities = getCommunitiesByRegion(region);
                if (communities.length === 0) return null;
                
                return (
                  <div key={region} id={region.toLowerCase().replace(/\s+/g, '-')}>
                    <h2 className="text-2xl font-bold mb-6 text-darkBlue">{region}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {communities.map((community) => (
                        <Link 
                          key={community.slug} 
                          to={`/communities/${community.slug}`}
                          className="block p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-darkBlue" />
                            <span className="font-medium">{community.name}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{community.description.split('.')[0]}.</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
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
                  <MapPin className="h-8 w-8 text-darkBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep knowledge of local regulations, vendor networks, and community needs across Chicagoland.
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