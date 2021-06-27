import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test/test-utils';
import { fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import About from './About';

afterEach(cleanup);

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  render(<About/>);
  const aboutPage = screen.getByTestId('aboutPage');
  const incrementBtn = screen.getByTestId('incrementBtn');
  const currentCount = screen.getByTestId('currentCount');

  expect(aboutPage).toBeTruthy();
  expect(aboutPage.textContent).toBe('About Page');
  expect(aboutPage.className).toBe('');

  expect(incrementBtn).toBeTruthy();
  expect(incrementBtn.textContent).toBe("Increment");

  expect(currentCount).toBeTruthy();
  expect(currentCount.textContent).toBe('Current Count: 0');
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const { getByTestId } = render(<About />);
  const currentCount = getByTestId('currentCount');
  const incrementBtn = getByTestId('incrementBtn');

  expect(currentCount.textContent).toBe('Current Count: 0');
  fireEvent.click(incrementBtn);
  expect(currentCount.textContent).toBe('Current Count: 1');
  fireEvent.click(incrementBtn);
  expect(currentCount.textContent).toBe('Current Count: 2');
});
