// @ts-ignore
import styled from 'styled-components/native';
import {GlobalText} from '../../../styles';

export const Box = styled.View`
  background-color: rgba(0, 16, 38, 0.3);
  border-radius: 20px;
`;

export const Content = styled.View`
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContentItem = styled(GlobalText)`
  font-weight: 700;
  font-size: 14px;
  color: #ffffff !important;
  line-height: 17px;
`;
