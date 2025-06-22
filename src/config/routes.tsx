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
  // Add routes for communities pages
  {
    path: '/communities',
    component: lazy(() => import('@/pages/neighborhoods/TheLoop')),
    exact: true,
  },
  {
    path: '/communities/the-loop',
    component: lazy(() => import('@/pages/neighborhoods/TheLoop')),
  },
  {
    path: '/communities/river-north',
    component: lazy(() => import('@/pages/neighborhoods/RiverNorth')),
  },
  {
    path: '/communities/gold-coast',
    component: lazy(() => import('@/pages/neighborhoods/GoldCoast')),
  },
  {
    path: '/communities/lincoln-park',
    component: lazy(() => import('@/pages/neighborhoods/LincolnPark')),
  },
  {
    path: '/communities/lakeview',
    component: lazy(() => import('@/pages/neighborhoods/Lakeview')),
  },
  {
    path: '/communities/wicker-park',
    component: lazy(() => import('@/pages/neighborhoods/WickerPark')),
  },
  {
    path: '/communities/bucktown',
    component: lazy(() => import('@/pages/neighborhoods/Bucktown')),
  },
  {
    path: '/communities/old-town',
    component: lazy(() => import('@/pages/neighborhoods/OldTown')),
  },
  {
    path: '/communities/west-loop',
    component: lazy(() => import('@/pages/neighborhoods/WestLoop')),
  },
  {
    path: '/communities/south-loop',
    component: lazy(() => import('@/pages/neighborhoods/SouthLoop')),
  },
  {
    path: '/communities/streeterville',
    component: lazy(() => import('@/pages/neighborhoods/Streeterville')),
  },
  {
    path: '/communities/hyde-park',
    component: lazy(() => import('@/pages/neighborhoods/HydePark')),
  },
  {
    path: '/communities/uptown',
    component: lazy(() => import('@/pages/neighborhoods/Uptown')),
  },
  {
    path: '/communities/wrigleyville',
    component: lazy(() => import('@/pages/neighborhoods/Wrigleyville')),
  },
  {
    path: '/communities/rogers-park',
    component: lazy(() => import('@/pages/neighborhoods/RogersPark')),
  },
  {
    path: '/communities/edgewater',
    component: lazy(() => import('@/pages/neighborhoods/Edgewater')),
  },
  {
    path: '/communities/andersonville',
    component: lazy(() => import('@/pages/neighborhoods/Andersonville')),
  },
  {
    path: '/communities/ravenswood',
    component: lazy(() => import('@/pages/neighborhoods/Ravenswood')),
  },
  {
    path: '/communities/logan-square',
    component: lazy(() => import('@/pages/neighborhoods/LoganSquare')),
  },
  {
    path: '/communities/ukrainian-village',
    component: lazy(() => import('@/pages/neighborhoods/UkrainianVillage')),
  },
  // Add a catch-all route for 404 pages
  {
    path: '*',
    component: lazy(() => import('@/pages/NotFound')),
  },
];

export default routes;