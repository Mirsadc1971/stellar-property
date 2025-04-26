
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
          alt="Chicago Property Management Services by Manage369 - Modern Condominium Building" 
          className="w-full h-full object-cover"
          loading="lazy"
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
            Chicago's Trusted Property Management Experts
          </h1>
          <p 
            className="text-xl text-white/90 mb-8"
            itemProp="description"
          >
            Specialized HOA & Condo Management Services to Maximize Your Community's Success
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-darkBlue hover:bg-blue-800"
              asChild
            >
              <Link to="/request-proposal">Get a Free Management Proposal</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
