import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useWeather} from '../../providers/weather';
import Background from '../../components/Background';
import WeatherComponent from './Weather.component';
const WeatherContainer = () => {
  const {getByCityName, weatherData, loading} = useWeather();

  useEffect(() => {
    const fetch = async () => {
      await getByCityName();
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <Background weatherData={weatherData}>
        <ActivityIndicator size={'large'} color={'#FFFFFF'} />
      </Background>
    );
  }

  return <WeatherComponent />;
};

export default WeatherContainer;
