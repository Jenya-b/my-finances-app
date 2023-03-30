import { createBrowserRouter } from 'react-router-dom';

import { path } from 'modules/router/path';
import { Layout } from 'modules/components/Layout/Layout';
import { FundAllocation, DeferredFunds } from 'modules/pages';

const { home, setAside } = path;

export const router = createBrowserRouter([
  {
    path: home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FundAllocation />,
      },
      {
        path: setAside,
        element: <DeferredFunds />,
      },
    ],
  },
]);
