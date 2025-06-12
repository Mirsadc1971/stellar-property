
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle } from "lucide-react";

export default function ChicagoExpertise() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Mastering Chicago's Urban Challenges"
            subtitle="From the bustling Loop to historic neighborhoods, we understand the unique demands of managing properties in America's third-largest city."
            center
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-darkBlue">City Regulation Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>Chicago Municipal Code compliance and interpretation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>Department of Buildings permit coordination</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>Fire Department inspection management</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>Zoning and land use consultation</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-darkBlue">High-Rise Specialization</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>Elevator maintenance and emergency protocols</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>High-rise security system coordination</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>Multi-floor emergency evacuation planning</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p>HVAC management for large buildings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
