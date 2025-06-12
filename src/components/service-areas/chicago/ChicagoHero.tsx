
interface ChicagoHeroProps {}

export default function ChicagoHero({}: ChicagoHeroProps) {
  return (
    <section 
      className="relative bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1449157291145-7efd050a4d0e)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Chicago&apos;s Premier Urban Property Management</h1>
          <p className="text-xl mb-8">Navigating the complexities of Chicago&apos;s urban landscape with expertise in high-rise management, city regulations, and downtown community needs.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="bg-darkBlue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Chicago Expertise
            </a>
            <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-darkBlue transition-colors">
              Request Urban Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
