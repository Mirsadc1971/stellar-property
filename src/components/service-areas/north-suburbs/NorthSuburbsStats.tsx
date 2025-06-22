import { Home, Trees, Calendar, Users } from "lucide-react";

export default function NorthSuburbsStats() {
  return (
    <section className="py-12 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Home className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Suburban Communities</div>
          </div>
          <div>
            <Trees className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm">Landscape Satisfaction</div>
          </div>
          <div>
            <Calendar className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">4</div>
            <div className="text-sm">Seasonal Care</div>
          </div>
          <div>
            <Users className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">28</div>
            <div className="text-sm">Years Suburban Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
}