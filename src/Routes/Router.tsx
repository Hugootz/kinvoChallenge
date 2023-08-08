import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Desafio } from "../screens/Desafio";
import { Ações } from "../screens/Ações";
import { Previdência } from "../screens/Previdência";
import { Fundos } from "../screens/Fundos";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Desafio" component={Desafio} />
      <Stack.Screen name="Ações" component={Ações} />
      <Stack.Screen name="Fundos" component={Fundos} />
      <Stack.Screen name="Previdência" component={Previdência} />
    </Stack.Navigator>
  );
}
export default AppRoutes;
