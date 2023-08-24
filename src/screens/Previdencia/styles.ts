import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, TouchableOpacity } from "react-native";
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const WrapperStyle = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const ListPrev = styled(FlatList).attrs({
  contentContainerStyle: { padding: 20 },
})`` as React.ComponentType as new <
  ResponseApiPrev
>() => FlatList<ResponseApiPrev>;
