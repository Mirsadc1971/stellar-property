
import { CheckCircle } from "lucide-react";

const urbanServices = [
  "Chicago Municipal Code Compliance",
  "High-Rise Emergency Coordination", 
  "City Permit Navigation & Processing",
  "Multi-Unit Building Inspections",
  "Urban Vendor Network Management",
  "Downtown Parking Management",
  "Noise Ordinance Enforcement",
  "Elevator Maintenance Coordination",
  "Security System Management",
  "Waste Management for High-Density Buildings"
];

export default function ChicagoServices() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Urban Property Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {urbanServices.map((service, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-darkBlue mr-4 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
