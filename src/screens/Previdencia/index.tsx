import React, { useState, useEffect } from "react";
import {
  Container,
  DetailsStyle,
  ButtonWrapper,
  Filter,
  ListPrev,
} from "./styles";
import { ResponseApiPrev } from "../../@types/typesApi";
import { CardPrev } from "../../Components/CardPrev";
import { Load } from "../../Components/Load";
import api from "../../services/api";

export function Previdencia() {
  const [prevList, setPrevList] = useState<ResponseApiPrev[]>([]);
  const [loading, setLoading] = useState(true);
  async function getApiPrev() {
    try {
      const responsePrev = await api.get("/pension");
      setPrevList(responsePrev.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getApiPrev();
  }, []);
  return (
    <Container>
      <ButtonWrapper>
        <DetailsStyle>
          <Filter>SEM TAXA</Filter>
        </DetailsStyle>
      </ButtonWrapper>

      {loading ? (
        <Load />
      ) : (
        <ListPrev
          showsVerticalScrollIndicator={false}
          data={prevList}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardPrev dataPrev={item} />}
        />
      )}
    </Container>
  );
}
