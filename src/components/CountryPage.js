import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DataCard from './DataCard';

function CountryPage() {
  const { country } = useParams();
  const countries = useSelector((state) => state.countries);
  const countryDataArray = countries.filter((info) => info.name === country);
  const countryData = countryDataArray[0];

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{country}</h1>
      <DataCard
        totalDeath={countryData.deaths}
        todayDeath={countryData.todayDeaths}
        totalCases={countryData.cases}
        todayCases={countryData.todayCases}
        totalRecovered={countryData.recovered}
        todayRecovered={countryData.todayRecovered}
      />
    </div>
  );
}

export default CountryPage;
