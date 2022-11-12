import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AskScreen from "../screens/AskScreen";

const Stack = createNativeStackNavigator();

export default function AskNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Question"
        component={AskScreen}
      />
    </Stack.Navigator>
  );
}
