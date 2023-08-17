import React, { useState, useEffect } from "react";
import { Container, ListCard } from "./styles";
import { CardAction } from "../../Components/CardAction";
import axios from "axios";
import { ResponseApi } from "../../@types/api";
import { Load } from "../../Components/Load";

export function Ações() {
  const [list, setList] = useState<ResponseApi[]>([]);
  const [loading, setLoading] = useState(true);
  async function getApi() {
    try {
      const response = await axios.get(
        "https://6266f62263e0f382568936e4.mockapi.io/stocks"
      );
      setList(response.data.data);
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
          data={list}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardAction data={item} />}
        />
      )}
    </Container>
  );
}
