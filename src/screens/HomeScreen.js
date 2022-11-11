import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from "../navigation/Navigation";


export default function HomeScreen({ navigation, props}) {
  return (
      <Navigation />
  );
}