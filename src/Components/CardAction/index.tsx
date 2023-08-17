import React from "react";
import {
  Container,
  Name,
  Ticker,
  MinimumValue,
  Profitability,
  Details,
  WrapperDetails,
  Icon,
  Button,
  AgroupTitle,
} from "./styles";
import { ResponseApi } from "../../@types/api";

interface Props {
  data: ResponseApi;
}

export function CardAction({ data }: Props) {
  return (
    <Container>
      <Details>
        <AgroupTitle>
          <Name>{data.name}</Name>
          <Ticker>{data.ticker}</Ticker>
        </AgroupTitle>
        <WrapperDetails>
          <Button>
            <Icon name={"hearto"} />
          </Button>
          <MinimumValue>{data.minimumValue}</MinimumValue>
          <Profitability>{data.profitability}</Profitability>
        </WrapperDetails>
      </Details>
    </Container>
  );
}
