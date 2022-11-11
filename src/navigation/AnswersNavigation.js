import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnswersScreen from "../screens/AnswersScreen";

const Stack = createNativeStackNavigator();

export default function AnswersNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false}}>
      <Stack.Screen
        name="Answers"
        component={AnswersScreen}
        options={{ title: "Answers1" }}
      />
    </Stack.Navigator>
  );
}
