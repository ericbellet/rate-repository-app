import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false}}>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Mi cuenta3" }}
      />
    </Stack.Navigator>
  );
}
