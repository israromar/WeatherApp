import {combineReducers} from 'redux';

import weatherDetails from './weather-details.reducer';

const appReducer = combineReducers({
  weatherDetails,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
