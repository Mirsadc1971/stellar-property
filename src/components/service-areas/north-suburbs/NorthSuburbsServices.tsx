
import { CheckCircle } from "lucide-react";

const suburbanServices = [
  "Comprehensive Landscape Management",
  "Seasonal Maintenance Programs", 
  "Community Amenity Coordination",
  "HOA Rule Enforcement & Mediation",
  "Suburban Vendor Network",
  "Pool & Recreation Facility Management",
  "Snow Removal & Winter Services",
  "Community Event Planning Support",
  "Playground & Common Area Maintenance",
  "Lakefront Property Specialization"
];

export default function NorthSuburbsServices() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Suburban Management Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {suburbanServices.map((service, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
