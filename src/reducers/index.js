// IMPORT METHOD FROM REDUX
import { combineReducers } from 'redux';
// IMPORT REDUCERS
import WeatherReducer from './reducer_weather';

// CREATE COMBINED REDUCER
const rootReducer = combineReducers({
  weather: WeatherReducer
});

// EXPORT COMBINED REDUCER
export default rootReducer;
