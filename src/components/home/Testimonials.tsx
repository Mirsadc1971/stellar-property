
import { SectionHeading } from "../ui/section-heading";
import StructuredData from "@/components/seo/StructuredData";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

function TestimonialCard({ quote, author, role, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 text-2xl text-gray-400">"</div>
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
        <div className="flex text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Stellar Property Management has transformed how our HOA operates in Lincoln Park. Their team is responsive, professional, and has helped streamline our building operations significantly.",
      author: "Michael Johnson",
      role: "HOA Board President, Lincoln Park",
      rating: 5
    },
    {
      quote: "As a condo association in River North, we needed a management company that understood downtown Chicago's unique challenges. Stellar Property Management exceeded our expectations in every way.",
      author: "Sarah Patel", 
      role: "Board Treasurer, River North Condo Association",
      rating: 5
    },
    {
      quote: "Managing multiple properties across Chicago suburbs was overwhelming until we partnered with Stellar. Their systematic approach and local expertise made all the difference.",
      author: "David Miller",
      role: "Property Owner, North Suburbs",
      rating: 5
    }
  ];

  const reviewsStructuredData = testimonials.map((testimonial, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": 5
    },
    "author": {
      "@type": "Person",
      "name": testimonial.author
    },
    "reviewBody": testimonial.quote,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Stellar Property Management",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL"
      }
    }
  }));

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Chicago Clients Say" 
          subtitle="Don't just take our word for it. Here's what HOA boards and property owners have to say about working with Stellar Property Management in Chicago."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Add structured data for reviews */}
        {reviewsStructuredData.map((review, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
          />
        ))}
      </div>
    </section>
  );
}
