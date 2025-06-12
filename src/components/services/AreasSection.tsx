
import { SectionHeading } from "@/components/ui/section-heading";
import AreaCard from "./AreaCard";
import NeighborhoodWhyChooseUs from "./NeighborhoodWhyChooseUs";
import { useParams } from "react-router-dom";

export default function AreasSection() {
  const { neighborhood } = useParams();

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Chicago Property Management Service Areas" 
          subtitle="Professional property management services throughout Chicago's diverse neighborhoods"
          center
        />
        
        {/* Broader Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
          <AreaCard 
            title="Chicago Property Management"
            areas={[
              "Downtown Chicago",
              "Near North Side",
              "Near South Side",
              "West Side",
              "North Side"
            ]}
            isMainArea={true}
          />
          
          <AreaCard 
            title="North Suburbs Property Management"
            areas={[
              "Evanston",
              "Skokie",
              "Wilmette",
              "Winnetka",
              "Northbrook"
            ]}
            isMainArea={true}
          />
        </div>

        {/* Specific Neighborhoods */}
        <div className="border-t pt-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-darkBlue">Specific Neighborhood Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AreaCard 
              title="The Loop Property Management"
              areas={[
                "The Loop",
                "River North",
                "Streeterville",
                "West Loop",
                "South Loop"
              ]}
            />
            
            <AreaCard 
              title="Lincoln Park Property Management"
              areas={[
                "Lincoln Park",
                "Lakeview",
                "Gold Coast",
                "Old Town",
                "Wrigleyville"
              ]}
            />
            
            <AreaCard 
              title="Wicker Park Property Management"
              areas={[
                "Wicker Park",
                "Bucktown",
                "Logan Square",
                "Ukrainian Village",
                "Ravenswood"
              ]}
            />
            
            <AreaCard 
              title="Uptown Property Management"
              areas={[
                "Uptown",
                "Andersonville",
                "Edgewater",
                "Rogers Park",
                "Hyde Park"
              ]}
            />
          </div>
        </div>

        {neighborhood && <NeighborhoodWhyChooseUs neighborhood={neighborhood} />}
      </div>
    </section>
  );
}
