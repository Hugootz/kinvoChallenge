import React from "react";
import {
  Container,
  FirstTitle,
  SecondTitle,
  IconCard,
  WrapperCard,
  Lock,
} from "./styles";

export function InitialCard({ name, surname, icon, onPress }) {
  return (
    <Container>
      <WrapperCard onPress={onPress}>
        <Lock>
          <IconCard name={icon} />

          <FirstTitle>{name}</FirstTitle>
          <SecondTitle>{surname}</SecondTitle>
        </Lock>
      </WrapperCard>
    </Container>
  );
}
