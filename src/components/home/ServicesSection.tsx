
import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/section-heading";
import { 
  Building, 
  ClipboardList, 
  Wrench, 
  LineChart 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
      <div className="text-darkBlue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link to={link} className="text-darkBlue hover:text-blue-700 flex items-center mt-2">
        Learn more <span className="ml-1">→</span>
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="Discover professional property management tailored to Chicago and its suburbs—from leasing to maintenance and financial reporting."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <ServiceCard 
            icon={<Building size={36} />}
            title="Full-Service Property Management"
            description="Turnkey solutions including leasing, maintenance coordination, tenant relations, and rent collection for residential and commercial properties in Chicago and suburbs."
            link="/services#full-service"
          />
          
          <ServiceCard 
            icon={<ClipboardList size={36} />}
            title="Administrative Services"
            description="Professional handling of all paperwork, record-keeping, compliance matters, and resident communications to ensure smooth operation of your property."
            link="/services#administrative"
          />
          
          <ServiceCard 
            icon={<Wrench size={36} />}
            title="Maintenance Coordination"
            description="24/7 repair handling and preventative maintenance with our trusted network—protect your assets and ensure tenant satisfaction, worry-free."
            link="/services#maintenance"
          />
          
          <ServiceCard 
            icon={<LineChart size={36} />}
            title="Financial Reporting"
            description="Detailed income and expense statements, transparent owner portals, and end-of-year tax preparation for total financial clarity."
            link="/services#financial"
          />
        </div>
      </div>
    </section>
  );
}
