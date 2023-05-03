import React, {useEffect} from 'react';
import {
  Animated,
  SafeAreaView,
} from 'react-native';
import {useWeather} from '../../providers/weather';
import Header from '../../components/Header';
import BasicData from '../../components/BasicData';
import {Wrapper} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import DailyData from '../../components/DailyData';
import NextForecast from '../../components/NextForecast';
import ScrollView = Animated.ScrollView;
const Weather = () => {
  const {getByUserIP, weatherData} = useWeather();

  useEffect(() => {
    const fetch = async () => {
      await getByUserIP();
    };
    fetch();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#08244F', '#134CB5', '#0B42AB']}
          useAngle
          angle={167.44}
          >
          <Wrapper>
            <Header weatherData={weatherData} />
            <BasicData weatherData={weatherData} />
            <DailyData weatherData={weatherData} />
            <NextForecast weatherData={weatherData} />
          </Wrapper>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Weather;
