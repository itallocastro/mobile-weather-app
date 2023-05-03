// @ts-ignore
import styled from 'styled-components/native';
import {GlobalText} from "../../../styles";

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: column;
  margin-bottom: 31px;
`;

export const Summary = styled(GlobalText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;
export const Temperature = styled(GlobalText)`
  font-size: 64px;
  font-weight: 600;
  line-height: 75px;
`;
