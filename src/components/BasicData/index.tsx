import React from 'react';
import {WeatherModel} from '../../models/weather';
import {Content, ContentItem} from './styles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box} from "../../../styles";

interface BasicDataProps {
  weatherData: WeatherModel | null;
}
const BasicData: React.FC<BasicDataProps> = ({weatherData}) => {
  return (
    <Box rain={weatherData && weatherData.forecast[0].rain_probability > 50}>
      <Content>
        <ContentItem>
          <MaterialCommunityIcon name={'weather-pouring'} size={24} />{'   '}
          {weatherData?.forecast[0].rain_probability}%
        </ContentItem>
        <ContentItem>
          <MaterialCommunityIcon name={'thermometer-high'} size={24} />{'   '}
          {weatherData?.humidity}%
        </ContentItem>
        <ContentItem>
          <MaterialCommunityIcon name={'weather-windy'} size={24} />{'   '}
          {weatherData?.wind_speedy}
        </ContentItem>
      </Content>
    </Box>
  );
};

export default BasicData;
