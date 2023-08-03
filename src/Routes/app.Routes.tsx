import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Challenge } from "../screens/challenge";

const Stack = createStackNavigator();

export function ChallengeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Challenge" component={Challenge} />
    </Stack.Navigator>
  );
}
