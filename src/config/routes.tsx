
import { lazy } from 'react';

// Lazy load components for better performance
const Index = lazy(() => import('../pages/Index'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQs = lazy(() => import('../pages/FAQs'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const Payments = lazy(() => import('../pages/Payments'));
const RequestProposal = lazy(() => import('../pages/RequestProposal'));
const ReportViolation = lazy(() => import('../pages/ReportViolation'));
const Nominations = lazy(() => import('../pages/Nominations'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ResidentInfo = lazy(() => import('../pages/ResidentInfo'));
const ConstructionRequest = lazy(() => import('../pages/ConstructionRequest'));
const Forms = lazy(() => import('../pages/Forms'));
const NoticePage = lazy(() => import('../pages/NoticePage'));
const ElectronicConsentPage = lazy(() => import('../pages/ElectronicConsentPage'));
const RepairRequestPage = lazy(() => import('../pages/RepairRequestPage'));
const InsuranceProofPage = lazy(() => import('../pages/InsuranceProofPage'));
const MovePermitPage = lazy(() => import('../pages/MovePermitPage'));

// Service Areas
const Chicago = lazy(() => import('../pages/service-areas/Chicago'));
const NorthSuburbs = lazy(() => import('../pages/service-areas/NorthSuburbs'));

// Neighborhoods
const TheLoop = lazy(() => import('../pages/neighborhoods/TheLoop'));
const RiverNorth = lazy(() => import('../pages/neighborhoods/RiverNorth'));
const Streeterville = lazy(() => import('../pages/neighborhoods/Streeterville'));
const SouthLoop = lazy(() => import('../pages/neighborhoods/SouthLoop'));
const WestLoop = lazy(() => import('../pages/neighborhoods/WestLoop'));
const LincolnPark = lazy(() => import('../pages/neighborhoods/LincolnPark'));
const Lakeview = lazy(() => import('../pages/neighborhoods/Lakeview'));
const GoldCoast = lazy(() => import('../pages/neighborhoods/GoldCoast'));
const OldTown = lazy(() => import('../pages/neighborhoods/OldTown'));
const WickerPark = lazy(() => import('../pages/neighborhoods/WickerPark'));
const Bucktown = lazy(() => import('../pages/neighborhoods/Bucktown'));
const LoganSquare = lazy(() => import('../pages/neighborhoods/LoganSquare'));
const Wrigleyville = lazy(() => import('../pages/neighborhoods/Wrigleyville'));
const UkrainianVillage = lazy(() => import('../pages/neighborhoods/UkrainianVillage'));
const HydePark = lazy(() => import('../pages/neighborhoods/HydePark'));
const Uptown = lazy(() => import('../pages/neighborhoods/Uptown'));
const Andersonville = lazy(() => import('../pages/neighborhoods/Andersonville'));
const Edgewater = lazy(() => import('../pages/neighborhoods/Edgewater'));
const RogersPark = lazy(() => import('../pages/neighborhoods/RogersPark'));
const Ravenswood = lazy(() => import('../pages/neighborhoods/Ravenswood'));

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
}

export const routes: RouteConfig[] = [
  // Main pages
  { path: '/', element: Index },
  { path: '/about', element: About },
  { path: '/services', element: Services },
  { path: '/contact', element: Contact },
  { path: '/faqs', element: FAQs },
  { path: '/blog', element: Blog },
  { path: '/blog/:id', element: BlogPost },
  { path: '/payments', element: Payments },
  { path: '/request-proposal', element: RequestProposal },
  { path: '/report-violation', element: ReportViolation },
  { path: '/forms', element: Forms },

  // Services sub-pages
  { path: '/services/nominations', element: Nominations },
  { path: '/services/resident-info', element: ResidentInfo },

  // Service areas
  { path: '/service-areas/chicago', element: Chicago },
  { path: '/service-areas/north-suburbs', element: NorthSuburbs },

  // Neighborhoods
  { path: '/neighborhoods/the-loop', element: TheLoop },
  { path: '/neighborhoods/river-north', element: RiverNorth },
  { path: '/neighborhoods/streeterville', element: Streeterville },
  { path: '/neighborhoods/south-loop', element: SouthLoop },
  { path: '/neighborhoods/west-loop', element: WestLoop },
  { path: '/neighborhoods/lincoln-park', element: LincolnPark },
  { path: '/neighborhoods/lakeview', element: Lakeview },
  { path: '/neighborhoods/gold-coast', element: GoldCoast },
  { path: '/neighborhoods/old-town', element: OldTown },
  { path: '/neighborhoods/wicker-park', element: WickerPark },
  { path: '/neighborhoods/bucktown', element: Bucktown },
  { path: '/neighborhoods/logan-square', element: LoganSquare },
  { path: '/neighborhoods/wrigleyville', element: Wrigleyville },
  { path: '/neighborhoods/ukrainian-village', element: UkrainianVillage },
  { path: '/neighborhoods/hyde-park', element: HydePark },
  { path: '/neighborhoods/uptown', element: Uptown },
  { path: '/neighborhoods/andersonville', element: Andersonville },
  { path: '/neighborhoods/edgewater', element: Edgewater },
  { path: '/neighborhoods/rogers-park', element: RogersPark },
  { path: '/neighborhoods/ravenswood', element: Ravenswood },

  // Forms
  { path: '/construction-request', element: ConstructionRequest },
  { path: '/notice-of-sale', element: NoticePage },
  { path: '/electronic-consent', element: ElectronicConsentPage },
  { path: '/repair-request', element: RepairRequestPage },
  { path: '/insurance-proof', element: InsuranceProofPage },
  { path: '/move-permit', element: MovePermitPage },

  // 404 page
  { path: '*', element: NotFound },
];
