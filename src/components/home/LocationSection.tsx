
import { Link } from "react-router-dom";
import MapComponent from "@/components/ui/MapComponent";

export default function LocationSection() {
  return (
    <section className="py-16 bg-gray-100" aria-labelledby="location-heading">
      <div className="container mx-auto px-4">
        <h2 id="location-heading" className="font-heading text-3xl font-bold text-center mb-8">
          Centrally Located to Serve All Chicago Communities
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Our strategic location in North Chicago provides easy access to all neighborhoods we serve, from 
              <Link to="/neighborhoods/rogers-park" className="text-darkBlue hover:underline mx-1">Rogers Park</Link> 
              in the north to <Link to="/neighborhoods/hyde-park" className="text-darkBlue hover:underline">Hyde Park</Link> in the south.
            </p>
          </div>
          <MapComponent 
            latitude={41.975938} 
            longitude={-87.691592}
            className="h-[400px] rounded-lg shadow-lg overflow-hidden"
          />
          <div className="text-center mt-6">
            <address className="text-gray-600 not-italic">
              5107 North Western Avenue Ste 1S<br />
              Chicago, Illinois 60625
            </address>
            <p className="text-gray-600 mt-2">
              <Link to="/contact" className="text-darkBlue hover:underline">Contact us</Link> to schedule a consultation 
              for your <Link to="/neighborhoods" className="text-darkBlue hover:underline mx-1">Chicago neighborhood</Link> property
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
