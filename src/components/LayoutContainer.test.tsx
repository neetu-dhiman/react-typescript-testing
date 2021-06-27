import React from 'react';
import { render } from '../../test/test-utils';
import '@testing-library/jest-dom/extend-expect';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const {
    container,
    history: { navigate },
  } = render(<LayoutContainer />)

  expect(container.innerHTML).toMatch('Welcome!');

  await navigate('/about');
  expect(container.innerHTML).toMatch('About Page');
  expect(container.innerHTML).toMatch('Current Count: 0');

});
