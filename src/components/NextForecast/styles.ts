// @ts-ignore
import styled from 'styled-components/native';
import {GlobalText} from '../../../styles';

export const NextForecastHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`;

export const NextForecastText = styled(GlobalText)`
  font-size: 20px;
  font-weight: 700;
`;

export const NextForecastWrapper = styled.View`
  display: flex;
  margin: 14px;
`;

export const NestForecastContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const DayText = styled(GlobalText)`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;

export const TemperatureText = styled.Text`
  font-family: 'Alegreya Sans';
  font-size: 18px;
  line-height: 22px;
  color: ${(props: {color: string}) => (props.color ? props.color : '#FFFFFF')};
`;
