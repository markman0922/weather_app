import axios from 'axios';

const API_KEY = '36decf7c10306c0c7eab49454acbcfd3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
