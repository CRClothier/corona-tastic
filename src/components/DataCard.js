import PropTypes from 'prop-types';

function DataCard(props) {
  const {
    totalDeath,
    todayDeath,
    totalCases,
    todayCases,
    totalRecovered,
    todayRecovered,
  } = props;
  return (
    <div>
      <div>{`Total Deaths: ${totalDeath}`}</div>
      <div>{`Today Deaths: ${todayDeath}`}</div>
      <div>{`Total Cases: ${totalCases}`}</div>
      <div>{`Today Cases: ${todayCases}`}</div>
      <div>{`Total Reecovered: ${totalRecovered}`}</div>
      <div>{`Today Recovered: ${todayRecovered}`}</div>
    </div>
  );
}

DataCard.propTypes = {
  totalDeath: PropTypes.number,
  todayDeath: PropTypes.number,
  totalCases: PropTypes.number,
  todayCases: PropTypes.number,
  totalRecovered: PropTypes.number,
  todayRecovered: PropTypes.number,
};

DataCard.defaultProps = {
  totalDeath: 0,
  todayDeath: 0,
  totalCases: 0,
  todayCases: 0,
  totalRecovered: 0,
  todayRecovered: 0,
};

export default DataCard;
