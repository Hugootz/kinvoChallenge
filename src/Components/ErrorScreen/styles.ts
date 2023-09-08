import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  bottom: 50px;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(19)}px;
  color: ${({ theme }) => theme.colors.gray_dark};
`;
export const SubTitle = styled.Text`
  font-size: ${RFValue(13)}px;
  padding: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_title};
`;
export const RefreshButton = styled(TouchableOpacity)`
  width: 260px;
  height: 45px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.purple_title};
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  align-self: center;
  padding: 11px;
  font-size: ${RFValue(13)}px;
  font-weight: bold;
`;
export const ActivityView = styled.View`
  padding: 10px;
`;
