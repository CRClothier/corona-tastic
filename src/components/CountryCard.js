import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CountryCard(props) {
  const { country, cases, flag } = props;
  return (
    <div>
      <Link to={country}>
        <h2>{country}</h2>
        <p>{cases}</p>
        <img src={flag} alt={country} />
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
