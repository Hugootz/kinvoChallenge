import React, { useState, useEffect } from "react";
import { Container, ListCard } from "./styles";
import { CardAction } from "../../Components/CardAction";
import axios from "axios";
import { ResponseApiAcoes } from "../../@types/typesApi";
import { Load } from "../../Components/Load";
import api from "../../services/api";

export function Acoes() {
  const [list, setList] = useState<ResponseApiAcoes[]>([]);
  const [loading, setLoading] = useState(true);

  async function getApi() {
    try {
      const response = await api.get("/stocks");
      setList(
        response.data.data.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Container>
      {loading ? (
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
