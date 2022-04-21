import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import DataCard from './DataCard';

function WorldPage() {
  const data = useSelector((state) => state.world);
  const countryData = useSelector((state) => state.countries);
  const continentsArray = countryData.map((country) => (

    <CountryCard
      key={country.name}
      country={country.name}
      cases={country.cases}
      flag={country.flag}
    />
  ));

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
      {continentsArray}
    </div>
  );
}

export default WorldPage;
