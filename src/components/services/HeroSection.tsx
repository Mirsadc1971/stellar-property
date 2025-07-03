import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Expert Chicago Property Management Services for HOAs & Condos
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Professional Management Solutions for Chicago Communities
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Comprehensive HOA and condominium management services tailored specifically for Chicago properties. 
            From downtown high-rises to historic neighborhoods, we deliver expert management solutions that 
            protect your investment and enhance community value.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4 text-darkBlue">Why Choose Stellar Property Management?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Local Chicago Expertise</h4>
                <p className="text-sm">Deep knowledge of Chicago Municipal Code, local regulations, and neighborhood-specific requirements for successful property management.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">24/7 Emergency Response</h4>
                <p className="text-sm">Rapid response times with local vendor networks and specialized protocols for Chicago's urban property challenges.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="default" className="bg-darkBlue hover:bg-blue-800">
              <Link to="/request-proposal">Get Free Property Management Proposal</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Speak with Chicago Experts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}