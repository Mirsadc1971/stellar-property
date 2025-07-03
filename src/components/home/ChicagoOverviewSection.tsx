import { Link } from "react-router-dom";
import { MapPin, Star, Clock } from "lucide-react";

export default function ChicagoOverviewSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-darkBlue">
            Chicago's Most Trusted Property Management Company
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            For over a decade, Stellar Property Management has been the premier choice for 
            <Link to="/services" className="text-darkBlue hover:underline mx-1">HOA and condo management</Link> 
            throughout Chicago. From luxury <Link to="/neighborhoods/gold-coast" className="text-darkBlue hover:underline">Gold Coast</Link> high-rises 
            to historic <Link to="/neighborhoods/lincoln-park" className="text-darkBlue hover:underline">Lincoln Park</Link> buildings, 
            we understand the unique challenges each neighborhood presents.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-darkBlue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Chicago neighborhoods from 
                <Link to="/neighborhoods/the-loop" className="text-darkBlue hover:underline mx-1">The Loop</Link> 
                to <Link to="/service-areas/north-suburbs" className="text-darkBlue hover:underline">North Suburbs</Link>
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-darkBlue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Hundreds of satisfied communities across Chicago trust our 
                <Link to="/about" className="text-darkBlue hover:underline mx-1">experienced team</Link>
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-darkBlue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock emergency response for all Chicago properties and 
                <Link to="/contact" className="text-darkBlue hover:underline mx-1">resident needs</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}