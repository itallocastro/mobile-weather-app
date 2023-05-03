import {WeatherModel} from '../../models/weather';
import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface BackgroundProps {
  weatherData: WeatherModel | null;
  children: ReactNode;
}
const Background: React.FC<BackgroundProps> = ({weatherData, children}) => {
  const colors =
    weatherData &&
    weatherData.forecast.length > 0 &&
    weatherData.forecast[0].rain_probability > 50
      ? ['#08244F', '#134CB5', '#0B42AB']
      : ['#29B2DD', '#33AADD', '#2DC8EA'];
  return (
    <LinearGradient
      colors={colors}
      useAngle
      angle={167.44}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {children}
    </LinearGradient>
  );
};

export default Background;
