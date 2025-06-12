
import { Leaf, CheckCircle } from "lucide-react";

const seasonalServices = [
  { season: "Spring", services: ["Landscape renovation", "Pool opening", "Irrigation startup", "Common area refresh"] },
  { season: "Summer", services: ["Grounds maintenance", "Recreation management", "Event coordination", "Pest control"] },
  { season: "Fall", services: ["Leaf removal", "Winterization", "Gutter cleaning", "Landscape prep"] },
  { season: "Winter", services: ["Snow removal", "Salt application", "Holiday decorations", "System monitoring"] }
];

export default function NorthSuburbsSeasonalServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Year-Round Suburban Care</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalServices.map((season, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold">{season.season}</h3>
                </div>
                <ul className="space-y-2">
                  {season.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
