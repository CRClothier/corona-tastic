import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WorldPage from './components/WorldPage';
import CountryPage from './components/CountryPage';
import { updateWorldThunk } from './Redux/World/WorldReducer';
import { updateCountriesThunk } from './Redux/Countries/CountriesReducer';

function App() {
  const dispatch = useDispatch();
  dispatch(updateWorldThunk());
  dispatch(updateCountriesThunk());
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WorldPage />} />
        <Route path="/:country" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
