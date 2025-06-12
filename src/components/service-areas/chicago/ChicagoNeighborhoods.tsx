
import { MapPin } from "lucide-react";

const chicagoNeighborhoods = [
  "The Loop", "River North", "Streeterville", "West Loop", "South Loop",
  "Lincoln Park", "Lakeview", "Gold Coast", "Old Town", "Wicker Park",
  "Bucktown", "Logan Square", "Ukrainian Village", "Wrigleyville",
  "Uptown", "Andersonville", "Edgewater", "Rogers Park", "Hyde Park"
];

export default function ChicagoNeighborhoods() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Chicago Neighborhoods We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {chicagoNeighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <MapPin className="h-5 w-5 mx-auto mb-2 text-darkBlue" />
                <h3 className="font-semibold text-sm">{neighborhood}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
