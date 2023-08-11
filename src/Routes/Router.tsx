import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Desafio } from "../screens/Desafio";
import { Acoes } from "../screens/Acoes";
import { Previdencia } from "../screens/Previdencia";
import { Fundos } from "../screens/Fundos";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Desafio" component={Desafio} />
      <Stack.Screen name="Acoes" component={Acoes} />
      <Stack.Screen name="Fundos" component={Fundos} />
      <Stack.Screen name="Previdencia" component={Previdencia} />
    </Stack.Navigator>
  );
}
export default AppRoutes;
