import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuestionScreen from "../screens/QuestionScreen";

const Stack = createNativeStackNavigator();

export default function QuestionNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
      />
    </Stack.Navigator>
  );
}
