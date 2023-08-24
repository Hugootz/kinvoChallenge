import React from "react";
import { Container, ButtonWrapper, DetailsStyle, Filter } from "./styles";

export function ButtonFilter({ name }) {
  return (
    <Container>
      <ButtonWrapper>
        <DetailsStyle>
          <Filter>{name}</Filter>
        </DetailsStyle>
      </ButtonWrapper>
    </Container>
  );
}
