
import FAQSchema from "@/components/seo/FAQSchema";

const chicagoFAQs = [
  {
    question: "How does Stellar Property Management handle Chicago Municipal Code compliance for HOAs and condos?",
    answer: "Our Chicago property management team stays current with all Chicago Municipal Code requirements, including building safety regulations, zoning compliance, and environmental standards. We proactively ensure your HOA or condo association meets all municipal requirements, handle permit applications, coordinate required inspections, and maintain compliance documentation. Our local expertise helps prevent costly violations and keeps your Chicago property in good standing with city authorities."
  },
  {
    question: "What's included in high-rise condo management services in downtown Chicago?",
    answer: "Our Chicago high-rise management services include comprehensive elevator maintenance coordination, advanced security system oversight, emergency evacuation planning and training, specialized HVAC management for multi-story buildings, rooftop and common area maintenance, parking management, and 24/7 emergency response. We understand the unique challenges of managing vertical communities in Chicago's dense urban environment and provide solutions tailored for downtown living."
  },
  {
    question: "How quickly can Stellar respond to property emergencies in Chicago neighborhoods?",
    answer: "Our Chicago emergency response team guarantees response within 2 hours for urgent situations across all Chicago neighborhoods from the Loop to Lincoln Park. We maintain partnerships with local Chicago vendors who provide immediate assistance 24/7, including plumbing, electrical, HVAC, and security services. Our rapid response network is specifically designed for Chicago's urban challenges and weather-related emergencies."
  },
  {
    question: "Do you handle parking management and enforcement in Chicago condo buildings?",
    answer: "Yes, we provide comprehensive parking management for Chicago condo and HOA properties, including permit enforcement, guest parking protocols, violation documentation, coordination with Chicago parking authorities for disputes, snow removal from parking areas, and maintenance of parking facilities. We understand Chicago's unique parking challenges and work to maximize convenience for residents while maintaining order."
  },
  {
    question: "What makes Stellar's Chicago property management different from other companies?",
    answer: "Stellar Property Management specializes exclusively in Chicago and North Suburbs properties, giving us deep local market knowledge that generic management companies lack. We understand Chicago's specific regulations, have established relationships with local vendors, know neighborhood-specific challenges, and provide personalized service that reflects our commitment to Chicago communities. Our team lives and works in Chicago, making us true local experts in property management."
  },
  {
    question: "How do you manage HOA financial reporting and assessments for Chicago properties?",
    answer: "We provide detailed monthly financial reporting, annual budget preparation, assessment collection with multiple payment options, delinquency management following Illinois law, reserve fund planning, and transparent financial documentation through our secure online portal. Our Chicago-focused approach ensures compliance with Illinois Condominium Property Act and local financial regulations while maintaining the financial health of your association."
  }
];

export default function ChicagoFAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Chicago Property Management Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get answers to common questions about professional property management services in Chicago neighborhoods.
          </p>
          <FAQSchema faqs={chicagoFAQs} />
        </div>
      </div>
    </section>
  );
}
