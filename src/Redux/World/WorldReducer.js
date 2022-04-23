import axios from 'axios';

const UPDATE_WORLD = 'UPDATE_WORLD';
const API = 'https://disease.sh/v3/covid-19/all';

const defaultState = {
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  todayRecovered: 0,
  active: 0,
};

function worldReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_WORLD:
      return action.newState;
    default:
      return state;
  }
}

export function updateWorld(data) {
  return {
    type: UPDATE_WORLD,
    newState: data,
  };
}

export const updateWorldThunk = () => (dispatch) => axios.get(API)
  .then((res) => res.data)
  .then((data) => dispatch(updateWorld(data)));

export default worldReducer;
