import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import AskNavigation from "./AskNavigation";
import QuestionsNavigation from "./QuestionsNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {

  return (
    <Tab.Navigator initialRouteName="QuestionsScreen" screenOptions={{ headerShown: false 
  }} >
      <Tab.Screen
        name="AskScreen"
        component={AskNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Question",
          tabBarIcon: ({ color, size }) => (
            <Icon name="edit" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="QuestionsScreen"
        component={QuestionsNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => renderQuestionsButton(),
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderQuestionsButton() {
  return (
    <Image
      source={require("../../assets/home-button.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
