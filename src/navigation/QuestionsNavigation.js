import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionsScreen from "../screens/QuestionsScreen";

const Stack = createNativeStackNavigator();

export default function QuestionsNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false}}>
      <Stack.Screen
        name="Questions"
        component={QuestionsScreen}
        options={{ title: "QuestionsScreen" }}
      />
    </Stack.Navigator>
  );
}
