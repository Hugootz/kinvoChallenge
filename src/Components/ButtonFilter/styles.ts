import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colorChange } from "../../@types/typesApi";

interface StyledFilterProps {
  activeTheme: boolean;
}

export const Container = styled.View``;
export const ButtonWrapper = styled(TouchableOpacity)``;
export const DetailsStyle = styled.View<StyledFilterProps>`
  width: 100px;
  height: 40px;
  background-color: ${({ activeTheme }) =>
    activeTheme ? "#ffffff" : "#000000"};

  top: 15px;
  border-radius: 17px;
  margin-bottom: 30px;
  margin: 10px;
`;
export const Filter = styled.Text<StyledFilterProps>`
  padding: 10px;
  color: ${({ activeTheme }) => (activeTheme ? "#000000" : "#ffffff")};

  font-weight: bold;
  align-self: center;
`;
