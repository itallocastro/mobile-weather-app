import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {WeatherModel} from '../../models/weather';
import {client} from '../../config/Http';

export const options: {label: string; value: string}[] = [
  {label: 'Maceió', value: 'Maceió,AL'},
  {label: 'Fortaleza', value: 'Fortaleza,CE'},
  {label: 'São Paulo', value: 'São Paulo,SP'},
  {label: 'Campinas', value: 'Campinas,SP'},
  {label: 'Salvador', value: 'Salvador,SP'},
];
interface Props {
  children: ReactNode;
}

interface ContextProps {
  getByCityName: (cityName?: string) => Promise<void>;
  weatherData: WeatherModel | null;
  loading: boolean;
  selected: {label: string; value: string};
  setSelected: Dispatch<SetStateAction<{label: string; value: string}>>;
}

const WeatherContext = createContext({} as ContextProps);

export const WeatherProvider = ({children}: Props) => {
  const [weatherData, setWeatherData] = useState<WeatherModel | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<{label: string; value: string}>(
    options[0],
  );
  const getByCityName = async (cityName: string = 'Maceió,AL') => {
    try {
      setLoading(true);
      const {data}: {data: {results: WeatherModel}} = await client.get(
        `?key=SUA-CHAVE&city_name=${cityName}`,
      );
      setWeatherData(data.results);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{getByCityName, weatherData, loading, selected, setSelected}}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
