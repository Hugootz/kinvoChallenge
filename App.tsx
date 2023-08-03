import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Challenge } from "./src/screens/challenge";

export default function App() {
  return (
    <NavigationContainer>
      <Challenge />
    </NavigationContainer>
  );
}
