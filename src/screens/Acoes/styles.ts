import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text``;
export const ListCard = styled(FlatList).attrs({
  contentContainerStyle: {},
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;
