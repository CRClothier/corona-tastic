import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/RootReducer';
import WorldPage from '../components/WorldPage';

test('updates cases filter', () => {
  render(<Router><Provider store={store}><WorldPage /></Provider></Router>);
  expect(screen.getByText(/data/i)).toBeInTheDocument();
});

test('updates deaths filter', () => {
  render(<Router><Provider store={store}><WorldPage /></Provider></Router>);
  expect(screen.getByText(/world/i)).toBeInTheDocument();
});

test('updates names filter', () => {
  render(<Router><Provider store={store}><WorldPage /></Provider></Router>);
  expect(screen.getByText(/name/i)).toBeInTheDocument();
});
