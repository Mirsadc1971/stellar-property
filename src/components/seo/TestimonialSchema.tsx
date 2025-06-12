
import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  community: string;
  rating?: number;
}

interface TestimonialSchemaProps {
  testimonials: Testimonial[];
  className?: string;
}

export const TestimonialSchema: React.FC<TestimonialSchemaProps> = ({ testimonials, className = "" }) => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stellar Property Management",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewBody": testimonial.quote,
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating || 5,
        "bestRating": 5
      },
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Stellar Property Management"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className={`grid md:grid-cols-3 gap-8 ${className}`}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-darkBlue">
            <div className="text-4xl text-gray-300 mb-4">"</div>
            <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              {testimonial.title && <p className="text-gray-500 text-sm">{testimonial.title}</p>}
              <p className="text-gray-600 text-sm">{testimonial.community}</p>
              {testimonial.rating && (
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialSchema;
