import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from 'modules/router/router';

export const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
