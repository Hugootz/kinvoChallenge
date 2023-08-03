import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Title = styled.Text`
  margin-left: 30px;
  margin-top: 70px;
  bottom: 15px;
  color: ${({ theme }) => theme.colors.purple_title};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;
