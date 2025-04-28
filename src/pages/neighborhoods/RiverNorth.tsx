
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function RiverNorth() {
  return (
    <NeighborhoodLayout
      title="River North, Chicago"
      metaDescription="Expert property management services in River North, Chicago's premier arts and entertainment district. Stellar Property Management offers professional property management for residential and commercial properties in this vibrant neighborhood."
      heroImage="https://images.unsplash.com/photo-1554797589-4e8b99f1d33c"
      description="A dynamic urban neighborhood known for its art galleries, high-end dining, and proximity to Downtown Chicago's business center."
      history="River North, once an industrial area, transformed in the 1970s into a thriving arts and entertainment district. Home to the largest concentration of art galleries outside of Manhattan, the neighborhood has become synonymous with urban sophistication. Its proximity to the Chicago Loop and its mix of historic warehouses converted into lofts and modern high-rises make it a unique and desirable location."
      landmarks={[
        "Chicago Merchandise Mart",
        "Marina City Towers",
        "House of Blues",
        "Chicago Riverwalk",
        "Tribune Tower",
        "Water Tower Place"
      ]}
      schools={[
        "DePaul University - Loop Campus",
        "Robert Morris University",
        "School of the Art Institute of Chicago",
        "Columbia College Chicago",
        "Roosevelt University"
      ]}
      features={[
        "Specialized knowledge of mixed-use property management",
        "Expert handling of historic building renovations",
        "24/7 emergency maintenance for high-rise properties",
        "In-depth understanding of local zoning and building regulations",
        "Strategic marketing for residential and commercial spaces",
        "Comprehensive security and access control solutions"
      ]}
    />
  );
}
