import React from 'react'
import { FlatList, Text } from 'react-native'
import answersStatsData from '../data/answersStats.js'
import AnswerStats from './AnswerStats.jsx'


export default function AnswersList(props) {
  return (
    <FlatList
      data={answersStatsData}
      ItemSeparatorComponent={() => <Text> </Text>}
      keyExtractor={(answer) => String(answer.id)}
      renderItem={({ item }) => (
        <AnswerStats answer={item} />
      )}
    />
  )
}