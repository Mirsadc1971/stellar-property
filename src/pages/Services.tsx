import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, FileText, Wrench, AreaChart, Scale, DollarSign, FileSearch, Flag } from "lucide-react";

export default function Services() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-700">
              Comprehensive property management solutions tailored to Chicago property owners.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Comprehensive Property Management in Chicago" 
              />
              
              <p className="mb-6 text-gray-700">
                At Manage369, we offer a complete range of property management services designed to protect your investment, maximize returns, and minimize your involvement in day-to-day operations.
              </p>
              <p className="mb-6 text-gray-700">
                Whether you own a single property or a diverse portfolio across Chicago and its suburbs, our team of experienced professionals has the expertise and local knowledge to deliver exceptional results.
              </p>
              <p className="mb-6 text-gray-700">
                We understand that each property and owner has unique needs, which is why we offer customized service packages to ensure you receive exactly the support you require.
              </p>
              
              <div className="bg-darkBlue text-white p-6 rounded-lg shadow-lg mt-8">
                <h3 className="font-heading text-xl font-semibold mb-2">Get Started Today</h3>
                <p className="mb-4">Contact us for a free consultation and property assessment.</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164574397-c5b0a83e0a6a"
                alt="Property Management Team"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                onError={(e) => {
                  console.error('Image failed to load', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section id="services-offerings" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Property Management Services" 
            subtitle="Our comprehensive service packages are carefully designed to make property ownership truly hassle-free."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              id="law-compliance"
              icon={<Scale className="h-8 w-8" />}
              emoji="⚖️"
              title="Law Compliance"
              description="We ensure all properties comply with the latest local, state, and federal regulations, so you never have to worry about legal issues."
            />
            
            <ServiceCard 
              id="collection"
              icon={<DollarSign className="h-8 w-8" />}
              emoji="💰"
              title="Collection Assistance"
              description="Our team expertly manages rent invoicing, payment collection, and delinquencies to keep your cash flow steady."
            />
            
            <ServiceCard 
              id="inspections"
              icon={<FileSearch className="h-8 w-8" />}
              emoji="🔎"
              title="Property Inspections"
              description="Regular comprehensive inspections help protect your investment and identify any concerns quickly."
            />
            
            <ServiceCard 
              id="maintenance"
              icon={<Wrench className="h-8 w-8" />}
              emoji="🛠️"
              title="Property Maintenance"
              description="Fast, reliable service for all repair and maintenance needs, including 24/7 emergency support."
            />
            
            <ServiceCard 
              id="financial"
              icon={<AreaChart className="h-8 w-8" />}
              emoji="📊"
              title="Financial Reporting"
              description="Access detailed monthly statements and annual summary reports through our secure online portal."
            />
            
            <ServiceCard 
              id="violations"
              icon={<Flag className="h-8 w-8" />}
              emoji="🚩"
              title="Violation Management"
              description="We promptly address lease and association violations to maintain order and protect your property's reputation."
            />
          </div>

          {/* Remove the Nominations button */}
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Areas We Serve" 
            subtitle="Manage369 provides property management services throughout Chicago and its surrounding suburbs."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AreaCard 
              title="Downtown Chicago"
              areas={[
                "The Loop",
                "River North",
                "Streeterville",
                "West Loop",
                "South Loop"
              ]}
            />
            
            <AreaCard 
              title="North Side"
              areas={[
                "Lincoln Park",
                "Lakeview",
                "Wrigleyville",
                "Uptown",
                "Edgewater"
              ]}
            />
            
            <AreaCard 
              title="Northshore Suburbs"
              areas={[
                "Evanston",
                "Wilmette",
                "Highland Park",
                "Lake Forest",
                "Glencoe"
              ]}
            />
            
            <AreaCard 
              title="Western Suburbs"
              areas={[
                "Oak Park",
                "Evanston",
                "Naperville",
                "Schaumburg",
                "Arlington Heights"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-darkBlue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Property Management?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of property owners in Chicago who trust Manage369 with their valuable investments.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
}

function ServiceCard({ id, icon, emoji, title, description }: ServiceCardProps) {
  return (
    <div id={id} className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface AreaCardProps {
  title: string;
  areas: string[];
}

function AreaCard({ title, areas }: AreaCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-heading text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {areas.map((area, index) => (
          <li key={index} className="flex items-center">
            <span className="text-darkBlue mr-2">•</span>
            <span>{area}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
