
import { SectionHeading } from "@/components/ui/section-heading";
import { Trees, Users, Shield } from "lucide-react";

export default function NorthSuburbsLifestyle() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Understanding Suburban Community Life"
            subtitle="We know suburban communities are more than just properties—they're where families grow, neighbors become friends, and memories are made."
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Beautiful Landscapes</h3>
              <p className="text-gray-600">Professional landscape design and maintenance that keeps your community looking pristine through every season.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Family-Focused</h3>
              <p className="text-gray-600">Management that prioritizes family safety, community events, and amenities that bring neighbors together.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Property Values</h3>
              <p className="text-gray-600">Proactive management that maintains and enhances your property values while preserving your investment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
