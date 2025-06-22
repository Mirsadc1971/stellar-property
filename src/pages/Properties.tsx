import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { MapPin, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Community data organized by region
const communities = {
  farNorthSide: {
    name: "Far North Side",
    communities: [
      "Rogers Park", "West Ridge", "Edgewater", "Uptown", "Lincoln Square", 
      "North Park", "Albany Park", "Forest Glen", "Jefferson Park", 
      "Norwood Park", "Edison Park", "O'Hare"
    ]
  },
  northSide: {
    name: "North Side",
    communities: [
      "North Center", "Lakeview", "Lincoln Park", "Avondale", "Logan Square"
    ]
  },
  northwestSide: {
    name: "Northwest Side",
    communities: [
      "Irving Park", "Portage Park", "Dunning", "Belmont Cragin", 
      "Hermosa", "Montclare"
    ]
  },
  centralDowntown: {
    name: "Central / Downtown Area",
    communities: [
      "Near North Side", "The Loop", "Near West Side", "West Town", 
      "Noble Square", "River North", "Gold Coast", "Streeterville", "Fulton Market"
    ]
  },
  coreNorthwestSuburbs: {
    name: "Core Northwest Suburbs",
    communities: [
      "Arlington Heights", "Buffalo Grove", "Des Plaines", "Elk Grove Village", 
      "Harwood Heights", "Hoffman Estates", "Mount Prospect", "Niles", 
      "Norridge", "Palatine", "Park Ridge", "Prospect Heights", 
      "Rolling Meadows", "Schaumburg", "Wheeling"
    ]
  },
  extendedNorthwestSuburbs: {
    name: "Extended Northwest Suburbs",
    communities: [
      "Barrington", "Barrington Hills", "South Barrington", "Lake Zurich", 
      "Mundelein", "Wauconda", "Vernon Hills", "Itasca", "Roselle", 
      "Streamwood", "Hanover Park", "Wood Dale"
    ]
  },
  northShoreSuburbs: {
    name: "North Shore Suburbs",
    communities: [
      "Evanston", "Wilmette", "Kenilworth", "Winnetka", "Glencoe", 
      "Highland Park", "Highwood", "Lake Forest", "Lake Bluff", "Northbrook", 
      "Glenview", "Deerfield", "Northfield", "Riverwoods", "Bannockburn"
    ]
  }
};

// Function to convert community name to URL slug
const getSlug = (name: string) => {
  return name.toLowerCase().replace(/['\s]+/g, '-');
};

export default function Properties() {
  return (
    <MainLayout>
      <SEOHead
        title="Chicago Communities & Properties | Stellar Property Management"
        description="Explore our managed communities across Chicago neighborhoods and suburbs. Professional property management services for HOAs and condos throughout Chicagoland."
        canonical="/properties"
        keywords="Chicago property management, Chicago communities, HOA management Chicago, condo management Chicago suburbs, property management services"
      />

      {/* Hero Section */}
      <section className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Communities</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stellar Property Management provides expert property management services across Chicago's diverse neighborhoods and suburbs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Serving Chicago's Finest Communities</h2>
            <p className="text-lg text-gray-600">
              From downtown high-rises to suburban townhomes, we provide tailored property management solutions for communities throughout Chicagoland. Our local expertise ensures your property receives the specialized care it deserves.
            </p>
          </div>

          {/* Chicago Neighborhoods */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="mr-2 h-6 w-6 text-darkBlue" />
              Chicago Neighborhoods
            </h2>

            {/* Far North Side */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-darkBlue border-b pb-2">
                {communities.farNorthSide.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {communities.farNorthSide.communities.map((community) => (
                  <Link 
                    key={community}
                    to={`/communities/${getSlug(community)}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                    <span>{community}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* North Side */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-darkBlue border-b pb-2">
                {communities.northSide.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {communities.northSide.communities.map((community) => (
                  <Link 
                    key={community}
                    to={`/communities/${getSlug(community)}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                    <span>{community}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Northwest Side */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-darkBlue border-b pb-2">
                {communities.northwestSide.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {communities.northwestSide.communities.map((community) => (
                  <Link 
                    key={community}
                    to={`/communities/${getSlug(community)}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                    <span>{community}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Central / Downtown Area */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-darkBlue border-b pb-2">
                {communities.centralDowntown.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {communities.centralDowntown.communities.map((community) => (
                  <Link 
                    key={community}
                    to={`/communities/${getSlug(community)}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                    <span>{community}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Suburbs */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="mr-2 h-6 w-6 text-darkBlue" />
              North & Northwest Suburbs
            </h2>

            {/* Core Northwest Suburbs */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-darkBlue border-b pb-2">
                {communities.coreNorthwestSuburbs.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {communities.coreNorthwestSuburbs.communities.map((community) => (
                  <Link 
                    key={community}
                    to={`/communities/${getSlug(community)}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                    <span>{community}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Extended Northwest Suburbs */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-darkBlue border-b pb-2">
                {communities.extendedNorthwestSuburbs.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {communities.extendedNorthwestSuburbs.communities.map((community) => (
                  <Link 
                    key={community}
                    to={`/communities/${getSlug(community)}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                    <span>{community}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* North Shore Suburbs */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-darkBlue border-b pb-2">
                {communities.northShoreSuburbs.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {communities.northShoreSuburbs.communities.map((community) => (
                  <Link 
                    key={community}
                    to={`/communities/${getSlug(community)}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                    <span>{community}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Property Management Services?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether your community is in downtown Chicago or the suburbs, our team has the local expertise to provide exceptional property management services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-darkBlue hover:bg-blue-800">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild variant="outline" className="border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
              <Link to="/request-proposal">
                Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}