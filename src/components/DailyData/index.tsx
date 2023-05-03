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

interface DailyDataProps {
  weatherData: WeatherModel | null;
}
const DailyData: React.FC<DailyDataProps> = ({weatherData}) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <Box>
      <View style={{padding: 10}}>
        <DailyHeader>
          <TodayText>Today</TodayText>
          <DateText>{moment().format('MMM, D')}</DateText>
        </DailyHeader>
        <HourByHourWrapper>
          <ScrollView horizontal>
            {weatherData?.forecast.map((summaryDay, index) => {
              return (
                <Pressable onPress={() => setSelected(index)} key={index}>
                  <HourByHourContent selected={selected === index}>
                    <ContentText>{summaryDay.max}°C</ContentText>
                    <Image
                      source={require('../../assets/cloudy.png')}
                      resizeMode={'cover'}
                      style={{width: 45, height: 45}}
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
