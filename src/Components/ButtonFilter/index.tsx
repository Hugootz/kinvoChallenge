import React, { useState } from "react";
import { Container, ButtonWrapper, DetailsStyle, Filter } from "./styles";

interface ButtonFilterProps {
  name: string;
  onPress: () => void;
}

export function ButtonFilter({ name, onPress }: ButtonFilterProps) {
  const [activeColor, setActiveColor] = useState(true);

  return (
    <Container>
      <ButtonWrapper onPress={onPress}>
        <DetailsStyle activeTheme={activeColor}>
          <Filter activeTheme={activeColor}>{name}</Filter>
        </DetailsStyle>
      </ButtonWrapper>
    </Container>
  );
}
