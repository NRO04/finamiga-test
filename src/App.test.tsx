import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Finamiga', () => {
  render(<App />);
  const linkElement = screen.getByText(/finamiga/i);
  expect(linkElement).toBeInTheDocument();
});
