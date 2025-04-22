
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Payments from "./pages/Payments";
import RequestProposal from "./pages/RequestProposal";
import ReportViolation from "./pages/ReportViolation";
import Nominations from "./pages/Nominations";
import NotFound from "./pages/NotFound";
import ResidentInfo from "./pages/ResidentInfo";
import TheLoop from "./pages/neighborhoods/TheLoop";
import RiverNorth from "./pages/neighborhoods/RiverNorth";
import Streeterville from "./pages/neighborhoods/Streeterville";
import SouthLoop from "./pages/neighborhoods/SouthLoop";
import WestLoop from "./pages/neighborhoods/WestLoop";
import LincolnPark from "./pages/neighborhoods/LincolnPark";
import Lakeview from "./pages/neighborhoods/Lakeview";
import GoldCoast from "./pages/neighborhoods/GoldCoast";
import OldTown from "./pages/neighborhoods/OldTown";
import WickerPark from "./pages/neighborhoods/WickerPark";
import Bucktown from "./pages/neighborhoods/Bucktown";
import LoganSquare from "./pages/neighborhoods/LoganSquare";
import Wrigleyville from "./pages/neighborhoods/Wrigleyville";
import UkrainianVillage from "./pages/neighborhoods/UkrainianVillage";
import HydePark from "./pages/neighborhoods/HydePark";
import Uptown from "./pages/neighborhoods/Uptown";
import Andersonville from "./pages/neighborhoods/Andersonville";
import Edgewater from "./pages/neighborhoods/Edgewater";
import RogersPark from "./pages/neighborhoods/RogersPark";
import Ravenswood from "./pages/neighborhoods/Ravenswood";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/nominations" element={<Nominations />} />
              <Route path="/services/resident-info" element={<ResidentInfo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/request-proposal" element={<RequestProposal />} />
              <Route path="/report-violation" element={<ReportViolation />} />
              <Route path="/neighborhoods/the-loop" element={<TheLoop />} />
              <Route path="/neighborhoods/river-north" element={<RiverNorth />} />
              <Route path="/neighborhoods/streeterville" element={<Streeterville />} />
              <Route path="/neighborhoods/south-loop" element={<SouthLoop />} />
              <Route path="/neighborhoods/west-loop" element={<WestLoop />} />
              <Route path="/neighborhoods/lincoln-park" element={<LincolnPark />} />
              <Route path="/neighborhoods/lakeview" element={<Lakeview />} />
              <Route path="/neighborhoods/gold-coast" element={<GoldCoast />} />
              <Route path="/neighborhoods/old-town" element={<OldTown />} />
              <Route path="/neighborhoods/wicker-park" element={<WickerPark />} />
              <Route path="/neighborhoods/bucktown" element={<Bucktown />} />
              <Route path="/neighborhoods/logan-square" element={<LoganSquare />} />
              <Route path="/neighborhoods/wrigleyville" element={<Wrigleyville />} />
              <Route path="/neighborhoods/ukrainian-village" element={<UkrainianVillage />} />
              <Route path="/neighborhoods/hyde-park" element={<HydePark />} />
              <Route path="/neighborhoods/uptown" element={<Uptown />} />
              <Route path="/neighborhoods/andersonville" element={<Andersonville />} />
              <Route path="/neighborhoods/edgewater" element={<Edgewater />} />
              <Route path="/neighborhoods/rogers-park" element={<RogersPark />} />
              <Route path="/neighborhoods/ravenswood" element={<Ravenswood />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;
