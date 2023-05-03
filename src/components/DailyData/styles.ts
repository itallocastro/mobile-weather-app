import styled from 'styled-components/native';
import {GlobalText} from '../../../styles';

export const DailyHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`;

export const TodayText = styled(GlobalText)`
  font-size: 20px;
  font-weight: 700;
`;

export const DateText = styled(GlobalText)`
  font-size: 18px;
  font-weight: 400;
`;

export const HourByHourWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin: 14px;
`;

export const HourByHourContent = styled.View`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 10px;
  background-color: ${(props: {selected: boolean}) =>
    props.selected ? 'rgba(72, 153, 227, 0.2);' : 'transparent'};
  filter: blur(1px);
  border: ${(props: {selected: boolean}) =>
    props.selected ? '1px solid #5096ff' : 'none'};
  border-radius: ${(props: {selected: boolean}) =>
    props.selected ? '20px' : '0px'};
`;

export const ContentText = styled(DateText)`
  line-height: 22px;
`;
