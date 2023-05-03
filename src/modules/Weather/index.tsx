import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {useWeather} from '../../providers/weather';
import Header from '../../components/Header';
import BasicData from '../../components/BasicData';
import {Wrapper} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import DailyData from "../../components/DailyData";
const Weather = () => {
  const {getByUserIP, weatherData} = useWeather();

  useEffect(() => {
    const fetch = async () => {
      await getByUserIP();
    };
    fetch();
  }, []);

  return (
    <LinearGradient
      colors={['#08244F', '#134CB5', '#0B42AB']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 0.5, 1]}>
      <Wrapper>
        <Header weatherData={weatherData} />
        <BasicData weatherData={weatherData} />
        <DailyData weatherData={weatherData} />
      </Wrapper>
    </LinearGradient>
  );
};

export default Weather;
