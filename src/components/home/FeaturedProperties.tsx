
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
          title="Featured Properties" 
          subtitle="Explore some of the premium properties we manage across Chicago and its suburbs."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <PropertyCard 
            image="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            type="Condo"
            title="Modern Condominium Complex"
            location="North Side, Chicago"
          />
          
          <PropertyCard 
            image="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            type="Apartment"
            title="Luxury Apartment Building"
            location="Downtown Chicago"
          />
          
          <PropertyCard 
            image="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            type="HOA"
            title="Riverside HOA Community"
            location="Chicago Suburbs"
          />
        </div>
      </div>
    </section>
  );
}
