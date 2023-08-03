import React from "react";
import {
  Container,
  FirstTitle,
  SecondTitle,
  IconCard,
  WrapperCard,
  Lock,
} from "./styles";

export function InitialCard({ first, second, Icon }) {
  return (
    <Container>
      <WrapperCard>
        <Lock>
          <IconCard name={Icon} />

          <FirstTitle>{first}</FirstTitle>
          <SecondTitle>{second}</SecondTitle>
        </Lock>
      </WrapperCard>
    </Container>
  );
}
