import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {getWeatherDetails} from '../services';

const WeatherDetails = ({weatherInfo}) => {
  console.log(
    '🚀 ~ file: weather-details.js ~ line 14 ~ WeatherDetails ~ id',
    weatherInfo,
  );
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
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>HELLOOOOO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    // position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 380,
    height: 250,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  gameImage: {
    width: 350,
    height: 350,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    top: 40,
    borderWidth: 2,
  },
  appButtonContainer: {
    top: 20,
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default WeatherDetails;
