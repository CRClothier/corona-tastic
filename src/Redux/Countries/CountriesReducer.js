import axios from 'axios';

const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
const API = 'https://disease.sh/v3/covid-19/countries';

const defaultState = [
  {
    name: 'Japan',
    flag: 'https://disease.sh/assets/img/flags/af.png',
    cases: 22,
    todayCases: 2222,
    deaths: 22222,
    todayDeaths: 202250,
    recovered: 22222,
    todayRecovered: 222,
    active: 22,
  },
  {
    name: 'China',
    flag: 'https://disease.sh/assets/img/flags/gb.png',
    cases: 33,
    todayCases: 561333323,
    deaths: 33333,
    todayDeaths: 3,
    recovered: 333333,
    todayRecovered: 3333,
    active: 333,
  },
];

function countriesReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_COUNTRIES:
      return action.newState;
    default:
      return state;
  }
}

export function updateCountries(data) {
  return {
    type: UPDATE_COUNTRIES,
    newState: data,
  };
}

export const updateCountriesThunk = () => (dispatch) => axios.get(API)
  .then((res) => res.data)
  .then((data) => {
    const newState = data.map((country) => ({
      name: country.country,
      flag: country.countryInfo.flag,
      cases: country.cases,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      todayRecovered: 0,
      active: 0,
    }));
    dispatch(updateCountries(newState));
  });

export default countriesReducer;
