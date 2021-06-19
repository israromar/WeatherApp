import {weatherConstants} from '../../constants';

export const setWeatherInfoList = list => ({
  type: weatherConstants.WEATHER_INFO_LIST,
  payload: list,
});

export const setWeatherInfo = info => ({
  type: weatherConstants.WEATHER_INFO,
  payload: info,
});
