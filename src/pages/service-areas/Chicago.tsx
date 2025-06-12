
import MainLayout from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import ChicagoHero from "@/components/service-areas/chicago/ChicagoHero";
import ChicagoStats from "@/components/service-areas/chicago/ChicagoStats";
import ChicagoExpertise from "@/components/service-areas/chicago/ChicagoExpertise";
import ChicagoNeighborhoods from "@/components/service-areas/chicago/ChicagoNeighborhoods";
import ChicagoServices from "@/components/service-areas/chicago/ChicagoServices";
import ChicagoTestimonials from "@/components/service-areas/chicago/ChicagoTestimonials";
import ChicagoFAQ from "@/components/service-areas/chicago/ChicagoFAQ";
import ChicagoCTA from "@/components/service-areas/chicago/ChicagoCTA";

export default function Chicago() {
  return (
    <MainLayout>
      <Helmet>
        <title>Chicago Property Management Services | Stellar Property Management</title>
        <meta name="description" content="Expert HOA and condo property management services throughout Chicago. Specialized in urban high-rise management, Chicago Municipal Code compliance, and city regulations." />
      </Helmet>

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
