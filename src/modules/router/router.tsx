import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'modules/components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);
