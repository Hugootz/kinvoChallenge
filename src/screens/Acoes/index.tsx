import React, { useState, useEffect } from "react";
import { Container, ListCard } from "./styles";
import { CardAcoes } from "../../Components/CardAcoes";
import axios from "axios";
import { ResponseApi } from "../../@types/api";

export function Acoes() {
  const [list, setList] = useState<ResponseApi[]>([]);
  async function getApi() {
    try {
      const response = await axios.get(
        "https://6266f62263e0f382568936e4.mockapi.io/stocks"
      );

      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Container>
      <ListCard
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CardAcoes data={item} />}
      />
    </Container>
  );
}
