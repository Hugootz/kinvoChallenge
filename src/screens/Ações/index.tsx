import React, { useState, useEffect } from "react";
import { Container, ListCard } from "./styles";
import { CardAction } from "../../Components/CardAction";
import { ResponseApiAcoes } from "../../@types/typesApi";
import { Load } from "../../Components/Load";
import api from "../../services/api";

export function Ações() {
  const [list, setList] = useState<ResponseApiAcoes[]>([]);
  const [loadingAcoes, setLoadingAcoes] = useState(true);

  async function getApi() {
    try {
      const responseA = await api.get("/stocks");
      setList(
        responseA.data.data.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAcoes(false);
    }
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Container>
      {loadingAcoes ? (
        <Load />
      ) : (
        <ListCard
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardAction data={item} />}
        />
      )}
    </Container>
  );
}
