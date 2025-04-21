
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/section-heading";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="About Manage369" 
              subtitle="We deliver exceptional property management services tailored to condominium associations and HOAs across Chicago."
            />
            
            <p className="mb-6 text-gray-700">
              We specialize in proactive management that fosters thriving communities, ensures legal compliance, and maximizes property values for owners.
            </p>
            <p className="mb-6 text-gray-700">
              Our dedicated local team partners with boards to provide transparent financial stewardship, prompt maintenance, and effective resident communications. With an in-depth knowledge of Chicago's unique property landscape, we focus solely on association-managed properties—helping communities flourish through attentive, professional service.
            </p>
            
            <Button className="mt-2 bg-darkBlue hover:bg-blue-800">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Modern glass building" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-darkBlue text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold font-heading">20+</p>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
