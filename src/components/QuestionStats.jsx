import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText.jsx'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const QuestionStats = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText align='center'>Stars</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{props.votesCount}</StyledText>
        <StyledText align='center'>Votes</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{props.views}</StyledText>
        <StyledText align='center'>Views</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{props.answers}</StyledText>
        <StyledText align='center'>Answers</StyledText>
      </View>
    </View>
  )
}

export default QuestionStats
