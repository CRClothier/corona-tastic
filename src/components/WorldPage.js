import { useDispatch, useSelector } from 'react-redux';
import { orderByCases, orderByDeaths, orderByNames } from '../Redux/Countries/CountriesReducer';
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
      <h1>Covid Data</h1>
      <DataCard
        totalDeath={data.deaths}
        todayDeath={data.todayDeaths}
        totalCases={data.cases}
        todayCases={data.todayCases}
        totalRecovered={data.recovered}
        todayRecovered={data.todayRecovered}
      />
      <div>
        <button type="button" onClick={() => changeFilter()}>
          <p>Filter:</p>
          <p>{state.filter}</p>
        </button>
      </div>
      {continentsArray}
    </div>
  );
}

export default WorldPage;
