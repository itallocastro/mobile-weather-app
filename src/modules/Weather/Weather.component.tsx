import {useWeather} from '../../providers/weather';
import Background from '../../components/Background';
import {Wrapper} from './styles';
import Summary from '../../components/Summary';
import BasicData from '../../components/BasicData';
import DailyData from '../../components/DailyData';
import NextForecast from '../../components/NextForecast';
import {Animated, SafeAreaView} from 'react-native';
import React from 'react';
import ScrollView = Animated.ScrollView;

const WeatherComponent = () => {
  const {weatherData} = useWeather();
  return (
    <SafeAreaView>
      <ScrollView>
        <Background weatherData={weatherData}>
          <Wrapper>
            <Summary weatherData={weatherData} />
            <BasicData weatherData={weatherData} />
            <DailyData weatherData={weatherData} />
            <NextForecast weatherData={weatherData} />
          </Wrapper>
        </Background>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeatherComponent;
