
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Expert Chicago Property Management Services
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Professional HOA and condominium management solutions tailored for Chicago properties.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="default" className="bg-darkBlue hover:bg-blue-800">
              <Link to="/request-proposal">Request a Proposal</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
