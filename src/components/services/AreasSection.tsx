
import { SectionHeading } from "@/components/ui/section-heading";
import AreaCard from "./AreaCard";

export default function AreasSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Areas We Serve" 
          subtitle="Manage369 provides property management services throughout Chicago and its surrounding suburbs."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <AreaCard 
            title="Downtown Chicago"
            areas={[
              "The Loop",
              "River North",
              "Streeterville",
              "West Loop",
              "South Loop"
            ]}
          />
          
          <AreaCard 
            title="North Side"
            areas={[
              "Lincoln Park",
              "Lakeview",
              "Gold Coast",
              "Old Town",
              "Wrigleyville"
            ]}
          />
          
          <AreaCard 
            title="Northwest Side"
            areas={[
              "Wicker Park",
              "Bucktown",
              "Logan Square",
              "Ukrainian Village",
              "Ravenswood"
            ]}
          />
          
          <AreaCard 
            title="Northeast Side"
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
    </section>
  );
}
