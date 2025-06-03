
import { Link } from "react-router-dom";
import { 
  Building2,
  Calculator,
  Wrench,
  LineChart,
  Users,
  FileText
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
      icon: FileText,
      title: "Compliance Management",
      description: "Covenant enforcement, violation management, and regulatory compliance oversight."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional property management solutions for Chicago communities
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-darkBlue mb-6">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-darkBlue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
