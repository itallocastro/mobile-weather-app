// @ts-ignore
import styled from 'styled-components/native';
import {GlobalText} from '../../../styles';

export const Content = styled.View`
  display: flex;
  //padding: 10px 7px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContentItem = styled(GlobalText)`
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff !important;
  line-height: 17px;
`;
