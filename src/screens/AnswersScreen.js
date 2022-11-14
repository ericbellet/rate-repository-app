import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import StyledText from '../components/StyledText.jsx'
import AnswersList from "../components/AnswersList.jsx";
import Icon from "react-native-vector-icons/FontAwesome5";

import theme from '../theme.js'


export default function AnswersScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;

  return <View>
    <View style={styles.container}>
      <Text style={styles.text}>{params.question}</Text>
      <View style={{flexDirection: 'row', paddingBottom: 2, justifyContent: 'flex-start' }}>
        <StyledText style={styles.typeQuestion}>{params.typeQuestion}</StyledText>
        <StyledText>  </StyledText>
        <StyledText style={styles.price}>{params.price}</StyledText>
      </View>
      <Text color='secondary'>Asked {params.creationDate} ago</Text>
    </View>
    <TouchableWithoutFeedback onPress={() => console.log('To do create answer')}>
      <View style={styles.containerCreateAnswer}>
        <Icon
        name="plus"
        color="gray"
        size={40}

        />
      </View>
    </TouchableWithoutFeedback>
      <AnswersList/>
   </View>;
 
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 5
  },
  container: {
    padding: 20,
    paddingVertical: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  containerCreateAnswer: {
    padding: 20,
    paddingVertical: 5,
    paddingHorizontal: 160,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  typeQuestion: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.green,
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden'
  },
  price: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.gold,
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden'
  }
})