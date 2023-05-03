import {WeatherModel} from '../../models/weather';
import React, {useState} from 'react';
import {Box} from '../../../styles';
import {
  Animated,
  Image,
  Pressable,
  View,
} from 'react-native';
import {
  ContentText,
  DailyHeader,
  DateText,
  HourByHourContent,
  HourByHourWrapper,
  TodayText,
} from './styles';
import moment from 'moment';
import ScrollView = Animated.ScrollView;
import {conditionsToImage} from "../../utils/optionsToImages";

interface DailyDataProps {
  weatherData: WeatherModel | null;
}
const DailyData: React.FC<DailyDataProps> = ({weatherData}) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <Box rain={weatherData && weatherData.forecast[0].rain_probability > 50}>
      <View style={{padding: 10}}>
        <DailyHeader>
          <TodayText>Today</TodayText>
          <DateText>{moment().format('MMM, D')}</DateText>
        </DailyHeader>
        <HourByHourWrapper>
          <ScrollView horizontal>
            {weatherData?.forecast.map((summaryDay, index) => {
              // @ts-ignore
              const imageUrl = weatherData && conditionsToImage[summaryDay.condition] ? conditionsToImage[summaryDay.condition] : require('../../assets/cloudy_sun.png');
              return (
                <Pressable onPress={() => setSelected(index)} key={index}>
                  <HourByHourContent selected={selected === index}>
                    <ContentText>{summaryDay.max}°C</ContentText>
                    <Image
                      source={imageUrl}
                      resizeMode={'contain'}
                      style={{width: 40, height: 40}}
                    />
                    <ContentText>1{index}.00</ContentText>
                  </HourByHourContent>
                </Pressable>
              );
            })}
          </ScrollView>
        </HourByHourWrapper>
      </View>
    </Box>
  );
};

export default DailyData;
