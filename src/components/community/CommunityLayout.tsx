import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import LocalFAQSection from "@/components/common/LocalFAQSection";
import { Link } from "react-router-dom";
import { Building, Users, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CommunityLayoutProps {
  title: string;
  metaDescription: string;
  heroImage?: string;
  description: string;
  history: string;
  features: string[];
  propertyTypes: string[];
  managementServices: string[];
  region: string;
  hoaFees?: string;
}

export default function CommunityLayout({
  title,
  metaDescription,
  heroImage,
  description,
  history,
  features,
  propertyTypes,
  managementServices,
  region,
  hoaFees = "$200-$600/month"
}: CommunityLayoutProps) {
  // Extract community key from title for SEO
  const communityKey = title.toLowerCase()
    .replace(/[,\s]+/g, '-')
    .replace('chicago', '')
    .replace(/^-+|-+$/g, '');
  
  const communityName = title.split(',')[0];
  
  // Generate related community links based on region
  const getRelatedCommunities = () => {
    let relatedCommunities = [];
    
    if (region === "Far North Side" || region === "North Side" || region === "Northwest Side" || region === "Central/Downtown" || region === "Chicago") {
      relatedCommunities = ["Lincoln Park", "River North", "Gold Coast", "Lakeview", "West Loop", "Wicker Park"];
    } else if (region === "North Shore") {
      relatedCommunities = ["Evanston", "Wilmette", "Highland Park", "Northbrook", "Glenview", "Lake Forest"];
    } else if (region === "Northwest Suburbs") {
      relatedCommunities = ["Arlington Heights", "Buffalo Grove", "Schaumburg", "Palatine", "Mount Prospect", "Des Plaines"];
    } else {
      relatedCommunities = ["Lincoln Park", "Evanston", "Arlington Heights", "Highland Park", "Schaumburg", "Wilmette"];
    }
    
    // Filter out the current community
    return relatedCommunities.filter(c => c !== communityName).slice(0, 3);
  };

  const relatedCommunities = getRelatedCommunities();

  const neighborhoodFAQs = [
    {
      question: `What makes ${communityName} property management unique?`,
      answer: `${communityName} presents specific property management challenges that require local expertise. Our team understands the neighborhood's building types, local regulations, and community dynamics. We work with <a href="/services" class="text-darkBlue hover:underline">comprehensive management services</a> tailored to ${communityName}'s unique characteristics, ensuring your property maintains its value and community standards.`
    },
    {
      question: `How do you handle maintenance for ${communityName} properties?`,
      answer: `Our maintenance approach in ${communityName} includes 24/7 emergency response with local vendor networks who understand the neighborhood's building types and common issues. We provide preventive maintenance programs and work with licensed Chicago contractors familiar with local building codes and <a href="/contact" class="text-darkBlue hover:underline">community requirements</a>.`
    },
    {
      question: `What are your management fees for ${communityName} properties?`,
      answer: `Management fees vary based on property size, amenities, and specific neighborhood requirements. ${communityName} properties may have unique considerations that affect pricing. <a href="/request-proposal" class="text-darkBlue hover:underline">Request a free proposal</a> for a detailed quote tailored to your ${communityName} property's specific needs.`
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Communities', url: '/properties' },
    { name: region, url: `/properties#${region.toLowerCase().replace(/\s+/g, '-')}` },
    { name: communityName, url: `/communities/${communityKey}` }
  ];

  return (
    <MainLayout>
      <SEOHead
        title={`${title} Property Management | Stellar Property Management`}
        description={metaDescription}
        canonical={`/communities/${communityKey}`}
        keywords={`${communityName} property management, ${communityName} HOA management, ${communityName} condo management, Chicago property management, ${region} property management, Stellar Property Management`}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/townhomes.jpg"
            alt="Stellar Property Management"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title} Property Management
            </h1>
            <p className="text-xl mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-darkBlue hover:bg-blue-800" asChild>
                <Link to="/contact">Get Professional Management</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-darkBlue" asChild>
                <Link to="/request-proposal">Request Free Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-darkBlue">
              Expert Property Management in {communityName}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                {history} Our <Link to="/about" className="text-darkBlue hover:underline">experienced team</Link> at 
                Stellar Property Management brings specialized knowledge of {communityName}'s unique property landscape, 
                ensuring your <Link to="/services" className="text-darkBlue hover:underline">HOA and condo management</Link> needs 
                are met with the highest professional standards.
              </p>
              <p>
                Whether your property requires routine maintenance coordination or complex board support, 
                we understand {communityName}'s specific challenges and opportunities. Our comprehensive approach 
                includes financial management, vendor coordination, and community engagement that enhances property 
                values throughout <Link to="/properties" className="text-darkBlue hover:underline">Chicagoland</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-darkBlue">
              Why Choose Stellar for {communityName} Property Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Building className="h-8 w-8 text-darkBlue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of {communityName}'s building types, regulations, and community needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="h-8 w-8 text-darkBlue mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock emergency response with local vendor networks throughout Chicago.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Star className="h-8 w-8 text-darkBlue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Successful management of diverse properties across {communityName} and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-darkBlue">Community Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-darkBlue">Property Types</h3>
                <ul className="space-y-2">
                  {propertyTypes.map((type, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Building className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-darkBlue">Typical HOA Fees: {hoaFees}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-darkBlue">Our Management Services</h3>
                <ul className="space-y-2">
                  {managementServices.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More Chicago Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {relatedCommunities.map((community, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-darkBlue">{community}</h3>
                <p className="text-gray-600 mb-4">
                  Professional property management services in {community}.
                </p>
                <Link 
                  to={`/communities/${community.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
              <Link to="/properties">View All Communities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community-Specific FAQ */}
      <LocalFAQSection 
        title={`${communityName} Property Management FAQ`}
        faqs={neighborhoodFAQs}
        className="bg-white"
      />

      {/* Call to Action */}
      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Professional {communityName} Property Management?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied property owners who trust Stellar Property Management 
            for their {communityName} communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-darkBlue hover:bg-gray-100" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-darkBlue" asChild>
              <Link to="/request-proposal">Get Free Proposal</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}