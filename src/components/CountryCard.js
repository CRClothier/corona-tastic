import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CountryCard(props) {
  const { country, cases, flag } = props;
  return (
    <div className="country-card">
      <Link to={country}>
        <img className="flag" src={flag} alt={country} />
        <h2 className="links">{country}</h2>
        <p className="links">{cases}</p>
      </Link>
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.string,
  cases: PropTypes.number,
  flag: PropTypes.string,
};

CountryCard.defaultProps = {
  country: 'Toyland',
  cases: 1,
  flag: '#',
};

export default CountryCard;
