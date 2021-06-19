import React from 'react';
import {useSelector} from 'react-redux';

import WeatherDetailsScreen from '../screens/weather-details';

export const WeatherDetailsContainer = () => {
  const {
    weatherDetails: {weatherInfo},
  } = useSelector(state => state);

  return <WeatherDetailsScreen weatherInfo={weatherInfo} />;
};
