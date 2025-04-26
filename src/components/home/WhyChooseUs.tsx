
import { CircleCheck, Award, Shield, Clock, Building2, Briefcase, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WhyChooseUs() {
  const certifications = [
    "Licensed Property Manager",
    "Insured & Bonded",
    "Chicago-Based"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed Chicago property management company with comprehensive insurance coverage"
    },
    {
      icon: Clock,
      title: "24/7 Response Time",
      description: "Fast, responsive communication with guaranteed 24-hour response times"
    },
    {
      icon: Building2,
      title: "Local Expertise",
      description: "Deep knowledge of Chicago HOA and condo management requirements"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over 20 years managing Chicago properties with 95% client retention"
    },
    {
      icon: Briefcase,
      title: "Professional Team",
      description: "Certified property managers with extensive HOA experience"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Tailored services with clear, upfront pricing to meet your specific needs"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 font-heading text-center">Why Choose Manage369?</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {certifications.map((cert) => (
            <Badge key={cert} variant="outline" className="text-sm py-1 px-4 bg-white">
              {cert}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-none shadow-lg transition-transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <benefit.icon className="h-8 w-8 text-darkBlue" />
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
          <blockquote className="text-lg italic text-gray-700 mb-4">
            "Manage369 transformed our building's operations. Their Chicago property management expertise and responsive team made all the difference!"
          </blockquote>
          <cite className="text-gray-600">– Board President, Lincoln Park HOA</cite>
        </div>
      </div>
    </section>
  );
}

