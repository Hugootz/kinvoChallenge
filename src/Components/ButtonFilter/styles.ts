import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ButtonFilterProps } from "../ButtonFilter";
import theme from "../../global/theme";

export const Container = styled.View``;
export const ButtonWrapper = styled(TouchableOpacity)``;
export const DetailsStyle = styled.View<ButtonFilterProps>`
  width: 100px;
  height: 40px;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.purple_title : theme.colors.light};
  top: 15px;
  border-radius: 17px;
  margin-bottom: 30px;
  margin: 10px;
`;
export const Filter = styled.Text<ButtonFilterProps>`
  padding: 10px;
  color: ${({ isActive }) =>
    isActive ? theme.colors.light : theme.colors.dark};

  font-weight: bold;
  align-self: center;
`;
