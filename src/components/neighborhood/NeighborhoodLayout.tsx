
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import { SectionHeading } from "@/components/ui/section-heading";
import { Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const canonicalUrl = location.pathname;
  const fullTitle = `${title} Property Management - Chicago HOA & Condo Management | Stellar Property Management`;
  const keywords = `${title} property management, ${title} HOA management, ${title} condo management, Chicago property management, ${title} Chicago`;

  return (
    <MainLayout>
      <SEOHead
        title={fullTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords={keywords}
        ogImage="https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Stellar Property Management",
          "description": metaDescription,
          "areaServed": {
            "@type": "Place",
            "name": title
          },
          "serviceType": "Property Management",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5107 North Western Avenue Ste 1S",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60625",
            "addressCountry": "US"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-white/90">{description}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Neighborhood Overview</h2>
              <p className="text-lg text-gray-600 mb-6">Discover what makes this area unique</p>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">{history}</p>
              </div>
              <Button className="mt-4">
                <Link to="/contact" className="flex items-center">
                  Contact Our Local Experts <Building className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2" /> Notable Landmarks
                </h3>
                <ul className="space-y-2">
                  {landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span> {landmark}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">Educational Institutions</h3>
                <ul className="space-y-2">
                  {schools.map((school, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span> {school}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">{`Property Management in ${title}`}</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">{`Why property owners choose Stellar Property Management for ${title}`}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Expert Property Management in {title}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Trust Stellar Property Management to handle your property with the local expertise and professional service you deserve.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-darkBlue">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
