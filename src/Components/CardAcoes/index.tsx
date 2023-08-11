import React from "react";
import {
  Container,
  Name,
  Ticker,
  Id,
  MinimumValue,
  Profitability,
} from "./styles";
import { ResponseApi } from "../../@types/api";

interface Props {
  data: ResponseApi;
}

export function CardAcoes({ data }: Props) {
  return (
    <Container>
      <Id>{data.id}</Id>
      <Name>{data.name}</Name>
      <Ticker>{data.ticker}</Ticker>
      <MinimumValue>{data.minimumValue}</MinimumValue>
      <Profitability>{data.profitability}</Profitability>
    </Container>
  );
}
