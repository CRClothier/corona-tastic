import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DataCard from './DataCard';

function CountryPage() {
  const { country } = useParams();
  const { countryData } = useSelector((state) => state.countries);
  const countryDataArray = countryData.filter((info) => info.name === country);
  const thisCountryData = countryDataArray[0];

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{country}</h1>
      <DataCard
        totalDeath={thisCountryData.deaths}
        todayDeath={thisCountryData.todayDeaths}
        totalCases={thisCountryData.cases}
        todayCases={thisCountryData.todayCases}
        totalRecovered={thisCountryData.recovered}
        todayRecovered={thisCountryData.todayRecovered}
      />
    </div>
  );
}

export default CountryPage;
