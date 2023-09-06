import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ButtonFilterProps } from "../ButtonFilter";

export const Container = styled.View``;
export const ButtonWrapper = styled(TouchableOpacity)``;
export const DetailsStyle = styled.View<ButtonFilterProps>`
  width: 100px;
  height: 40px;
  background-color: ${({ isActive }) => (isActive ? "#000000" : "#ffffff")};
  top: 15px;
  border-radius: 17px;
  margin-bottom: 30px;
  margin: 10px;
`;
export const Filter = styled.Text<ButtonFilterProps>`
  padding: 10px;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#000000")};

  font-weight: bold;
  align-self: center;
`;
