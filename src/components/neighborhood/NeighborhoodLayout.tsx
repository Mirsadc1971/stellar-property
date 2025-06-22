import { Helmet } from 'react-helmet-async';
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import { getNeighborhoodSEO } from '@/utils/neighborhoodSEO';
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import LocalFAQSection from "@/components/common/LocalFAQSection";
import { Link } from "react-router-dom";
import { Building, Users, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  // Extract neighborhood key from title for SEO
  const neighborhoodKey = title.toLowerCase()
    .replace(/[,\s]+/g, '-')
    .replace('chicago', '')
    .replace(/^-+|-+$/g, '');
  
  const neighborhoodName = title.split(',')[0];
  const seoData = getNeighborhoodSEO(neighborhoodKey, neighborhoodName);

  // Generate related neighborhood links
  const relatedNeighborhoods = [
    { name: "Lincoln Park", key: "lincoln-park" },
    { name: "Lakeview", key: "lakeview" },
    { name: "River North", key: "river-north" },
    { name: "Gold Coast", key: "gold-coast" },
    { name: "West Loop", key: "west-loop" },
    { name: "Old Town", key: "old-town" }
  ].filter(n => n.key !== neighborhoodKey).slice(0, 3);

  const relatedLinks = [
    ...relatedNeighborhoods.map(neighborhood => ({
      title: `${neighborhood.name} Property Management`,
      description: `Professional HOA and condo management services in ${neighborhood.name}, Chicago.`,
      path: `/neighborhoods/${neighborhood.key}`,
      category: 'neighborhood' as const
    })),
    {
      title: "Chicago Service Areas",
      description: "Comprehensive property management services throughout Chicago and the North Suburbs.",
      path: "/service-areas/chicago",
      category: 'area' as const
    },
    {
      title: "Professional HOA Services",
      description: "Complete HOA management solutions for Chicago communities.",
      path: "/services",
      category: 'service' as const
    }
  ].slice(0, 3);

  const neighborhoodFAQs = [
    {
      question: `What makes ${neighborhoodName} property management unique?`,
      answer: `${neighborhoodName} presents specific property management challenges that require local expertise. Our team understands the area's building types, local regulations, and community dynamics. We work with <a href="/services" class="text-darkBlue hover:underline">comprehensive management services</a> tailored to ${neighborhoodName}'s unique characteristics, ensuring your property maintains its value and community standards.`
    },
    {
      question: `How do you handle maintenance for ${neighborhoodName} properties?`,
      answer: `Our maintenance approach in ${neighborhoodName} includes 24/7 emergency response with local vendor networks who understand the neighborhood's building types and common issues. We provide preventive maintenance programs and work with licensed Chicago contractors familiar with local building codes and <a href="/contact" class="text-darkBlue hover:underline">community requirements</a>.`
    },
    {
      question: `What are your management fees for ${neighborhoodName} properties?`,
      answer: `Management fees vary based on property size, amenities, and specific neighborhood requirements. ${neighborhoodName} properties may have unique considerations that affect pricing. <a href="/request-proposal" class="text-darkBlue hover:underline">Request a free proposal</a> for a detailed quote tailored to your ${neighborhoodName} property's specific needs.`
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: 'Chicago', url: '/service-areas/chicago' },
    { name: 'Neighborhoods', url: '/neighborhoods' },
    { name: neighborhoodName, url: `/neighborhoods/${neighborhoodKey}` }
  ];

  return (
    <MainLayout>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        neighborhoodKey={neighborhoodKey}
        serviceType="neighborhood"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/townhomes copy.jpg"
            alt={`${title} neighborhood showing beautiful architecture and areas managed by Stellar Property Management`}
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

      {/* Neighborhood Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-darkBlue">
              Expert Property Management in {neighborhoodName}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                {history} Our <Link to="/about" className="text-darkBlue hover:underline">experienced team</Link> at 
                Stellar Property Management brings specialized knowledge of {neighborhoodName}'s unique property landscape, 
                ensuring your <Link to="/services" className="text-darkBlue hover:underline">HOA and condo management</Link> needs 
                are met with the highest professional standards.
              </p>
              <p>
                Whether your property requires routine maintenance coordination or complex board support, 
                we understand {neighborhoodName}'s specific challenges and opportunities. Our comprehensive approach 
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
              Why Choose Stellar for {neighborhoodName} Property Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Building className="h-8 w-8 text-darkBlue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of {neighborhoodName}'s building types, regulations, and community needs.
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
                  Successful management of diverse properties across {neighborhoodName} and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-darkBlue">Notable Landmarks</h3>
                <ul className="space-y-2">
                  {landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-darkBlue">Schools & Education</h3>
                <ul className="space-y-2">
                  {schools.map((school, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                      {school}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-darkBlue">Our Management Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Building className="h-4 w-4 text-darkBlue mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <InternalLinksSection 
        title={`Explore More Chicago Neighborhoods`}
        links={relatedLinks}
        className="py-16 bg-gray-50"
      />

      {/* Neighborhood-Specific FAQ */}
      <LocalFAQSection 
        title={`${neighborhoodName} Property Management FAQ`}
        faqs={neighborhoodFAQs}
        className="bg-white"
      />

      {/* Call to Action */}
      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Professional {neighborhoodName} Property Management?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied property owners who trust Stellar Property Management 
            for their {neighborhoodName} communities.
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