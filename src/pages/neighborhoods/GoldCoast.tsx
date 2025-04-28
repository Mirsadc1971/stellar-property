
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function GoldCoast() {
  return (
    <NeighborhoodLayout
      title="Gold Coast, Chicago"
      metaDescription="Expert property management services in Gold Coast, Chicago's prestigious lakefront neighborhood. Stellar Property Management offers professional property management for residential and commercial properties in this historic area."
      heroImage="https://images.unsplash.com/photo-1581373449483-44867d6afee4"
      description="An affluent historic district known for luxury high-rises, historic mansions, and upscale shopping along Oak Street."
      history="The Gold Coast emerged as Chicago's most exclusive neighborhood following the Great Chicago Fire of 1871. Wealthy Chicagoans built ornate mansions along Lake Shore Drive and the surrounding streets, establishing it as the city's premier residential district. Today, the neighborhood blends historic charm with modern luxury, featuring landmark buildings, designer boutiques, and renowned restaurants."
      landmarks={[
        "Oak Street Beach",
        "Astor Street District",
        "Division Street",
        "Washington Square Park",
        "Rush Street",
        "Magnificent Mile (Adjacent)"
      ]}
      schools={[
        "Latin School of Chicago",
        "Francis W. Parker School",
        "Ogden International School",
        "Walter Payton College Prep (Nearby)",
        "Loyola University Chicago Water Tower Campus"
      ]}
      features={[
        "Luxury property management",
        "Historic building preservation expertise",
        "High-end amenity management",
        "Doorman building operations",
        "Concierge-level service standards",
        "Specialty maintenance for historic properties"
      ]}
    />
  );
}
