import React, { useState, useEffect } from "react";
import { Container, ListFunds } from "./styles";

import { ErrorScreen } from "../../Components/ErrorScreen";

export function Fundos() {
  const [loadingFunds, setLoadingFunds] = useState(false);

  function handleButtonPress() {
    setLoadingFunds(true);
    setTimeout(() => {
      setLoadingFunds(false);
    }, 3000);
  }

  // A API para tela de fundos não funcionou, então coloquei uma tela de erro para visualização do usúario
  // E um botão para consultar se a tela irá carregar as informações!
  return (
    <Container>
      <ErrorScreen isLoading={loadingFunds} onPress={handleButtonPress} />
    </Container>
  );
}
