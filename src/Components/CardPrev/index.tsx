import React from "react";
import {
  Container,
  Details,
  AgroupTitle,
  Name,
  Ticker,
  WrapperDetails,
  MinimumValue,
  Profitability,
} from "./styles";

export function CardPrev({ data }) {
  return (
    <Container>
      <Details>
        <AgroupTitle>
          <Name>{data}</Name>
          <Ticker>{data}</Ticker>
        </AgroupTitle>
        <WrapperDetails>
          <MinimumValue>{data}</MinimumValue>
          <Profitability>{data}</Profitability>
        </WrapperDetails>
      </Details>
    </Container>
  );
}
