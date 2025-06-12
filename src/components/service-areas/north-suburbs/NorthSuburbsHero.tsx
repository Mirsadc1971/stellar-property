
export default function NorthSuburbsHero() {
  return (
    <section 
      className="relative bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518495973542-4542c06a5843)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">North Suburbs Community Management</h1>
          <p className="text-xl mb-8">Preserving the suburban lifestyle you love with personalized management that understands family-oriented communities, beautiful landscapes, and seasonal needs.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Preserve Your Community
            </a>
            <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Request Suburban Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
