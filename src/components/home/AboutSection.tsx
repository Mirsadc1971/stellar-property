import ExperienceBadge from "./ExperienceBadge";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-heading text-gray-900">
              Chicago's Trusted Property Management Partner
            </h2>
            
            <p className="mb-6 text-gray-700">
              At Stellar Property Management, we bring over 28 years of Chicago property management expertise to your HOA or condo association. Our locally-based team understands the unique challenges of managing properties in Chicago's diverse neighborhoods.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/townhomes.jpg"
              alt="Stellar Property Management Chicago property management team" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
                e.currentTarget.alt = "Chicago property management services";
              }}
            />
            <ExperienceBadge />
          </div>
        </div>
      </div>
    </section>
  );
}