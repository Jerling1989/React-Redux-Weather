// IMPORT AXIOS
import axios from 'axios';

// WEATHER API INFO
const API_KEY = '43ddad3004e216a2b72d28d891fbe712';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// APPLY TYPE TO VARIABLE
export const FETCH_WEATHER = 'FETCH_WEATHER';

// FETCHWEATHER ACTION CREATOR FUNCTION
export function fetchWeather(city) {
	// SEARCH URL
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	// RETURN ACTION TYPE AND PAYLOAD
	return {
		type: FETCH_WEATHER,
		payload: request
	};
} 
