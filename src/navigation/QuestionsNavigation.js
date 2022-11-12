import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionsScreen from "../screens/QuestionsScreen";

const Stack = createNativeStackNavigator();

export default function QuestionsNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false}}>
      <Stack.Screen
        name="Answers"
        component={QuestionsScreen}
        options={{ title: "Answers1" }}
      />
    </Stack.Navigator>
  );
}
