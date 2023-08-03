import React from "react";
import { Container, Title } from "./styles";
import { InitialCard } from "../../Components/InitialCards";

export function Desafio() {
  return (
    <Container>
      <Title>Desafio</Title>

      <InitialCard first="Ações" second="Nacionais" Icon={"linechart"} />
      <InitialCard first="Fundos" second="De investimentos" Icon={"wallet"} />
      <InitialCard first="Previdências" second="Privadas" Icon={"Safety"} />
    </Container>
  );
}
