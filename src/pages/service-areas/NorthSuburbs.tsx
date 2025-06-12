
import MainLayout from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import NorthSuburbsHero from "@/components/service-areas/north-suburbs/NorthSuburbsHero";
import NorthSuburbsStats from "@/components/service-areas/north-suburbs/NorthSuburbsStats";
import NorthSuburbsLifestyle from "@/components/service-areas/north-suburbs/NorthSuburbsLifestyle";
import NorthSuburbsSeasonalServices from "@/components/service-areas/north-suburbs/NorthSuburbsSeasonalServices";
import NorthSuburbsCommunities from "@/components/service-areas/north-suburbs/NorthSuburbsCommunities";
import NorthSuburbsServices from "@/components/service-areas/north-suburbs/NorthSuburbsServices";
import NorthSuburbsTestimonials from "@/components/service-areas/north-suburbs/NorthSuburbsTestimonials";
import NorthSuburbsFAQ from "@/components/service-areas/north-suburbs/NorthSuburbsFAQ";
import NorthSuburbsCTA from "@/components/service-areas/north-suburbs/NorthSuburbsCTA";

export default function NorthSuburbs() {
  return (
    <MainLayout>
      <Helmet>
        <title>North Suburbs Property Management Services | Stellar Property Management</title>
        <meta name="description" content="Premier HOA and community management for Chicago's North Suburbs. Specializing in suburban lifestyle preservation, landscaping, seasonal services, and family-oriented communities." />
      </Helmet>

      <NorthSuburbsHero />
      <NorthSuburbsStats />
      <NorthSuburbsLifestyle />
      <NorthSuburbsSeasonalServices />
      <NorthSuburbsCommunities />
      <NorthSuburbsServices />
      <NorthSuburbsTestimonials />
      <NorthSuburbsFAQ />
      <NorthSuburbsCTA />
    </MainLayout>
  );
}
