
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function LincolnPark() {
  return (
    <NeighborhoodLayout
      title="Lincoln Park, Chicago"
      metaDescription="Expert property management services in Lincoln Park, Chicago's prestigious lakefront neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1599676821464-3555978c0ff4"
      description="An affluent community known for its tree-lined streets, historic buildings, and expansive namesake park."
      history="Lincoln Park has evolved from modest beginnings into one of Chicago's most desirable neighborhoods. Named after the sprawling park along Lake Michigan, the area combines historic architecture with modern amenities. The neighborhood's transformation accelerated in the 1960s, and today it stands as a premier example of successful urban development."
      landmarks={[
        "Lincoln Park Zoo",
        "DePaul University",
        "Lincoln Park Conservatory",
        "North Avenue Beach",
        "Steppenwolf Theatre",
        "Lincoln Hall"
      ]}
      schools={[
        "Lincoln Park High School",
        "Abraham Lincoln Elementary",
        "Oscar Mayer Elementary",
        "St. Clement School",
        "DePaul University"
      ]}
      features={[
        "Historic property preservation",
        "Luxury residential management",
        "Student housing solutions",
        "Mixed-use property expertise",
        "High-end amenity management",
        "Green space proximity management"
      ]}
    />
  );
}
