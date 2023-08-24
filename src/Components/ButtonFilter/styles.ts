import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;
export const ButtonWrapper = styled(TouchableOpacity)``;
export const DetailsStyle = styled.View`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  top: 15px;
  border-radius: 17px;
  margin-bottom: 30px;
  margin: 10px;
`;
export const Filter = styled.Text`
  padding: 10px;

  font-weight: bold;
  align-self: center;
`;
