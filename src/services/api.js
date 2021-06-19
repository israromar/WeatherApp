import axios from 'axios';
/**
 * Weather App
 * @type {AxiosInstance}
 */
// called endPoint api here
const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
