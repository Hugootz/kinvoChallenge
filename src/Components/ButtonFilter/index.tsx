import React, { useState } from "react";
import { Container, ButtonWrapper, DetailsStyle, Filter } from "./styles";

export interface ButtonFilterProps {
  name?: string;
  onPress?: () => void;
  isActive: boolean;
}

export function ButtonFilter({ name, onPress, isActive }: ButtonFilterProps) {
  return (
    <Container>
      <ButtonWrapper onPress={onPress}>
        <DetailsStyle isActive={isActive}>
          <Filter isActive={isActive}>{name}</Filter>
        </DetailsStyle>
      </ButtonWrapper>
    </Container>
  );
}
