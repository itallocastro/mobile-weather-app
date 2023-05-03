import React, {useState} from 'react';
import {WeatherModel} from '../../models/weather';
import {Image, View} from 'react-native';
import {Summary, Temperature, Wrapper} from './styles';
import {Picker} from "@react-native-picker/picker";

interface HeaderProps {
  weatherData: WeatherModel | null;
}
const Header: React.FC<HeaderProps> = ({weatherData}) => {
  return (
    <Wrapper>
      <Image
        source={require('../../assets/rain.png')} resizeMode={'cover'}
        style={{width: 284, height: 207}}
      />
      <Temperature>{weatherData?.temp}°</Temperature>
      <Summary>{weatherData?.description}</Summary>
      <Summary>
        Max.: {weatherData?.forecast[0].max}° Min.:{' '}
        {weatherData?.forecast[0].min}°
      </Summary>
    </Wrapper>
  );
};

export default Header;
