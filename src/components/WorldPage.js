import { useDispatch, useSelector } from 'react-redux';
import { orderByCases, orderByDeaths, orderByNames } from '../Redux/Countries/CountriesReducer';
import mic from '../images/mic.png';
import gear from '../images/gear.png';
import CountryCard from './CountryCard';
import DataCard from './DataCard';

function WorldPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.world);
  const state = useSelector((state) => state.countries);
  const continentsArray = state.countryData.map((country) => (
    <CountryCard
      key={country.name}
      country={country.name}
      cases={country.cases}
      flag={country.flag}
    />
  ));

  const changeFilter = () => {
    if (state.filter === 'Name') {
      dispatch(orderByDeaths());
    } else if (state.filter === 'Deaths') {
      dispatch(orderByCases());
    } else {
      dispatch(orderByNames());
    }
  };

  return (
    <div className="world-page">
      <header>
        <h1>World Data</h1>
        <img className="icon" src={mic} alt="mic" />
        <img className="icon" src={gear} alt="mic" />
      </header>
      <div className="world-data">
        <img className="world-map" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Worldmap-blank.svg" alt="World Map" />
        <DataCard
          totalDeath={data.deaths}
          todayDeath={data.todayDeaths}
          totalCases={data.cases}
          todayCases={data.todayCases}
          totalRecovered={data.recovered}
          todayRecovered={data.todayRecovered}
        />
      </div>
      <div>
        <button type="button" onClick={() => changeFilter()}>
          <p className="filter">{`Filter by ${state.filter}`}</p>
        </button>
      </div>
      <div className="container">
        {continentsArray}
      </div>
    </div>
  );
}

export default WorldPage;
