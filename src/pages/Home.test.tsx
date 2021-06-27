import React from 'react';
import { render, screen } from '../../test/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

import Home from './Home';

afterEach(cleanup);

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  render(<Home />);
  const title = screen.getByTestId('title');
  const aboutLink = screen.getByTestId('aboutLink');

  expect(title).toHaveTextContent('Welcome!');
  expect(aboutLink).toHaveTextContent('Go to about');
});


let mockfunction;

beforeAll(() => {
  mockfunction = jest.spyOn(console, 'error');
  mockfunction.mockImplementation(() => { console.log('error occurred')});
})

afterAll(() => {
  mockfunction.mockRestore();
})

const TestError = (): JSX.Element => {
  throw new Error('Error while testing')
}

it(`shows the fallback in case of an error`, () => {
  render(
    <ErrorBoundary >
      <TestError />
    </ErrorBoundary>
  );
  expect(Error).toBeTruthy();
  expect(mockfunction).toHaveBeenCalledTimes(2);
});

beforeEach(() => {
  mockfunction = jest.spyOn(console, 'error').mockImplementation(() => { console.log('error occurred') })
});

afterEach(() => {
  mockfunction.mockRestore();
});