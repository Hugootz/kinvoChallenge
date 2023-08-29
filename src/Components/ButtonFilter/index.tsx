import React, { useState } from "react";
import { Container, ButtonWrapper, DetailsStyle, Filter } from "./styles";
import {} from "../../../src/@types/typesApi";

interface ButtonFilterProps {
  name: string;
  onPress?: () => void;
}

export function ButtonFilter({ name, onPress }: ButtonFilterProps) {
  return (
    <Container>
      <ButtonWrapper onPress={onPress}>
        <DetailsStyle>
          <Filter>{name}</Filter>
        </DetailsStyle>
      </ButtonWrapper>
    </Container>
  );
}
