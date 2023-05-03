import React, {useState} from 'react';
import {WeatherModel} from '../../models/weather';
import {Box} from '../../../styles';
import {Animated, Image, View} from 'react-native';
import {
  DayText,
  NestForecastContent,
  NextForecastHeader,
  NextForecastText,
  NextForecastWrapper,
  TemperatureText,
} from './styles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScrollView = Animated.ScrollView;
import {conditionsToImage} from "../../utils/optionsToImages";

interface NextForecastProps {
  weatherData: WeatherModel | null;
}
const NextForecast: React.FC<NextForecastProps> = ({weatherData}) => {

  return (
    <Box rain={weatherData && weatherData.forecast[0].rain_probability > 50}>
      <View style={{padding: 10}}>
        <NextForecastHeader>
          <NextForecastText>Next Forecast</NextForecastText>
          <MaterialCommunityIcon
            name={'calendar-today'}
            size={24}
            color={'white'}
          />
        </NextForecastHeader>
        <NextForecastWrapper>
          <ScrollView>
            {weatherData?.forecast.map((summaryDay, index) => {
              // @ts-ignore
              const imageUrl = weatherData && conditionsToImage[summaryDay.condition] ? conditionsToImage[summaryDay.condition] : require('../../assets/cloudy_sun.png');
              return (
                <NestForecastContent key={index}>
                  <DayText>{summaryDay.weekday}</DayText>
                  <Image
                    source={imageUrl}
                    resizeMode={'contain'}
                    style={{width: 40, height: 40}}
                  />
                  <View style={{flexDirection: 'row', gap: 10}}>
                    <TemperatureText>{summaryDay.max}°C</TemperatureText>
                    <TemperatureText color={'rgba(255, 255, 255, 0.5)'}>
                      {summaryDay.min}°C
                    </TemperatureText>
                  </View>
                </NestForecastContent>
              );
            })}
          </ScrollView>
        </NextForecastWrapper>
      </View>
    </Box>
  );
};

export default NextForecast;
