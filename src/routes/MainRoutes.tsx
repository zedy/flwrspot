// libs
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// components
import Layout from '@/components/layout/Layout';
import FourOhFour from '@/pages/FourOhFour';
import Loadable from '@/components/Loadable';

// renders
const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
const FavoritesPage = Loadable(lazy(() => import('../pages/Favorites')));
const SighthingsPage = Loadable(lazy(() => import('../pages/Sighthings')));
const FlowersPage = Loadable(lazy(() => import('../pages/Flowers')));

/**
 * Router component that mapes our the routes of the app.
 *
 * @returns {RemixRouter}
 */
const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/flowers',
        element: <FlowersPage />,
      },
      {
        path: '/latest-sighthings',
        element: <SighthingsPage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '*',
        element: <FourOhFour />,
      },
    ],
  },
]);

export default BrowserRouter;
