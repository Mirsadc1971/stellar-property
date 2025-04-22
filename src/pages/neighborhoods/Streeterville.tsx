
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Streeterville() {
  return (
    <NeighborhoodLayout
      title="Streeterville, Chicago"
      metaDescription="Expert property management services in Streeterville, Chicago's luxurious lakefront neighborhood. Manage369 offers professional property management for residential and commercial properties in this upscale area."
      heroImage="https://images.unsplash.com/photo-1599578704297-c84a64957344"
      description="A vibrant lakefront neighborhood home to luxury high-rises, world-class shopping, and Chicago's famous Navy Pier."
      history="Streeterville's unique history begins with George 'Cap' Streeter, who accidentally grounded his boat on a sandbar in 1886. The neighborhood has since transformed into one of Chicago's most prestigious areas, featuring iconic landmarks like Navy Pier and the Magnificent Mile. Its prime location between the Magnificent Mile and Lake Michigan has made it a sought-after destination for luxury living and high-end commercial properties."
      landmarks={[
        "Navy Pier",
        "Museum of Contemporary Art",
        "Northwestern Memorial Hospital",
        "Ohio Street Beach",
        "Magnificent Mile",
        "900 North Michigan Shops"
      ]}
      schools={[
        "Northwestern University - Chicago Campus",
        "Loyola University Chicago - Water Tower Campus",
        "University of Chicago - Gleacher Center",
        "Erikson Institute",
        "Northwestern University Feinberg School of Medicine"
      ]}
      features={[
        "Specialized luxury property management services",
        "24/7 concierge and security solutions",
        "High-rise building expertise",
        "Premium amenity management",
        "Waterfront property maintenance expertise",
        "Tourist area property management solutions"
      ]}
    />
  );
}
