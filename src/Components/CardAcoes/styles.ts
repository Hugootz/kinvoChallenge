import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const Id = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(20)}px;
`;
export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(20)}px;
`;
export const Ticker = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(20)}px;
`;
export const MinimumValue = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(20)}px;
`;
export const Profitability = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(20)}px;
`;