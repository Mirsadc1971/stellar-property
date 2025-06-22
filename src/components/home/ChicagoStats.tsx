import { Building, Shield, Clock, Users } from "lucide-react";

export default function ChicagoStats() {
  return (
    <section className="py-12 bg-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Building className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Chicago Properties</div>
          </div>
          <div>
            <Clock className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Emergency Response</div>
          </div>
          <div>
            <Shield className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">17</div>
            <div className="text-sm">Communities</div>
          </div>
          <div>
            <Users className="h-10 w-10 mx-auto mb-3" />
            <div className="text-2xl font-bold">28</div>
            <div className="text-sm">Years Downtown</div>
          </div>
        </div>
      </div>
    </section>
  );
}