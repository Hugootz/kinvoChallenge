import styled from "styled-components/native";

import { FlatList } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ListFunds = styled(FlatList).attrs({
  contentContainerStyle: { padding: 20 },
})`` as React.ComponentType as new <
  ResponseApiFundos
>() => FlatList<ResponseApiFundos>;
