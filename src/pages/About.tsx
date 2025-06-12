
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Users, Award, Shield } from "lucide-react";

export default function About() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Stellar Property Management",
    "description": "Learn about Chicago's trusted property management company with over 20 years of experience managing HOAs and condo associations throughout the city.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Stellar Property Management",
      "foundingDate": "2003",
      "description": "Chicago-based property management company specializing in HOA and condo association management with over 20 years of local expertise.",
      "numberOfEmployees": "15-25",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5107 North Western Avenue Ste 1S",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60625",
        "addressCountry": "US"
      },
      "telephone": "+17737280652",
      "email": "info@stellarpropertygroup.com"
    }
  };

  const stats = [
    { icon: Building, number: "500+", label: "Properties Managed" },
    { icon: Users, number: "20+", label: "Years Experience" },
    { icon: Award, number: "98%", label: "Client Satisfaction" },
    { icon: Shield, number: "24/7", label: "Emergency Response" }
  ];

  return (
    <MainLayout>
      <SEOHead
        title="About Stellar Property Management - Chicago's Trusted HOA Experts"
        description="Learn about Chicago's premier property management company. Over 20 years of experience managing HOAs and condo associations with 98% client satisfaction and 24/7 support."
        canonical="/about"
        keywords="about Stellar Property Management, Chicago property management company, HOA management experts Chicago, property management experience, Chicago condo management team"
        structuredData={aboutStructuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d)' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Chicago's Trusted Property Management Experts
            </h1>
            <p className="text-xl mb-8">
              Over 20 years of dedicated service to Chicago HOAs and condo associations, 
              building stronger communities through professional management.
            </p>
            <Button size="lg" className="bg-darkBlue hover:bg-blue-800" asChild>
              <Link to="/contact">Get to Know Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-darkBlue mx-auto mb-4" />
                <div className="text-3xl font-bold text-darkBlue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Chicago Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2003, Stellar Property Management has grown from a small Chicago startup 
                to one of the city's most trusted property management companies. We've weathered 
                economic changes, adapted to new technologies, and always maintained our commitment 
                to personalized service.
              </p>
              <p className="text-gray-700 mb-6">
                Our deep understanding of Chicago's unique neighborhoods, from downtown high-rises 
                to suburban communities, allows us to provide tailored solutions that work for 
                each property's specific needs.
              </p>
              <p className="text-gray-700">
                Today, we manage over 500 properties across Chicago and the North Suburbs, 
                maintaining a 98% client satisfaction rate through responsive service and 
                transparent communication.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Stellar Property Management Chicago office team working on HOA management solutions"
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-700">
                Clear communication and honest reporting in all our interactions with boards, 
                residents, and vendors.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">Responsiveness</h3>
              <p className="text-gray-700">
                Quick response times and proactive communication ensure issues are addressed 
                before they become problems.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">Expertise</h3>
              <p className="text-gray-700">
                Continuous education and local market knowledge help us provide the best 
                possible service to Chicago communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Stellar Difference?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Chicago HOAs and condo associations who trust 
            Stellar Property Management for their community needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-darkBlue"
              asChild
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-darkBlue hover:bg-gray-100"
              asChild
            >
              <Link to="/request-proposal">Get Free Proposal</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
