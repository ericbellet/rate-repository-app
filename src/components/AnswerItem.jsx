import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import english1 from '../data/english1.js'
import StepsList from './StepsList.jsx';

export default function AnswerItem(props) {

  return (
    <FlatList
        data={english1}
        ItemSeparatorComponent={() => <Text> </Text>}
        keyExtractor={(answer) => String(answer.id)}
        renderItem={({ item }) => (
            <StepsList answer={item}/> 
         )}
    />
  )
}