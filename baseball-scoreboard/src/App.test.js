import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('App renders without crashing', () => {
  render(<App />);
});

test('should be true', () => {
  expect(true).toBe(true);
});

test('contains strikes, balls, outs', () => {
  const { getByText } = render(<App />);
  getByText(/strikes/i);
  getByText(/balls/i);
  getByText(/outs/i);
});

// test('buttons function', () => {
//   const { getByText, getByTestId } = render(<App />);
//   fireEvent.click(getByText('Strike'));
//   expect(getByTestId('strikes')).toBeLessThan(3);
// });
