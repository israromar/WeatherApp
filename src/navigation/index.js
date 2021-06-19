import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AllCitiesWeather, WeatherDetails, ChangeData} from '../containers';
import {AppRoute} from './app-routes';

const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#00804A',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'normal',
  },
};

const options = {
  title: 'WeatherApp',
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.SCREEN_ONE}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={AppRoute.ALL_CITIES_WEATHER}
        component={AllCitiesWeather}
        options={options}
      />
      <Stack.Screen
        name={AppRoute.WEATHER_DETAILS}
        component={WeatherDetails}
        options={options}
      />
      <Stack.Screen name={AppRoute.CHANGE_DATA} component={ChangeData} />
    </Stack.Navigator>
  );
};
