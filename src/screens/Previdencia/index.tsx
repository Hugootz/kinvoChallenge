import React, { useState, useEffect } from "react";
import { Container, WrapperStyle, ListPrev } from "./styles";
import { ResponseApiPrev } from "../../@types/typesApi";
import { CardPrev } from "../../Components/CardPrev";
import { Load } from "../../Components/Load";
import api from "../../services/api";
import { ButtonFilter } from "../../Components/ButtonFilter";

export function Previdencia() {
  const [prevList, setPrevList] = useState<ResponseApiPrev[]>([]);

  const [loadingPrev, setLoadingPrev] = useState(true);
  async function getApiPrev() {
    try {
      const responsePrev = await api.get("/pension");

      setPrevList(responsePrev.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPrev(false);
    }
  }
  function filterTax() {
    setPrevList(
      prevList.filter((item) => {
        return item.tax === 0;
      })
    );
  }
  function filterMinimumValue() {
    setPrevList(
      prevList.filter((item) => {
        return item.minimumValue === 100;
      })
    );
  }
  function filterRedemptionTerm() {
    setPrevList(
      prevList.filter((item) => {
        return item.redemptionTerm === 1;
      })
    );
  }

  useEffect(() => {
    getApiPrev();
  }, []);
  return (
    <Container>
      <WrapperStyle>
        <ButtonFilter onPress={() => filterTax()} name={"SEM TAXA"} />

        <ButtonFilter onPress={() => filterMinimumValue()} name={"R$ 100,00"} />
        <ButtonFilter onPress={() => filterRedemptionTerm()} name={"D+1"} />
      </WrapperStyle>
      {loadingPrev ? (
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
