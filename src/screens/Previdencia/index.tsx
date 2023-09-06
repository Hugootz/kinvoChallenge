import React, { useState, useEffect } from "react";
import { Container, WrapperStyle, ListPrev } from "./styles";
import { ResponseApiPrev } from "../../@types/typesApi";
import { CardPrev } from "../../Components/CardPrev";
import { Load } from "../../Components/Load";
import api from "../../services/api";
import { ButtonFilter } from "../../Components/ButtonFilter";

export function Previdencia() {
  const [list, setList] = useState<ResponseApiPrev[]>([]);
  const [loadingPrev, setLoadingPrev] = useState(true);
  const [initialList, setInitialList] = useState<ResponseApiPrev[]>([]);
  const [filter, setFilter] = useState(null);
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
  function selectFilter(selectedFilter) {
    setFilter((prevFilter) => {
      if (prevFilter === selectedFilter) {
        return null;
      } else {
        return selectedFilter;
      }
    });
  }
  useEffect(() => {
    switch (filter) {
      case null:
        return setList(initialList);
      case "tax":
        return setList(initialList.filter((item) => item.tax === 0));

      case "minimunValue":
        return setList(initialList.filter((item) => item.minimumValue <= 100));
      case "term":
        return setList(initialList.filter((item) => item.redemptionTerm === 1));
      default:
        break;
    }
  }, [filter]);

  useEffect(() => {
    getApiPrev();
  }, []);
  return (
    <Container>
      <WrapperStyle>
        <ButtonFilter
          onPress={() => selectFilter("tax")}
          name={"SEM TAXA"}
          isActive={filter === "tax"}
        />

        <ButtonFilter
          onPress={() => selectFilter("minimunValue")}
          isActive={filter <= "minimunValue"}
          name={"R$ 100,00"}
        />
        <ButtonFilter
          onPress={() => selectFilter("term")}
          name={"D+1"}
          isActive={filter === "term"}
        />
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
