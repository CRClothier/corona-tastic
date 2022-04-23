import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/RootReducer';
import WorldPage from '../components/WorldPage';

test('renders WorldPage', () => {
  render(<Router><Provider store={store}><WorldPage /></Provider></Router>);
  expect(screen.getByText(/World Data/i)).toBeInTheDocument();
});
