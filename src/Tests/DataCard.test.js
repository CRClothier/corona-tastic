import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/RootReducer';
import DataCard from '../components/DataCard';

test('render dataCard', () => {
  render(<Router path="/Japan"><Provider store={store}><DataCard /></Provider></Router>);
  expect(screen.getByText(/Total Deaths/i)).toBeInTheDocument();
});
