
const chicagoTestimonials = [
  {
    quote: "Managing our 40-unit building in River North was overwhelming until we found Stellar. Their understanding of Chicago regulations saved us thousands in potential violations.",
    author: "Maria Rodriguez",
    building: "River North Condominiums"
  },
  {
    quote: "The emergency response during the winter storm was incredible. Stellar had our heating restored in hours, not days like our previous management company.",
    author: "James Chen", 
    building: "Downtown High-Rise"
  },
  {
    quote: "Their expertise with Chicago Department of Buildings requirements made our major renovation project seamless.",
    author: "Sarah Johnson",
    building: "Lincoln Park Association"
  }
];

export default function ChicagoTestimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Chicago Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {chicagoTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-gray-300 mb-4">&quot;</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.building}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
