
import { CircleCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WhyChooseUs() {
  const benefits = [
    "Licensed and Insured Property Management Company",
    "Fast, Responsive Communication",
    "Customized Management Plans",
    "Transparent Financial Reporting",
    "Proven Chicago HOA and Condo Expertise"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-heading text-center">Why Choose Manage369?</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Choosing Manage369 means partnering with a licensed and insured Chicago property management company committed to your community's success. We offer:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-6 w-6 text-darkBlue flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
          <blockquote className="text-lg italic text-gray-700 mb-4">
            "Manage369 has been a game-changer for our building. They're organized, efficient, and always quick to respond!"
          </blockquote>
          <cite className="text-gray-600">– Board President, Chicago</cite>
        </div>
      </div>
    </section>
  );
}

