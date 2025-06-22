import { SectionHeading } from "../ui/section-heading";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Communities We Serve" 
          subtitle="Explore our property management services across Chicago and its suburbs."
          center
        />
        
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide expert property management services for condominiums, HOAs, and residential communities throughout Chicago and the surrounding suburbs.
          </p>
          
          <Button 
            className="bg-darkBlue hover:bg-blue-800"
            asChild
          >
            <Link to="/properties" className="inline-flex items-center">
              View Our Communities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}