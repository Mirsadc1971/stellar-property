
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent } from "../ui/card";
import { OptimizedImage } from "@/components/seo/OptimizedImage";

interface PropertyCardProps {
  image: string;
  type: string;
  title: string;
  location: string;
}

function PropertyCard({ image, type, title, location }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden shadow-md bg-white">
      <div className="h-64 overflow-hidden">
        <OptimizedImage
          src={image}
          alt={`${title} - ${type} in ${location} managed by Stellar Property Management`}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
          loading="lazy"
          width={400}
          height={256}
          aspectRatio="400/256"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6">
        <span className="text-sm font-semibold text-darkBlue">{type}</span>
        <h3 className="text-xl font-heading font-semibold mt-1 mb-2">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </CardContent>
    </Card>
  );
}

export default function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Condominiums" 
          subtitle="Explore some of the condominiums across Chicago and its suburbs."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <PropertyCard 
            image="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            type="Condominium"
            title="Lakefront Condos"
            location="North Side, Chicago"
          />
          
          <PropertyCard 
            image="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
            type="Condominium"
            title="Downtown High-Rise"
            location="Downtown Chicago"
          />
          
          <PropertyCard 
            image="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
            type="Condominium"
            title="Suburban Condo Complex"
            location="Chicago Suburbs"
          />
        </div>
      </div>
    </section>
  );
}
