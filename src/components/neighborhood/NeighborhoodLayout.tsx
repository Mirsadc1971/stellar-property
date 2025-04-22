
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <MainLayout>
      <Helmet>
        <title>{`${title} Property Management - Manage369`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${title} Property Management - Manage369`} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

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
              <SectionHeading 
                title="Neighborhood Overview" 
                subtitle="Discover what makes this area unique"
              />
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
          <SectionHeading 
            title="Property Management in This Area"
            subtitle="Why property owners choose Manage369 for this neighborhood"
            center
          />
          
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
            Trust Manage369 to handle your property with the local expertise and professional service you deserve.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-darkBlue">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
