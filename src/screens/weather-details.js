/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import weatherIcon from '../assets/images/weather.png';

const WeatherDetails = ({
  weatherInfo: {
    name,
    coord: {lat: latitude, lon: longitude},
    weather,
    main: {humidity, temp, temp_max, temp_min},
    wind,
  },
}) => {
  const [error, setError] = useState(false);
  const [toggleFetch, toogleFetchAgain] = useState(false);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Something went wrong!</Text>
        <TouchableOpacity
          onPress={() => {
            setError(false);
            toogleFetchAgain(!toggleFetch);
          }}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{'Try Again'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <View style={[styles.container, {height: 500}]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            key={new Date().toISOString()}
            coordinate={{
              latitude,
              longitude,
            }}
            title={name}
            description={weather[0].description}
          />
        </MapView>
      </View>
      <View
        style={[
          styles.container,
          {flexDirection: 'row', justifyContent: 'space-around'},
        ]}>
        <View style={styles.leftWrapper}>
          <Text style={styles.title}>{name}</Text>
          <Text style={[styles.subText, {textTransform: 'capitalize'}]}>
            {weather[0].description}
          </Text>
          <Text style={styles.subText}>Humidity: {humidity}</Text>
          <Text style={styles.subText}>Wind Speed: {wind.speed}</Text>
          <Text style={styles.subText}>
            Max. Temp.: {(temp_max - 273.15).toFixed(0)}°c
          </Text>
          <Text style={styles.subText}>
            Min. Temp.: {(temp_min - 273.15).toFixed(0)}°c
          </Text>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.temperature}>{(temp - 273.15).toFixed(0)}°c</Text>
          <Image style={styles.coluds} source={weatherIcon} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: 395,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  leftWrapper: {
    height: '80%',
    justifyContent: 'space-evenly',
  },
  rightWrapper: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 22, fontWeight: 'bold'},
  subText: {
    fontSize: 18,
  },
  temperature: {
    fontSize: 35,
    alignSelf: 'center',
  },
  coluds: {
    height: 100,
    width: 100,
  },
});

export default WeatherDetails;
