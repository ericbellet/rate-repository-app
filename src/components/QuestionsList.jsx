import React from 'react'
import { FlatList, Text } from 'react-native'
import repositories from '../data/questions.js'
import QuestionItem from './QuestionItem.jsx'

const QuestionsList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <QuestionItem {...repo} />
      )}
    />
  )
}

export default QuestionsList
