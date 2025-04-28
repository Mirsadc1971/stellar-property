
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function TheLoop() {
  return (
    <NeighborhoodLayout
      title="The Loop, Chicago"
      metaDescription="Expert property management services in The Loop, Chicago's central business district. Stellar Property Management offers professional property management for residential and commercial properties in this vibrant downtown area."
      heroImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      description="Chicago's central business district and cultural heart, known for its iconic architecture, world-class theaters, and bustling business community."
      history="The Loop is Chicago's central business district and the seat of Cook County government. Named for the elevated 'L' train tracks that encircle the area, The Loop has been Chicago's commercial core since the city's founding. Today, it's home to world-renowned architecture, theaters, shopping destinations, and Millennium Park, making it one of the most visited neighborhoods in Chicago. Stellar Property Management has been an integral part of The Loop's property management landscape, helping maintain the area's high standards and prestigious reputation."
      landmarks={[
        "Millennium Park & Cloud Gate",
        "Art Institute of Chicago",
        "Willis Tower",
        "Chicago Theatre",
        "Federal Plaza",
        "Harold Washington Library"
      ]}
      schools={[
        "Harold Washington College",
        "School of the Art Institute of Chicago",
        "DePaul University - Loop Campus",
        "Columbia College Chicago",
        "Roosevelt University"
      ]}
      features={[
        "Specialized knowledge of Loop building regulations and compliance requirements",
        "24/7 emergency response system crucial for high-rise properties",
        "Expertise in managing mixed-use properties common in The Loop",
        "Strong relationships with local vendors and service providers",
        "Experience with high-traffic commercial property management",
        "Custom maintenance programs for historic buildings"
      ]}
    />
  );
}
