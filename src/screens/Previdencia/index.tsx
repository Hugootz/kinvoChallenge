import React, { useState, useEffect } from "react";
import { Container, WrapperStyle, ListPrev } from "./styles";
import { ResponseApiPrev } from "../../@types/typesApi";
import { CardPrev } from "../../Components/CardPrev";
import { Load } from "../../Components/Load";
import api from "../../services/api";
import { ButtonFilter } from "../../Components/ButtonFilter";
import { ErrorScreen } from "../../Components/ErrorScreen";

export function Previdencia() {
  const [list, setList] = useState<ResponseApiPrev[]>([]);
  const [loadingPrev, setLoadingPrev] = useState(true);
  const [initialList, setInitialList] = useState<ResponseApiPrev[]>([]);
  const [activeFunction, setActiveFunction] = useState(true);
  async function getApiPrev() {
    try {
      const responsePrev = await api.get("/pension");
      setList(responsePrev.data.data);
      setInitialList(responsePrev.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPrev(false);
    }
  }

  function filterTax() {
    activeFunction
      ? setList(initialList.filter((item) => item.tax === 0))
      : setList(initialList);
  }
  function filterMinimumValue() {
    setList(initialList.filter((item) => item.minimumValue <= 100));
  }
  function filterRedemptionTerm() {
    setList(initialList.filter((item) => item.redemptionTerm === 1));
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
          data={list}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardPrev dataPrev={item} />}
        />
      )}
    </Container>
  );
}
