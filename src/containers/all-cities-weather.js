import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {AppRoute} from '../navigation/app-routes';
import WeatherListScreen from '../screens/all-cities-weather';
import {getAllCitiesWeather} from '../services';
import {
  setWeatherInfoList,
  setWeatherInfo,
} from '../store/actions/weather-details.actions';
// import {LocalNotification} from '../services/push-notifications';
// import NotifService from '../services/push-notifications';

export const AllCitiesWeatherContainer = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCitiesWeather()
      .then(list => {
        dispatch(setWeatherInfoList(list));
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const handlePressItem = info => {
    dispatch(setWeatherInfo(info));
    navigation.navigate(AppRoute.WEATHER_DETAILS);
    // LocalNotification();
    // NotifService.localNotif();
  };

  return <WeatherListScreen loading={loading} onPressItem={handlePressItem} />;
};
