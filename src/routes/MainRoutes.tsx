// libs
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// components
import Layout from '@/components/layout/Layout';

// renders
const HomePage = lazy(() => import('../pages/HomePage'));

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

export default BrowserRouter;
