import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './Countries/CountriesReducer';
import worldReducer from './World/WorldReducer';

const rootReducer = combineReducers(
  {
    world: worldReducer,
    countries: countriesReducer,
  },
);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
