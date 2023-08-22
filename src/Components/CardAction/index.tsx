import React, { useState } from "react";
import {
  Container,
  Name,
  Ticker,
  MinimumValue,
  Profitability,
  Details,
  WrapperDetails,
  IconOutline,
  Button,
  AgroupTitle,
} from "./styles";
import { ResponseApiAcoes } from "../../@types/typesApi";

interface Props {
  data: ResponseApiAcoes;
}

export function CardAction({ data }: Props) {
  const [iconState, setIconState] = useState<any>("hearto");
  function iconPress() {
    if (iconState === "hearto") {
      setIconState("heart");
    }
    if (iconState === "heart") {
      setIconState("hearto");
    }
  }
  return (
    <Container>
      <Details>
        <AgroupTitle>
          <Name>{data.name}</Name>
          <Ticker>{data.ticker}</Ticker>
        </AgroupTitle>
        <WrapperDetails>
          <Button onPress={() => iconPress()}>
            <IconOutline name={iconState} />
          </Button>
          <MinimumValue>{data.minimumValue}</MinimumValue>
          <Profitability>{data.profitability}</Profitability>
        </WrapperDetails>
      </Details>
    </Container>
  );
}
