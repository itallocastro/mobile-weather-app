// @ts-ignore
import styled from 'styled-components/native';

export const GlobalText = styled.Text`
  font-family: 'SFProDisplay-Regular';
  color: #ffffff;
`;

export const Box = styled.View`
  background-color: ${(props: {rain: number}) => props.rain ? 'rgba(0, 16, 38, 0.3)' : 'rgba(16, 64, 132, 0.3)'};
  border-radius: 20px;
  margin-bottom: 20px;
  min-height: 50px;
  justify-content: center;
`;
