import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Desafio } from "../screens/Desafio";
import { Ações } from "../screens/Ações";
import { Previdencia } from "../screens/Previdencia";
import { Fundos } from "../screens/Fundos";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "#8c19ff" }}>
      <Stack.Screen name="Desafio" component={Desafio} />
      <Stack.Screen name="Ações" component={Ações} />
      <Stack.Screen name="Fundos" component={Fundos} />
      <Stack.Screen name="Previdência" component={Previdencia} />
    </Stack.Navigator>
  );
}
export default AppRoutes;
