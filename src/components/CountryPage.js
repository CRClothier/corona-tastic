import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DataCard from './DataCard';
import mic from '../images/mic.png';
import gear from '../images/gear.png';

function CountryPage() {
  const { country } = useParams();
  const { countryData } = useSelector((state) => state.countries);
  const countryDataArray = countryData.filter((info) => info.name === country);
  const thisCountryData = countryDataArray[0];

  return (
    <div className="country-page">
      <header>
        <Link to="/">Back</Link>
        <h1>Country Data</h1>
        <img className="icon" src={mic} alt="mic" />
        <img className="icon" src={gear} alt="mic" />
      </header>
      <div className="world-data">
        <img className="country-flag" src={thisCountryData.flag} alt="World Map" />
        <div>
          <h1>{country}</h1>
          <p>{`${thisCountryData.active} active cases`}</p>
        </div>
      </div>
      <div className="bar">
        <p>DATA AS OF TODAY</p>
      </div>
      <div className="country-data-card">
        <DataCard
          totalDeath={thisCountryData.deaths}
          todayDeath={thisCountryData.todayDeaths}
          totalCases={thisCountryData.cases}
          todayCases={thisCountryData.todayCases}
          totalRecovered={thisCountryData.recovered}
          todayRecovered={thisCountryData.todayRecovered}
        />
      </div>
    </div>
  );
}

export default CountryPage;
