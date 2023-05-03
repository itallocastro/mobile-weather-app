/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {WeatherProvider} from './src/providers/weather';
import Weather from './src/modules/Weather';
function App(): JSX.Element {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
}

export default App;
