import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  render(<App />);
  const headlineElement = screen.getByText(/random users/i);
  expect(headlineElement).toBeInTheDocument();
});
