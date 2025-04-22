import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section 
      className="relative bg-gray-100 overflow-hidden" 
      aria-labelledby="hero-heading"
      itemScope 
      itemType="https://schema.org/Service"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Modern Chicago Property Management - White Concrete Building Exterior by Manage369" 
          className="w-full h-full object-cover"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 
            id="hero-heading" 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            itemProp="name"
          >
            Top-Rated Condominium & HOA Property Management Experts in Chicago
          </h1>
          <p 
            className="text-xl text-white/90 mb-8"
            itemProp="description"
          >
            Dedicated to improving community living, increasing property values, and supporting HOA boards with reliable, full-service solutions tailored to Chicago's unique real estate landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-darkBlue hover:bg-blue-800">
              <Link to="/contact" itemProp="potentialAction">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue">
              <Link to="/services" itemProp="potentialAction">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
