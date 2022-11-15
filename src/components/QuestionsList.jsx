import React from 'react'
import { FlatList, Text } from 'react-native'
import questions from '../data/questions.js'
import QuestionItem from './QuestionItem.jsx'


export default function QuestionsList() {
  return (
    <FlatList
      data={questions}
      ItemSeparatorComponent={() => <Text> </Text>}
      keyExtractor={(question) => String(question.id)}
      renderItem={({ item }) => (
        <QuestionItem question={item} />
      )}
    />
  )
}