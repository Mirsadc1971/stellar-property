
import { Phone } from "lucide-react";

export default function ChicagoCTA() {
  return (
    <section className="py-16 bg-darkBlue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready for Expert Chicago Management?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join hundreds of Chicago property owners who trust Stellar Property Management with their urban communities. Get the city expertise your property deserves.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-white text-darkBlue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            Call Chicago Office
          </a>
          <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-darkBlue transition-colors">
            Get Urban Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
