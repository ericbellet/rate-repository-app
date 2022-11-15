import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './src/screens/LandingScreen'
import HomeScreen from './src/screens/HomeScreen'
import AnswersScreen from './src/screens/AnswersScreen'
import AnswerCreationScreen from './src/screens/AnswerCreationScreen';
import AnswerItemScreen from './src/screens/AnswerItemScreen';
import ResourcesScreen from './src/screens/ResourcesScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={LandingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Answers" component={AnswersScreen} />
        <Stack.Screen name="AnswerCreation" component={AnswerCreationScreen} options={{ title: 'Post Your Answer' }}/>
        <Stack.Screen name="AnswerItem" component={AnswerItemScreen} options={{ title: 'Answer' }}/>
        <Stack.Screen name="Resources" component={ResourcesScreen} options={{ title: 'Resources' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;