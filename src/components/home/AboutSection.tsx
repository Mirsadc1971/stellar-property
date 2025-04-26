
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-heading text-gray-900">About Manage369</h2>
            
            <p className="mb-6 text-gray-700">
              At Manage369, we believe great communities start with great management. Our team provides full-service property management for homeowner associations (HOAs) and condominium communities across the Chicago area.
            </p>
            <p className="mb-6 text-gray-700">
              We focus on responsive communication, transparent financials, and tailored solutions to help your community thrive.
            </p>
            
            <Button className="mt-2 bg-darkBlue hover:bg-blue-800" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
              alt="Professional Chicago HOA and condo management services by Manage369" 
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
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
