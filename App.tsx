import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/Routes/Router";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
