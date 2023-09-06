import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Details = styled.View`
  width: 350px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 7px;
`;
export const AgroupTitle = styled.View`
  padding-left: 7px;
  padding-top: 5px;
`;
export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.purple_title};
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;
export const Ticker = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(12)}px;
`;
export const WrapperDetails = styled.View`
  align-items: flex-end;
  right: 8px;
`;
export const Button = styled(TouchableOpacity)``;

export const IconOutline = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(22)}px;
  bottom: 40px;
`;
export const ValorMinimo = styled.Text`
  align-self: flex-start;
  bottom: 35px;
  left: 8px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
`;
export const Rentabilidade = styled.Text`
  align-self: flex-start;
  bottom: 26px;
  left: 8px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
`;
export const MinimumValue = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-size: ${RFValue(13)}px;
  top: 10px;
  font-weight: bold;
`;
export const Profitability = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-size: ${RFValue(13)}px;
  top: 15px;
  font-weight: bold;
`;
