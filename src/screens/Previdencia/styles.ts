import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, TouchableOpacity } from "react-native";
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const DetailsStyle = styled.View`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  top: 15px;
  flex-direction: row;
  border-radius: 17px;
  margin-bottom: 30px;
`;
export const ButtonWrapper = styled(TouchableOpacity)``;
export const Filter = styled.Text`
  padding: 10px;
  left: 4px;
`;

export const ListPrev = styled(FlatList).attrs({
  contentContainerStyle: { padding: 20 },
})`` as React.ComponentType as new <
  ResponseApiPrev
>() => FlatList<ResponseApiPrev>;
