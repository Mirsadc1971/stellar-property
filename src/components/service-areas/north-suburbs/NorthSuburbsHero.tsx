import { OptimizedImage } from "@/components/seo/OptimizedImage";

export default function NorthSuburbsHero() {
  return (
    <section className="relative h-auto min-h-[600px] py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/townhomes copy.jpg"
          alt="Beautiful suburban community in Chicago North Suburbs with professional landscaping and family-friendly neighborhoods"
          className="w-full h-full object-cover"
          priority={true}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center z-10">
        <div className="text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            North Suburbs Professional Community Management Services
          </h1>
          <p className="text-xl mb-6">
            Preserving the suburban lifestyle you love with personalized HOA and community management services 
            designed for family-oriented neighborhoods. From Winnetka to Lake Forest, we understand the unique 
            needs of suburban communities and provide comprehensive property management solutions that maintain 
            your community's character and enhance property values.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Suburban Community Management Excellence</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2">Seasonal Care Programs</h3>
                <p className="text-white/90">Comprehensive year-round maintenance including landscaping, snow removal, and seasonal amenity management tailored for suburban properties.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Family-Focused Services</h3>
                <p className="text-white/90">Recreation facility management, community event support, and family-friendly amenities that strengthen neighborhood bonds and enhance quality of life.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Preserve Your Suburban Community
            </a>
            <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Request Suburban Management Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}