import React, { useEffect } from "react";
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
  ValorMinimo,
  Taxa,
  Resgate,
  Rentabilidade,
  WrapperName,
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
        <WrapperName>
          <ValorMinimo>Valor mínimo:</ValorMinimo>
          <Taxa>Taxa:</Taxa>
          <Resgate>Resgate:</Resgate>
          <Rentabilidade>Rentabilidade:</Rentabilidade>
        </WrapperName>
        <WrapperDetails>
          <MinimumValue>{`R$${dataPrev.minimumValue},00`}</MinimumValue>
          <Tax>{`${dataPrev.tax}%`}</Tax>
          <RedemptionTerm>{`D+${dataPrev.redemptionTerm}`}</RedemptionTerm>
          <Profitability>{`${dataPrev.profitability}%`}</Profitability>
        </WrapperDetails>
      </Details>
    </Container>
  );
}
