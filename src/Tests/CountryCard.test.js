import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/RootReducer';
import CountryCard from '../components/CountryCard';

test('render countryCard', () => {
  render(<Router path="/Japan"><Provider store={store}><CountryCard /></Provider></Router>);
  expect(screen.getByText(/Toyland/i)).toBeInTheDocument();
});
