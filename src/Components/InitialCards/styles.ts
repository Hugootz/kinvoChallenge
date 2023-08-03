import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const WrapperCard = styled(TouchableOpacity)`
  background-color: white;
  width: 300px;
  height: 150px;
  border-radius: 10px;
`;
export const Lock = styled.View`
  align-self: center;
`;
export const FirstTitle = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple_title};
  font-size: ${RFValue(20)}px;
`;
export const SecondTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_title};
  font-weight: bold;
  font-size: ${RFValue(13)}px;
`;
export const IconCard = styled(AntDesign)`
  right: 60px;
  top: 45px;
  font-size: ${RFValue(33)}px;
  margin-right: 40px;
  color: ${({ theme }) => theme.colors.purple_title};
`;
