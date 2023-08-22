import React from "react";
import {
  Container,
  Details,
  AgroupTitle,
  Name,
  Type,
  WrapperDetails,
  MinimumValue,
  Tax,
  RedemptionTerm,
  Profitability,
} from "./styles";
import { ResponseApiPrev } from "../../@types/typesApi";

interface PropsPrev {
  dataPrev: ResponseApiPrev;
}

export function CardPrev({ dataPrev }: PropsPrev) {
  return (
    <Container>
      <Details>
        <AgroupTitle>
          <Name>{dataPrev.name}</Name>
          <Type>{dataPrev.type}</Type>
        </AgroupTitle>
        <WrapperDetails>
          <MinimumValue>{dataPrev.minimumValue}</MinimumValue>
          <Tax>{dataPrev.tax}</Tax>
          <RedemptionTerm>{dataPrev.redemptionTerm}</RedemptionTerm>
          <Profitability>{dataPrev.profitability}</Profitability>
        </WrapperDetails>
      </Details>
    </Container>
  );
}
