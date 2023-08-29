import React from "react";
import {
  Container,
  Details,
  AgroupTitle,
  Name,
  Type,
  WrapperDetails,
  MinimumValue,
  Rating,
  Status,
  Profitability,
} from "./styles";
import { ResponseApiFundos } from "../../@types/typesApi";

interface FundosProps {
  fundos: ResponseApiFundos;
}

export function CardFundos({ fundos }: FundosProps) {
  return (
    <Container>
      <Name>{fundos.name}</Name>
      <Type>{fundos.type}</Type>
      <MinimumValue>{fundos.minimumValue}</MinimumValue>
      <Rating>{fundos.rating}</Rating>
      <Profitability>{fundos.profitability}</Profitability>
      <Status>{fundos.status}</Status>
    </Container>
  );
}
