import { render } from '@testing-library/react';

import { App } from './App';

test('renders App', async () => {
  const tree = render(<App />);

  expect(await tree.findAllByText(/отложено/i)).toHaveLength(1);
});
