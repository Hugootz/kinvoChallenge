import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Desafio } from "../screens/Desafio";

const Stack = createStackNavigator();

export function ChallengeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Desafio" component={Desafio} />
    </Stack.Navigator>
  );
}
