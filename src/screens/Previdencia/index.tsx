import React, { useState, useEffect } from "react";
import { Container, WrapperStyle, ListPrev } from "./styles";
import { ResponseApiPrev } from "../../@types/typesApi";
import { CardPrev } from "../../Components/CardPrev";
import { Load } from "../../Components/Load";
import api from "../../services/api";
import { ButtonFilter } from "../../Components/ButtonFilter";

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
      <WrapperStyle>
        <ButtonFilter name={"SEM TAXA"} />
        <ButtonFilter name={"R$ 100,00"} />
        <ButtonFilter name={"D+1"} />
      </WrapperStyle>
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
