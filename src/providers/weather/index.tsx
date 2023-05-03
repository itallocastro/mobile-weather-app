import React, {createContext, ReactNode, useContext, useState} from 'react';
import {WeatherModel} from '../../models/weather';
import {client} from '../../config/Http';
interface Props {
  children: ReactNode;
}

interface ContextProps {
  getByUserIP: () => Promise<void>;
  getByCityName: (cityName: string) => Promise<void>;
  weatherData: WeatherModel | null;
}

const WeatherContext = createContext({} as ContextProps);

export const WeatherProvider = ({children}: Props) => {
  const [weatherData, setWeatherData] = useState<WeatherModel | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getByUserIP = async () => {
    try {
      setLoading(true);
      const {data}: {data: {results: WeatherModel}} = await client.get(
        '?key=SUA-CHAVE&user_ip=remote',
      );
      console.log(data);
      setWeatherData(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getByCityName = async (cityName: string) => {
    try {
      setLoading(true);
      const {data}: {data: {result: WeatherModel}} = await client.get(
        `?key=SUA-CHAVE&city_name=${cityName}`,
      );
      setWeatherData(data.result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <WeatherContext.Provider value={{getByUserIP, getByCityName, weatherData}}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
