import { ResponseApi } from "./../../@types/api";
import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const ListCard = styled(FlatList).attrs({
  contentContainerStyle: { padding: 20 },
})`` as React.ComponentType as new <ResponseApi>() => FlatList<ResponseApi>;
