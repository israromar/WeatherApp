import http from './api';

/**
 * Get Weather
 * @returns {Promise<T | never>}
 */

const API_KEY = '72aad1f87791e1a93a19cb8f859a0de1';

export const getAllCitiesWeather = () => {
  return new Promise((resolve, reject) => {
    http
      .get(`2.5/find?lat=23.68&lon=90.35&cnt=50&appid=${API_KEY}`)
      .then((data) => {
        resolve(data.data.list);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getWeatherDetails = ({ id }) => {
  return new Promise((resolve, reject) => {
    http
      .get(`games/${id}`)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
