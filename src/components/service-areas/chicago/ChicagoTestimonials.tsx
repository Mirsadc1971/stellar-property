
import TestimonialSchema from "@/components/seo/TestimonialSchema";

const chicagoTestimonials = [
  {
    quote: "Managing our 40-unit building in River North was overwhelming until we found Stellar Property Management. Their deep understanding of Chicago Municipal Code regulations saved us thousands in potential violations. The team's local expertise and rapid response times make them the best property management company in Chicago.",
    author: "Maria Rodriguez",
    title: "HOA Board President",
    community: "River North Condominiums",
    rating: 5
  },
  {
    quote: "The emergency response during last winter's polar vortex was incredible. Stellar had our heating restored in hours, not days like our previous management company. Their 24/7 Chicago emergency services and local vendor network are exactly what downtown properties need.",
    author: "James Chen", 
    title: "Property Owner",
    community: "Downtown High-Rise",
    rating: 5
  },
  {
    quote: "Their expertise with Chicago Department of Buildings requirements made our major renovation project seamless. Stellar's knowledge of local regulations and permit processes saved us months of delays. They're the most professional property management team we've worked with.",
    author: "Sarah Johnson",
    title: "Association Manager",
    community: "Lincoln Park Association",
    rating: 5
  }
];

export default function ChicagoTestimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Chicago Property Management Success Stories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See why Chicago property owners trust Stellar Property Management for their HOA and condo management needs.
          </p>
          <TestimonialSchema testimonials={chicagoTestimonials} />
        </div>
      </div>
    </section>
  );
}
