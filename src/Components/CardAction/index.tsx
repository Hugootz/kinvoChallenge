import React from "react";
import {
  Container,
  Name,
  Ticker,
  Id,
  MinimumValue,
  Profitability,
  Details,
} from "./styles";
import { ResponseApi } from "../../@types/api";

interface Props {
  data: ResponseApi;
}

export function CardAction({ data }: Props) {
  console.log(data);
  return (
    <Container>
      <Details>
        <Name>{data.name}</Name>
        <Ticker>{data.ticker}</Ticker>
        <MinimumValue>{data.minimumValue}</MinimumValue>
        <Profitability>{data.profitability}</Profitability>
      </Details>
    </Container>
  );
}
