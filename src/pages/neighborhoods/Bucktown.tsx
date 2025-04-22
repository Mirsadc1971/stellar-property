
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Bucktown() {
  return (
    <NeighborhoodLayout
      title="Bucktown, Chicago"
      metaDescription="Expert property management services in Bucktown, Chicago's historic yet modern neighborhood. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="An evolving neighborhood with a mix of historic homes, modern developments, and a thriving art and dining scene."
      history="Bucktown's name originates from the many goats ('bucks') raised in the area during the 19th century when it was settled by Polish immigrants. The neighborhood has transformed significantly over decades, evolving from working-class roots to an artistic enclave in the 1980s and 90s, and now to one of Chicago's most sought-after residential areas. While maintaining its historic charm through preserved worker cottages and vintage architecture, Bucktown has embraced modern development, resulting in a diverse architectural landscape."
      landmarks={[
        "The 606 Elevated Trail",
        "Holstein Park",
        "Damen Avenue Shopping District",
        "Holstein Park Fieldhouse",
        "Senior Citizens Memorial Park",
        "Churchill Field Dog Park"
      ]}
      schools={[
        "Pulaski International School",
        "Burr Elementary School",
        "St. Mary of the Angels School",
        "Lane Tech College Prep (nearby)",
        "Drummond Montessori School"
      ]}
      features={[
        "Single-family home management",
        "Modern condominium management",
        "Historic building preservation",
        "Mixed-use property expertise",
        "Commercial space management",
        "New development oversight"
      ]}
    />
  );
}
