import React from "react";
import { Container } from "./styles";
import { InitialCard } from "../../Components/CardInicial";

export function Desafio({ navigation }) {
  return (
    <Container>
      <InitialCard
        onPress={() => navigation.navigate("Acoes")}
        name="Ações"
        surname="Nacionais"
        icon={"linechart"}
      />
      <InitialCard
        onPress={() => navigation.navigate("Fundos")}
        name="Fundos"
        surname="De investimentos"
        icon={"wallet"}
      />
      <InitialCard
        onPress={() => navigation.navigate("Previdencia")}
        name="Previdências"
        surname="Privadas"
        icon={"Safety"}
      />
    </Container>
  );
}
