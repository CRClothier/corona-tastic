import axios from 'axios';

const ORDER_BY_DEATHS = 'ORDER_BY_DEATHS';
const ORDER_BY_NAME = 'ORDER_BY_NAME';
const ORDER_BY_CASES = 'ORDER_BY_CASES';
const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
const API = 'https://disease.sh/v3/covid-19/countries';

const defaultState = {
  filter: 'Name',
  countryData: [
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
  ],
};

function countriesReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_COUNTRIES:
      return {
        ...state,
        countryData: action.newState,
      };
    case ORDER_BY_DEATHS:
      return {
        ...state, countryData: [...state.countryData].sort((a, b) => b.deaths - a.deaths), filter: 'Deaths',
      };
    case ORDER_BY_CASES:
      return {
        countryData: [...state.countryData].sort((a, b) => b.cases - a.cases),
        filter: 'Cases',
      };
    case ORDER_BY_NAME:
      return {
        countryData: [...state.countryData].sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
        filter: 'Name',
      };
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

export function orderByDeaths() {
  return {
    type: ORDER_BY_DEATHS,
    payload: 'Deaths',
  };
}

export function orderByCases() {
  return {
    type: ORDER_BY_CASES,
  };
}

export function orderByNames() {
  return {
    type: ORDER_BY_NAME,
  };
}

export const updateCountriesThunk = () => (dispatch) => axios.get(API)
  .then((res) => res.data)
  .then((data) => {
    const newState = data.map((country) => ({
      name: country.country,
      flag: country.countryInfo.flag,
      cases: country.cases,
      todayCases: country.todayCases,
      deaths: country.deaths,
      todayDeaths: country.todayDeaths,
      recovered: country.recovered,
      todayRecovered: country.todayRecovered,
      active: country.active,
    }));
    dispatch(updateCountries(newState));
  });

export default countriesReducer;
