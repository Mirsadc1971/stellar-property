
import { SectionHeading } from "@/components/ui/section-heading";
import ServiceCard from "./ServiceCard";
import { Scale, DollarSign, FileSearch, Wrench, LineChart, Flag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ServicesOfferings() {
  return (
    <section id="services-offerings" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-center">
          Expert HOA & Condo Management Services in Chicago
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Professional property management solutions tailored for Chicago's diverse communities and neighborhoods.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard 
            id="law-compliance"
            icon={<Scale className="h-8 w-8" />}
            emoji="⚖️"
            title="Chicago HOA Compliance"
            description="Expert guidance on local, state, and federal regulations for Chicago HOAs and condominiums."
          />
          
          <ServiceCard 
            id="collection"
            icon={<DollarSign className="h-8 w-8" />}
            emoji="💰"
            title="Assessment Collection"
            description="Professional management of HOA dues, assessments, and financial planning for Chicago properties."
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
            icon={<LineChart className="h-8 w-8" />}
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
        
        <div className="text-center mt-12">
          <Button asChild variant="default" className="bg-darkBlue hover:bg-blue-800">
            <Link to="/request-proposal">Get Started with Professional Property Management</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
