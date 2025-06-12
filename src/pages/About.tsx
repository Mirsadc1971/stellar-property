
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { OptimizedImage } from "@/components/seo/OptimizedImage";
import { Link } from "react-router-dom";
import { Users, Award, Clock, MapPin } from "lucide-react";

export default function About() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Stellar Property Management",
      "description": "Chicago's trusted property management company specializing in HOA and condo association management with over a decade of experience.",
      "foundingDate": "2010",
      "numberOfEmployees": "15-25",
      "areaServed": ["Chicago", "North Suburbs"],
      "slogan": "Excellence in Property Management"
    }
  };

  return (
    <MainLayout>
      <SEOHead
        title="About Stellar Property Management - Chicago's Trusted HOA & Condo Management Company"
        description="Learn about Stellar Property Management's decade of experience serving Chicago HOAs and condo associations. Professional, reliable property management services with local expertise."
        canonical="/about"
        keywords="about Stellar Property Management, Chicago property management company, HOA management experience, local property management team"
        structuredData={aboutStructuredData}
      />
      
      <SchemaMarkup type="organization" />
      
      {/* Hero Section */}
      <section className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About Stellar Property Management</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Chicago's trusted property management partner with over a decade of experience serving HOAs and condo associations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Stellar Property Management has been serving Chicago's diverse neighborhoods 
                and North Suburbs with comprehensive property management solutions. Our team understands the 
                unique challenges of managing <Link to="/service-areas/chicago" className="text-darkBlue hover:underline">Chicago properties</Link> and 
                works tirelessly to exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From <Link to="/neighborhoods/lincoln-park" className="text-darkBlue hover:underline">Lincoln Park</Link> high-rises to 
                <Link to="/neighborhoods/river-north" className="text-darkBlue hover:underline"> River North</Link> condominiums, 
                we've built our reputation on reliability, transparency, and exceptional service.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to innovation and personalized service has made us one of Chicago's 
                most trusted property management companies, managing millions of dollars in community assets.
              </p>
            </div>
            <div>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
                alt="Stellar Property Management team meeting in Chicago office discussing HOA management strategies"
                className="rounded-lg shadow-lg w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-darkBlue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-darkBlue mb-2">500+</h3>
              <p className="text-gray-600">Properties Managed</p>
            </div>
            <div className="text-center">
              <div className="bg-darkBlue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-darkBlue mb-2">13+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-darkBlue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-darkBlue mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Support</p>
            </div>
            <div className="text-center">
              <div className="bg-darkBlue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-darkBlue mb-2">50+</h3>
              <p className="text-gray-600">Chicago Neighborhoods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                Clear communication and detailed financial reporting ensure you're always informed 
                about your property's performance and community decisions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Chicago's unique property landscape, from downtown condos to 
                suburban communities, gives us the edge in effective management.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold mb-4">Proactive Service</h3>
              <p className="text-gray-600">
                We anticipate needs and address issues before they become problems, protecting 
                your investment and maintaining community standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to Experience the Stellar Difference?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Chicago property owners who trust us with their most valuable assets.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/request-proposal" 
              className="inline-flex items-center bg-white text-darkBlue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Proposal
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-darkBlue transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
