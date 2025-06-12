
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";
import ChicagoHero from "@/components/service-areas/chicago/ChicagoHero";
import ChicagoStats from "@/components/service-areas/chicago/ChicagoStats";
import ChicagoExpertise from "@/components/service-areas/chicago/ChicagoExpertise";
import ChicagoNeighborhoods from "@/components/service-areas/chicago/ChicagoNeighborhoods";
import ChicagoServices from "@/components/service-areas/chicago/ChicagoServices";
import ChicagoTestimonials from "@/components/service-areas/chicago/ChicagoTestimonials";
import ChicagoFAQ from "@/components/service-areas/chicago/ChicagoFAQ";
import ChicagoCTA from "@/components/service-areas/chicago/ChicagoCTA";

export default function Chicago() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: 'Chicago', url: '/service-areas/chicago' }
  ];

  const serviceStructuredData = {
    name: "Chicago Property Management Services",
    description: "Expert HOA and condo property management services throughout Chicago. Specialized in urban high-rise management, Chicago Municipal Code compliance, and city regulations.",
    areaServed: {
      "@type": "City",
      "name": "Chicago",
      "sameAs": "https://en.wikipedia.org/wiki/Chicago"
    },
    serviceType: [
      "Urban High-Rise Management",
      "Chicago Municipal Code Compliance", 
      "Emergency Response Services",
      "24/7 Maintenance Coordination",
      "HOA Board Support",
      "Financial Management"
    ],
    audienceType: "HOA Boards, Condo Associations, Property Owners"
  };

  const faqData = [
    {
      question: "How do you handle Chicago Municipal Code compliance?",
      answer: "Our team stays current with all Chicago regulations, from building codes to zoning requirements. We proactively ensure your property meets all municipal standards and handle all permit applications and inspections."
    },
    {
      question: "What's included in high-rise management services?",
      answer: "High-rise management includes elevator maintenance coordination, security system oversight, emergency evacuation planning, HVAC management for large buildings, and specialized vendor coordination for multi-story properties."
    },
    {
      question: "How quickly can you respond to downtown emergencies?",
      answer: "Our Chicago emergency response team guarantees response within 2 hours for urgent situations. We maintain relationships with downtown vendors who can provide immediate assistance 24/7."
    },
    {
      question: "Do you handle parking management in downtown buildings?",
      answer: "Yes, we coordinate parking management including permit enforcement, guest parking protocols, and coordination with Chicago parking authorities for any violations or disputes."
    }
  ];

  return (
    <MainLayout>
      <SEOHead
        title="Chicago Property Management Services"
        description="Expert HOA and condo property management services throughout Chicago. Specialized in urban high-rise management, Chicago Municipal Code compliance, and city regulations."
        canonical="/service-areas/chicago"
        keywords="Chicago property management, HOA management Chicago, condo management Chicago, downtown property management, Chicago Municipal Code compliance, high-rise management Chicago"
        breadcrumbs={breadcrumbs}
      />

      <StructuredData type="service" data={serviceStructuredData} />
      <StructuredData type="faq" data={faqData} />

      <ChicagoHero />
      <ChicagoStats />
      <ChicagoExpertise />
      <ChicagoNeighborhoods />
      <ChicagoServices />
      <ChicagoTestimonials />
      <ChicagoFAQ />
      <ChicagoCTA />
    </MainLayout>
  );
}
