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
    component: lazy(() => import('@/pages/Faqs')),
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
    component: lazy(() => import('@/pages/ServiceAreas')),
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
    component: lazy(() => import('@/pages/Neighborhoods')),
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
];

export default routes;
