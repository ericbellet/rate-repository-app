import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import QuestionNavigation from "./QuestionNavigation";
import AnswersNavigation from "./AnswersNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen
        name="QuestionScreen"
        component={QuestionNavigation}
        options={{
          tabBarLabel: "Question",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="AnswersScreen"
        component={AnswersNavigation}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => renderPokeball(),
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountNavigation}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../../assets/home-button.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
