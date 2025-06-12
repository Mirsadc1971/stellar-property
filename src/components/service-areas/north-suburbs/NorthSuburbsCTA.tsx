
import { Phone } from "lucide-react";

export default function NorthSuburbsCTA() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Suburban Community?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join the growing number of North Suburb communities that trust Stellar Property Management to preserve their lifestyle and enhance their property values.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            Call Suburban Office
          </a>
          <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
            Get Community Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
