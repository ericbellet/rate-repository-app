import React from 'react'
import { Image, View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import StyledText from './StyledText.jsx'
import Icon from "react-native-vector-icons/FontAwesome5";
import theme from '../theme.js'

export default function AnswerStats(props) {
    const { answer } = props;
    const navigation = useNavigation();
  
    const goToAnswer = () => {
      //console.log(answer.question)
      //navigation.navigate('Answers', props={...question})
    };
  
    return (
      <TouchableWithoutFeedback onPress={(goToAnswer)}>
        <View key={answer.id} style={styles.container}>
          <UserInfo {...answer}/>
          <AnswerStatsView {...answer}/>
        </View>
      </TouchableWithoutFeedback>
  
    )
  }

  const parseThousands = value => {
    return value >= 1000
      ? `${Math.round(value / 100) / 10}k`
      : String(value)
  }

  const AnswerStatsView = props => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <StyledText align='center' fontWeight='bold'>{props.likes}</StyledText>
          <StyledText align='center'>Likes</StyledText>
        </View>
        <View>
          <StyledText align='center' fontWeight='bold'>{parseThousands(props.views)}</StyledText>
          <StyledText align='center'>Views</StyledText>
        </View>
        <View>
          <StyledText align='center' fontWeight='bold'>{props.forksCount}</StyledText>
          <StyledText align='center'>Forks</StyledText>
        </View>
      </View>
    )
  }

  const UserInfo = props => {
    return (
      <View style={{ flexDirection: 'row', padding:10}}>
          <View style={{ paddingRight: 1 }}>
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
          </View>
          <View style={{ padding:5 }}>
            <StyledText style={styles.text}>{props.username}</StyledText>
            <StyledText color='secondary'>Answered 2 hours ago</StyledText>

          </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    image: {
      marginVertical: 4,
      width: 30,
        height: 30,
        borderRadius: 4
      },
    container: {
      padding: 20,
      paddingVertical: 5,
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
      fontSize: 20,
      fontWeight: "bold"
    }
  })