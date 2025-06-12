
import { MapPin } from "lucide-react";

const northSuburbCommunities = [
  "Evanston", "Skokie", "Wilmette", "Winnetka", "Northbrook",
  "Glencoe", "Highland Park", "Lake Forest", "Deerfield", "Lincolnshire",
  "Vernon Hills", "Libertyville", "Gurnee", "Waukegan", "North Chicago",
  "Zion", "Lake Bluff", "Lake Zurich", "Buffalo Grove", "Wheeling"
];

export default function NorthSuburbsCommunities() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">North Suburb Communities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {northSuburbCommunities.map((community, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <MapPin className="h-5 w-5 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold text-sm">{community}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
