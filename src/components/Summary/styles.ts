// @ts-ignore
import styled from 'styled-components/native';
import {GlobalText} from '../../../styles';

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: column;
  margin: 10px 0px 31px 0px;
`;

export const SummaryText = styled(GlobalText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;
export const Temperature = styled(GlobalText)`
  font-size: 64px;
  font-weight: bold;
  line-height: 75px;
`;

export const Header = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.View`
  position: absolute;
  top: 4px;
  right: 1px;
  width: 10px;
  height: 10px;
  background-color: #ff7c7c;
  border: 1.39839px solid #47bbe1;
  border-radius: 10px;
`;
