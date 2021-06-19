/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const Item = ({title, weatherState, temperature, onPress}) => (
  <TouchableOpacity style={[styles.itemWrapper]} onPress={onPress}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{weatherState}</Text>
    </View>
    <Text style={styles.temperature}>
      {(temperature - 273.15).toFixed(0)}°c
    </Text>
  </TouchableOpacity>
);

const WeatherList = ({loading, onPressItem}) => {
  const {
    weatherDetails: {weatherInfoList},
  } = useSelector(state => state);

  const renderItem = ({item}) => {
    return (
      <Item
        title={item.name}
        weatherState={item.weather[0].main}
        temperature={item.main.temp}
        onPress={() => onPressItem(item)}
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  console.log('weatherInfoList', weatherInfoList);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weatherInfoList && weatherInfoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemWrapper: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 0.5,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temperature: {
    fontSize: 35,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default WeatherList;
