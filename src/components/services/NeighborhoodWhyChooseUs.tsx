
import { Shield, Award, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NeighborhoodWhyChooseUsProps {
  neighborhood: string;
}

export default function NeighborhoodWhyChooseUs({ neighborhood }: NeighborhoodWhyChooseUsProps) {
  const benefits = [
    {
      icon: Shield,
      title: `${neighborhood} Property Management Expertise`,
      description: `Specialized knowledge of ${neighborhood}'s unique property management requirements and local regulations`
    },
    {
      icon: Building2,
      title: "Local Team",
      description: `Dedicated property managers who understand ${neighborhood}'s specific needs and challenges`
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: `Years of successful property management experience in ${neighborhood} with excellent client satisfaction`
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Why Property Owners Choose Manage369 for {neighborhood} Property Management
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <benefit.icon className="h-8 w-8 text-darkBlue" />
                <div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
