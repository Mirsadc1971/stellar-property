
import FAQSchema from "@/components/seo/FAQSchema";

const northSuburbsFAQs = [
  {
    question: "How does Stellar handle seasonal landscaping and maintenance for North Suburbs communities?",
    answer: "Our comprehensive seasonal programs include spring cleanup and plantings, summer irrigation and maintenance, fall leaf removal and winterization, plus professional snow removal services. We coordinate all seasonal transitions seamlessly, working with trusted local landscaping partners who understand the unique needs of North Shore communities. Our year-round care ensures your suburban property maintains its beautiful appearance through every Chicago season."
  },
  {
    question: "What community amenities does Stellar manage for suburban HOAs?",
    answer: "We provide full management of pools, playgrounds, walking trails, clubhouses, tennis courts, and common areas. This includes regular maintenance, safety inspections, seasonal opening and closing procedures, vendor coordination for repairs or improvements, and compliance with local safety regulations. Our suburban amenity management helps preserve the family-friendly lifestyle that makes North Suburbs communities so desirable."
  },
  {
    question: "How does Stellar support community events and neighborhood activities?",
    answer: "We assist with event planning logistics, coordinate facility usage, manage vendor relationships for community celebrations, ensure activities comply with HOA guidelines and local regulations, and help facilitate resident engagement. Our team understands that suburban communities thrive on neighbor connections and social activities, and we're committed to supporting the events that bring your community together."
  },
  {
    question: "What makes suburban property management different from urban Chicago management?",
    answer: "Suburban communities require specialized focus on extensive landscaping, seasonal outdoor maintenance, family amenities like pools and playgrounds, and community building activities. The pace is more personal, and residents expect individualized attention and involvement in community decisions. Our North Suburbs management approach emphasizes preserving the suburban lifestyle while maintaining property values and community standards."
  },
  {
    question: "How do you maintain property values in competitive North Suburbs markets?",
    answer: "We focus on proactive maintenance, beautiful landscaping, well-maintained amenities, and community programming that enhances desirability. Our management approach includes regular property assessments, preventive maintenance scheduling, vendor quality control, and aesthetic improvements that keep your community competitive in the North Shore real estate market. We understand that property values depend on both physical maintenance and community appeal."
  },
  {
    question: "What emergency services do you provide for suburban communities?",
    answer: "Our suburban emergency services include 24/7 response for heating/cooling failures, plumbing emergencies, storm damage assessment and coordination, power outage management, and security concerns. We maintain relationships with local suburban vendors who understand the unique challenges of residential communities and can respond quickly to preserve resident comfort and safety."
  }
];

export default function NorthSuburbsFAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            North Suburbs Community Management FAQ
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Common questions about professional HOA and community management services in Chicago's North Suburbs.
          </p>
          <FAQSchema faqs={northSuburbsFAQs} />
        </div>
      </div>
    </section>
  );
}
