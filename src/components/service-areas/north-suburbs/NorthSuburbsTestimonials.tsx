
const suburbanTestimonials = [
  {
    quote: "Our Winnetka community has never looked better. Stellar's attention to our landscaping and seasonal needs really shows they understand suburban living.",
    author: "Jennifer Walsh",
    community: "Winnetka Hills HOA"
  },
  {
    quote: "The pool management and summer programming for our kids has been outstanding. They truly get what suburban families need.",
    author: "Michael Thompson",
    community: "Northbrook Commons"
  },
  {
    quote: "From snow removal to spring landscaping, they handle everything so our residents can just enjoy our beautiful community.",
    author: "Lisa Chang",
    community: "Lake Forest Estates"
  }
];

export default function NorthSuburbsTestimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Happy Suburban Communities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {suburbanTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <div className="text-4xl text-green-300 mb-4">"</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.community}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
