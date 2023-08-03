import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Desafio } from "./src/screens/Desafio";

import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Desafio />
      </NavigationContainer>
    </ThemeProvider>
  );
}
