
import { SectionHeading } from "../ui/section-heading";

interface PropertyCardProps {
  image: string;
  type: string;
  title: string;
  location: string;
}

function PropertyCard({ image, type, title, location }: PropertyCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-semibold text-darkBlue">{type}</span>
        <h3 className="text-xl font-heading font-semibold mt-1 mb-2">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Condominiums" 
          subtitle="Explore some of the condominiums we manage across Chicago and its suburbs."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <PropertyCard 
            image="https://images.unsplash.com/photo-1547319991-f55e4a91ce56"
            type="Residential"
            title="Lakefront Condos"
            location="North Side, Chicago"
          />
          
          <PropertyCard 
            image="https://images.unsplash.com/photo-1502005229762-cf1b2da9c726"
            type="Condominium"
            title="Downtown High-Rise"
            location="Downtown Chicago"
          />
          
          <PropertyCard 
            image="https://images.unsplash.com/photo-1600566753190-17f0a9f1d9ec"
            type="Residential"
            title="Suburban Condo Complex"
            location="Chicago Suburbs"
          />
        </div>
      </div>
    </section>
  );
}

