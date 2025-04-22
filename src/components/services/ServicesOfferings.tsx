
import { SectionHeading } from "@/components/ui/section-heading";
import ServiceCard from "./ServiceCard";
import { Scale, DollarSign, FileSearch, Wrench, LineChart, Flag } from "lucide-react";

export default function ServicesOfferings() {
  return (
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
      </div>
    </section>
  );
}
