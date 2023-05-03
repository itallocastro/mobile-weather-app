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

export const BaseText = styled.Text`
  font-family: 'AlegreyaSans-Medium';
  font-size: 18px;
  line-height: 22px;
`
export const DayText = styled(BaseText)`
  font-weight: 700;
  color: #ffffff;
`;

export const TemperatureText = styled(BaseText)`
  color: ${(props: {color: string}) => (props.color ? props.color : '#FFFFFF')};
`;
