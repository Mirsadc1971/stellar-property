
import { SectionHeading } from "../ui/section-heading";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 text-2xl text-gray-400">"</div>
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what property owners have to say about working with Manage369."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <TestimonialCard 
            quote="Manage369 has transformed how I handle my investment properties in Chicago. Their team is responsive, professional, and has helped increase my rental income significantly."
            author="Michael Johnson"
            role="Property Owner"
          />
          
          <TestimonialCard 
            quote="As a commercial property owner, I needed a management company that understood the Chicago market. Manage369 has exceeded my expectations in every way."
            author="Sarah Patel"
            role="Commercial Property Owner"
          />
          
          <TestimonialCard 
            quote="I own multiple properties across Chicago suburbs, and Manage369 has made it possible for me to expand my portfolio without taking on additional stress."
            author="David Miller"
            role="Investor"
          />
        </div>
      </div>
    </section>
  );
}
