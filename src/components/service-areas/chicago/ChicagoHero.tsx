import { OptimizedImage } from "@/components/seo/OptimizedImage";

interface ChicagoHeroProps {}

export default function ChicagoHero({}: ChicagoHeroProps) {
  return (
    <section className="relative h-auto min-h-[600px] py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/townhomes copy.jpg"
          alt="Chicago skyline with downtown high-rise buildings showcasing urban property management opportunities"
          className="w-full h-full object-cover"
          priority={true}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center z-10">
        <div className="text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Chicago's Premier Urban Property Management Company
          </h1>
          <p className="text-xl mb-6">
            Navigating the complexities of Chicago's urban landscape with expert HOA and condo management services. 
            From high-rise buildings in the Loop to historic neighborhoods like Lincoln Park, we deliver professional 
            property management solutions tailored for Chicago's unique real estate market.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Chicago Property Owners Choose Stellar</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2">Local Market Expertise</h3>
                <p className="text-white/90">Deep understanding of Chicago Municipal Code, zoning regulations, and neighborhood-specific requirements for successful property management.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Emergency Response</h3>
                <p className="text-white/90">Rapid response times for downtown emergencies, with local vendor networks and specialized high-rise management protocols.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="bg-darkBlue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Chicago Property Management Expertise
            </a>
            <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-darkBlue transition-colors">
              Request Free Chicago Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}