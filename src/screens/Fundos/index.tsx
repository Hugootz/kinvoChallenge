import React, { useState, useEffect } from "react";
import { Container, ListFunds } from "./styles";
import { ResponseApiFundos } from "../../@types/typesApi";
import { CardFundos } from "../../Components/CardFundos";
import { Load } from "../../Components/Load";
import api from "../../services/api";
export function Fundos() {
  const [listFunds, setListFunds] = useState<ResponseApiFundos[]>([]);
  const [loadingFunds, setLoadingFunds] = useState(true);
  async function getApi() {
    try {
      const responseF = await api.get("/funds");
      setListFunds(responseF.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFunds(false);
    }
  }
  useEffect(() => {
    getApi;
  }, []);
  return (
    <Container>
      {loadingFunds ? (
        <Load />
      ) : (
        <ListFunds
          data={listFunds}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardFundos fundos={item} />}
        />
      )}
    </Container>
  );
}
