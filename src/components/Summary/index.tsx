import React from 'react';
import {WeatherModel} from '../../models/weather';
import {Image, Pressable} from 'react-native';
import {Badge, Header, SummaryText, Temperature, Wrapper} from './styles';
import Select from '../Select';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {conditionsToImageMain} from '../../utils/optionsToImages';
import {options, useWeather} from '../../providers/weather';

interface HeaderProps {
  weatherData: WeatherModel | null;
}
const Summary: React.FC<HeaderProps> = ({weatherData}) => {
  const {getByCityName, selected, setSelected} = useWeather();

  // @ts-ignore
  const urlImage =
    // @ts-ignore
    weatherData && conditionsToImageMain[weatherData.condition_slug] // @ts-ignore
      ? conditionsToImageMain[weatherData.condition_slug]
      : conditionsToImageMain.otherwise;

  const getWeather = async (item: {label: string; value: string}) => {
    setSelected(item);
    await getByCityName(item.value);
  };
  return (
    <Wrapper>
      <Header>
        <Select
          options={options}
          selected={selected}
          onChange={async item => await getWeather(item)}
          leftIcon={'map-marker-outline'}
        />
        <Pressable>
          <MaterialCommunityIcon
            name={'bell-outline'}
            size={28}
            color={'#FFFFFF'}
          />
          <Badge />
        </Pressable>
      </Header>
      <Image
        source={urlImage}
        resizeMode={'contain'}
        style={{width: 284, height: 207}}
      />
      <Temperature>{weatherData?.temp}°</Temperature>
      <SummaryText>{weatherData?.description}</SummaryText>
      <SummaryText>
        Max.: {weatherData?.forecast[0].max}° Min.:{' '}
        {weatherData?.forecast[0].min}°
      </SummaryText>
    </Wrapper>
  );
};

export default Summary;
