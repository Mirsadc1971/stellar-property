
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function RogersPark() {
  return (
    <NeighborhoodLayout
      title="Rogers Park, Chicago"
      metaDescription="Expert property management services in Rogers Park, Chicago's diverse northernmost neighborhood. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7"
      description="Chicago's northernmost neighborhood, known for its cultural diversity, beaches, and artistic community."
      history="Rogers Park was incorporated as a village in 1878, named after Irish immigrant Philip Rogers who settled in the area in the 1830s. The neighborhood was annexed to Chicago in 1893 and saw rapid development with the expansion of transit lines. Throughout the 20th century, Rogers Park became one of Chicago's most diverse communities, welcoming immigrants from around the world. Today, it's known for its independent spirit, artistic culture, access to multiple beaches, and the presence of Loyola University Chicago, which has contributed to the neighborhood's ongoing development while maintaining its inclusive character."
      landmarks={[
        "Loyola University Chicago",
        "Rogers Beach Park",
        "Tobey Prinz Beach Park",
        "Mile of Murals",
        "Glenwood Avenue Arts District",
        "Indian Boundary Park"
      ]}
      schools={[
        "Sullivan High School",
        "Gale Community Academy",
        "New Field Elementary School",
        "Jordan Community School",
        "Chicago Math and Science Academy"
      ]}
      features={[
        "Student housing management",
        "Academic institution adjacent expertise",
        "Diverse housing solutions",
        "Vintage building preservation",
        "Lakefront property maintenance",
        "Multi-unit building operations"
      ]}
    />
  );
}
