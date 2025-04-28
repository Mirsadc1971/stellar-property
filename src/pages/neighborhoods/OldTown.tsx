
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function OldTown() {
  return (
    <NeighborhoodLayout
      title="Old Town, Chicago"
      metaDescription="Expert property management services in Old Town, Chicago's historic neighborhood with unique charm. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594262335218-18986eb4a2bd"
      description="A historic neighborhood known for its Victorian-era buildings, comedy clubs, and vibrant arts scene."
      history="Old Town's history dates back to the mid-19th century, surviving the Great Chicago Fire of 1871. The neighborhood has maintained much of its historic charm with tree-lined streets and well-preserved Victorian buildings. In the 1960s and 70s, it became known as a center for folk music, comedy, and counterculture, and today continues to be one of Chicago's most distinctive neighborhoods, blending historic architecture with modern amenities."
      landmarks={[
        "Second City Comedy Club",
        "St. Michael's Church",
        "Old Town Triangle Historic District",
        "The Old Town Ale House",
        "Zanie's Comedy Club",
        "Wells Street Commercial District"
      ]}
      schools={[
        "Lincoln Park High School (Nearby)",
        "LaSalle Language Academy",
        "Franklin Fine Arts Center",
        "Catherine Cook School",
        "Immaculate Conception St. Joseph School"
      ]}
      features={[
        "Historic property preservation",
        "Mixed-use building management",
        "Entertainment venue proximity expertise",
        "Victorian-era building maintenance",
        "Commercial storefront management",
        "Residential property solutions"
      ]}
    />
  );
}
