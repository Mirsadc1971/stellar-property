
import TestimonialSchema from "@/components/seo/TestimonialSchema";

const suburbanTestimonials = [
  {
    quote: "Our Winnetka community has never looked better. Stellar's attention to our landscaping and seasonal maintenance programs really shows they understand suburban living. Their year-round care keeps our property values high and our residents happy.",
    author: "Jennifer Walsh",
    title: "Community Association President",
    community: "Winnetka Hills HOA",
    rating: 5
  },
  {
    quote: "The pool management and summer programming for our kids has been outstanding. Stellar truly gets what suburban families need - safe, well-maintained amenities and community events that bring neighbors together. Best property management decision we've made.",
    author: "Michael Thompson",
    title: "HOA Board Member",
    community: "Northbrook Commons",
    rating: 5
  },
  {
    quote: "From professional snow removal to beautiful spring landscaping, they handle everything so our residents can just enjoy our community. Stellar's suburban management approach is personal, responsive, and exactly what our Lake Forest neighborhood needed.",
    author: "Lisa Chang",
    title: "Property Owner",
    community: "Lake Forest Estates",
    rating: 5
  }
];

export default function NorthSuburbsTestimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Happy North Suburbs Communities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover why North Suburbs communities choose Stellar for professional HOA and community management services.
          </p>
          <TestimonialSchema testimonials={suburbanTestimonials} />
        </div>
      </div>
    </section>
  );
}
