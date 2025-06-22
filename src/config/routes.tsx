import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('@/pages/Index')),
    exact: true,
  },
  {
    path: '/services',
    component: lazy(() => import('@/pages/Services')),
  },
  {
    path: '/contact',
    component: lazy(() => import('@/pages/Contact')),
  },
  {
    path: '/request-proposal',
    component: lazy(() => import('@/pages/RequestProposal')),
  },
  {
    path: '/blog',
    component: lazy(() => import('@/pages/Blog')),
  },
  {
    path: '/faqs',
    component: lazy(() => import('@/pages/FAQs')),
  },
  {
    path: '/payments',
    component: lazy(() => import('@/pages/Payments')),
  },
  {
    path: '/forms',
    component: lazy(() => import('@/pages/Forms')),
  },
  {
    path: '/resident-info',
    component: lazy(() => import('@/pages/ResidentInfo')),
  },
  {
    path: '/service-areas',
    component: lazy(() => import('@/pages/service-areas/Chicago')),
    exact: true,
  },
  {
    path: '/service-areas/chicago',
    component: lazy(() => import('@/pages/service-areas/Chicago')),
  },
  {
    path: '/service-areas/north-suburbs',
    component: lazy(() => import('@/pages/service-areas/NorthSuburbs')),
  },
  {
    path: '/neighborhoods',
    component: lazy(() => import('@/pages/neighborhoods/TheLoop')),
    exact: true,
  },
  {
    path: '/neighborhoods/the-loop',
    component: lazy(() => import('@/pages/neighborhoods/TheLoop')),
  },
  {
    path: '/neighborhoods/river-north',
    component: lazy(() => import('@/pages/neighborhoods/RiverNorth')),
  },
  {
    path: '/neighborhoods/gold-coast',
    component: lazy(() => import('@/pages/neighborhoods/GoldCoast')),
  },
  {
    path: '/neighborhoods/lincoln-park',
    component: lazy(() => import('@/pages/neighborhoods/LincolnPark')),
  },
  {
    path: '/neighborhoods/lakeview',
    component: lazy(() => import('@/pages/neighborhoods/Lakeview')),
  },
  {
    path: '/neighborhoods/wicker-park',
    component: lazy(() => import('@/pages/neighborhoods/WickerPark')),
  },
  {
    path: '/neighborhoods/bucktown',
    component: lazy(() => import('@/pages/neighborhoods/Bucktown')),
  },
  {
    path: '/neighborhoods/old-town',
    component: lazy(() => import('@/pages/neighborhoods/OldTown')),
  },
  {
    path: '/neighborhoods/west-loop',
    component: lazy(() => import('@/pages/neighborhoods/WestLoop')),
  },
  {
    path: '/neighborhoods/south-loop',
    component: lazy(() => import('@/pages/neighborhoods/SouthLoop')),
  },
  {
    path: '/neighborhoods/streeterville',
    component: lazy(() => import('@/pages/neighborhoods/Streeterville')),
  },
  {
    path: '/neighborhoods/hyde-park',
    component: lazy(() => import('@/pages/neighborhoods/HydePark')),
  },
  {
    path: '/neighborhoods/uptown',
    component: lazy(() => import('@/pages/neighborhoods/Uptown')),
  },
  {
    path: '/neighborhoods/wrigleyville',
    component: lazy(() => import('@/pages/neighborhoods/Wrigleyville')),
  },
  {
    path: '/neighborhoods/rogers-park',
    component: lazy(() => import('@/pages/neighborhoods/RogersPark')),
  },
  {
    path: '/neighborhoods/edgewater',
    component: lazy(() => import('@/pages/neighborhoods/Edgewater')),
  },
  {
    path: '/neighborhoods/andersonville',
    component: lazy(() => import('@/pages/neighborhoods/Andersonville')),
  },
  {
    path: '/neighborhoods/ravenswood',
    component: lazy(() => import('@/pages/neighborhoods/Ravenswood')),
  },
  {
    path: '/neighborhoods/logan-square',
    component: lazy(() => import('@/pages/neighborhoods/LoganSquare')),
  },
  {
    path: '/neighborhoods/ukrainian-village',
    component: lazy(() => import('@/pages/neighborhoods/UkrainianVillage')),
  },
  {
    path: '/about',
    component: lazy(() => import('@/pages/About')),
  },
  // Add properties route
  {
    path: '/properties',
    component: lazy(() => import('@/pages/Properties')),
  },
  // Add construction request route
  {
    path: '/construction-request',
    component: lazy(() => import('@/pages/ConstructionRequest')),
  },
  // Add repair request route
  {
    path: '/repair-request',
    component: lazy(() => import('@/pages/RepairRequestPage')),
  },
  // Add insurance proof route
  {
    path: '/insurance-proof',
    component: lazy(() => import('@/pages/InsuranceProofPage')),
  },
  // Add move permit route
  {
    path: '/move-permit',
    component: lazy(() => import('@/pages/MovePermitPage')),
  },
  // Add notice of sale route
  {
    path: '/notice-of-sale',
    component: lazy(() => import('@/pages/NoticePage')),
  },
  // Add electronic consent route
  {
    path: '/electronic-consent',
    component: lazy(() => import('@/pages/ElectronicConsentPage')),
  },
  // Add report violation route
  {
    path: '/report-violation',
    component: lazy(() => import('@/pages/ReportViolation')),
  },
  // Add nominations route
  {
    path: '/services/nominations',
    component: lazy(() => import('@/pages/Nominations')),
  },
  // Add resident info route
  {
    path: '/services/resident-info',
    component: lazy(() => import('@/pages/ResidentInfo')),
  },
  // Add blog post route
  {
    path: '/blog/:id',
    component: lazy(() => import('@/pages/BlogPost')),
  },
  // Add community routes
  {
    path: '/communities/rogers-park',
    component: lazy(() => import('@/pages/communities/RogersPark')),
  },
  {
    path: '/communities/west-ridge',
    component: lazy(() => import('@/pages/communities/WestRidge')),
  },
  {
    path: '/communities/edgewater',
    component: lazy(() => import('@/pages/communities/Edgewater')),
  },
  {
    path: '/communities/uptown',
    component: lazy(() => import('@/pages/communities/Uptown')),
  },
  {
    path: '/communities/lincoln-square',
    component: lazy(() => import('@/pages/communities/LincolnSquare')),
  },
  {
    path: '/communities/lincoln-park',
    component: lazy(() => import('@/pages/communities/LincolnPark')),
  },
  {
    path: '/communities/lakeview',
    component: lazy(() => import('@/pages/communities/Lakeview')),
  },
  {
    path: '/communities/the-loop',
    component: lazy(() => import('@/pages/communities/TheLoop')),
  },
  {
    path: '/communities/river-north',
    component: lazy(() => import('@/pages/communities/RiverNorth')),
  },
  {
    path: '/communities/gold-coast',
    component: lazy(() => import('@/pages/communities/GoldCoast')),
  },
  {
    path: '/communities/streeterville',
    component: lazy(() => import('@/pages/communities/Streeterville')),
  },
  {
    path: '/communities/evanston',
    component: lazy(() => import('@/pages/communities/Evanston')),
  },
  {
    path: '/communities/wilmette',
    component: lazy(() => import('@/pages/communities/Wilmette')),
  },
  {
    path: '/communities/highland-park',
    component: lazy(() => import('@/pages/communities/HighlandPark')),
  },
  {
    path: '/communities/bannockburn',
    component: lazy(() => import('@/pages/communities/Bannockburn')),
  },
  {
    path: '/communities/arlington-heights',
    component: lazy(() => import('@/pages/communities/ArlingtonHeights')),
  },
  {
    path: '/communities/schaumburg',
    component: lazy(() => import('@/pages/communities/Schaumburg')),
  },
  {
    path: '/communities/buffalo-grove',
    component: lazy(() => import('@/pages/communities/BuffaloGrove')),
  },
  {
    path: '/communities/:communitySlug',
    component: lazy(() => import('@/pages/communities/CommunityPage')),
  },
  // Add catch-all route for 404
  {
    path: '*',
    component: lazy(() => import('@/pages/NotFound')),
  },
];

export default routes;