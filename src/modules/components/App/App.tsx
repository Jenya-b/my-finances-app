import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from 'modules/router/router';
import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';

export const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading..</div>}>
        <RouterProvider router={router} />
        <GlobalStyles />
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);
