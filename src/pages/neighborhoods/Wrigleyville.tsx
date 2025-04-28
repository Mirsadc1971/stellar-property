
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Wrigleyville() {
  return (
    <NeighborhoodLayout
      title="Wrigleyville, Chicago"
      metaDescription="Expert property management services in Wrigleyville, Chicago's iconic baseball neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1566154184435-e3259ca56eb3"
      description="A lively neighborhood centered around historic Wrigley Field, home to the Chicago Cubs and a vibrant entertainment district."
      history="Wrigleyville gets its name from the iconic Wrigley Field, built in 1914 and one of baseball's most historic venues. The neighborhood developed around the ballpark, creating a unique district where residential areas coexist with a spirited entertainment scene. Over the decades, the area has transformed from a simple ballpark neighborhood to a year-round destination for dining, shopping, and nightlife. Recent years have seen significant development with the addition of Gallagher Way plaza and Hotel Zachary, further enhancing the neighborhood while preserving its historic baseball culture."
      landmarks={[
        "Wrigley Field",
        "Gallagher Way",
        "Murphy's Bleachers",
        "Metro Concert Hall",
        "Hotel Zachary",
        "Clark Street Bar District"
      ]}
      schools={[
        "Hamilton Elementary School",
        "Blaine Elementary School",
        "Lake View High School (nearby)",
        "Inter-American Magnet School (nearby)",
        "DePaul University (nearby)"
      ]}
      features={[
        "Game day property management",
        "Entertainment district expertise",
        "Mixed-use building operations",
        "Seasonal rental solutions",
        "Commercial space management",
        "Noise and traffic mitigation strategies"
      ]}
    />
  );
}
