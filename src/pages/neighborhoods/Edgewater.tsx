
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Edgewater() {
  return (
    <NeighborhoodLayout
      title="Edgewater, Chicago"
      metaDescription="Expert property management services in Edgewater, Chicago's lakefront neighborhood. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1543069931-db20cca57f84"
      description="A lakefront community known for its beaches, historic mansions, and diverse population."
      history="Edgewater was originally developed in the late 19th century as a summer retreat for Chicago's elite, featuring luxurious hotels and mansions along the lakefront. The extension of Lake Shore Drive and the elevated train in the early 20th century transformed it into a residential neighborhood. Over decades, the area evolved from an exclusive enclave to a diverse community welcoming immigrants from around the world. Today, Edgewater is known for its historic architecture, including many vintage apartment buildings and the Bryn Mawr Historic District, while maintaining its welcoming community atmosphere."
      landmarks={[
        "Kathy Osterman Beach",
        "Bryn Mawr Historic District",
        "Berger Park Cultural Center",
        "Edgewater Beach Apartments",
        "Raven Theatre",
        "Broadway Armory Park"
      ]}
      schools={[
        "Senn High School",
        "Swift Elementary School",
        "Hayt Elementary School",
        "Peirce School of International Studies",
        "Northside Catholic Academy"
      ]}
      features={[
        "Vintage apartment building expertise",
        "Lakefront property maintenance",
        "Historic building preservation",
        "Mixed-use development management",
        "Courtyard building operations",
        "Commercial property solutions"
      ]}
    />
  );
}
