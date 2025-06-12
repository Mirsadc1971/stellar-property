
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Building, Users, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface ServiceAreaLayoutProps {
  title: string;
  metaDescription: string;
  heroImage: string;
  description: string;
  overview: string;
  serviceAreas: string[];
  features: string[];
  stats?: {
    propertiesManaged: string;
    yearsExperience: string;
    clientSatisfaction: string;
    responseTime: string;
  };
}

export default function ServiceAreaLayout({
  title,
  metaDescription,
  heroImage,
  description,
  overview,
  serviceAreas,
  features,
  stats = {
    propertiesManaged: "500+",
    yearsExperience: "15+",
    clientSatisfaction: "98%",
    responseTime: "< 4 hrs"
  }
}: ServiceAreaLayoutProps) {
  return (
    <MainLayout>
      <Helmet>
        <title>{title} | Stellar Property Management</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl mb-6">{description}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-darkBlue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Building className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.propertiesManaged}</div>
              <div className="text-sm">Properties Managed</div>
            </div>
            <div>
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.yearsExperience}</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.clientSatisfaction}</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.responseTime}</div>
              <div className="text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Professional Property Management Services"
              subtitle={overview}
              center
            />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Stellar Property Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-darkBlue mr-3 mt-1">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our professional property management services can benefit your community.
          </p>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-darkBlue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us
            </a>
            <a 
              href="/request-proposal" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-darkBlue transition-colors inline-block"
            >
              Request Proposal
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
