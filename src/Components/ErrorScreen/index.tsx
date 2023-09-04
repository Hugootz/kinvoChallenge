import React from "react";
import {
  Container,
  Title,
  SubTitle,
  RefreshButton,
  Text,
  ActivityView,
} from "./styles";
import { ActivityIndicator } from "react-native";

interface ErrorProps {
  onPress?: () => void;
  isLoading: boolean;
}

export function ErrorScreen({ onPress, isLoading = false }: ErrorProps) {
  return (
    <Container>
      <Title>OCORREU UM ERRO.</Title>
      <SubTitle>
        Não foi possível se conectar ao banco {"\n"} de fundos.
      </SubTitle>
      <RefreshButton onPress={onPress}>
        {isLoading ? (
          <ActivityView>
            <ActivityIndicator color="#fff" />
          </ActivityView>
        ) : (
          <Text>TENTAR NOVAMENTE</Text>
        )}
      </RefreshButton>
    </Container>
  );
}
