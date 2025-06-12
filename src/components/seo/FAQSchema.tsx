
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  className?: string;
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs, className = "" }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={`space-y-8 ${className}`}>
        {faqs.map((faq, index) => (
          <div key={index} className="border-l-4 border-darkBlue pl-6 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQSchema;
