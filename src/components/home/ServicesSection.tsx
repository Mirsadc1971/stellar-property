
import { Link } from "react-router-dom";
import { 
  Building2,
  Calculator,
  Wrench,
  Users,
  FileText,
  Shield
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "HOA Management",
      description: "Complete homeowner association management including board support, governance, and community oversight."
    },
    {
      icon: Building2,
      title: "Condo Management", 
      description: "Professional condominium association management with focus on maintenance and resident communication."
    },
    {
      icon: Calculator,
      title: "Financial Services",
      description: "Accurate budgeting, financial reporting, assessment collections, and delinquency management."
    },
    {
      icon: Wrench,
      title: "Maintenance Coordination",
      description: "24/7 maintenance support with trusted vendor network for routine and emergency repairs."
    },
    {
      icon: Users,
      title: "Board Support",
      description: "Professional meeting facilitation, governance guidance, and administrative assistance."
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Covenant enforcement, violation management, and regulatory compliance oversight."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        {/* Header - Much cleaner like Havelock */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 mb-6 font-heading tracking-tight">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Professional property management solutions for Chicago communities
          </p>
        </div>
        
        {/* Services Grid - Cleaner spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="text-darkBlue mb-8 flex justify-center">
                <service.icon className="h-12 w-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-normal mb-6 text-gray-900 tracking-wide">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light text-base">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA - Cleaner button */}
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-darkBlue text-white px-12 py-4 font-normal text-base hover:bg-blue-800 transition-colors tracking-wide"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
