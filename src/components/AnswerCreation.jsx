import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import StyledText from '../components/StyledText.jsx'


export default function AnswerCreation(props) {
    const { answer } = props;
    const navigation = useNavigation();

    const goToAnswer = () => {
        //console.log(answer.question)
        //navigation.navigate('Answers', props={...question})
        };
    return (
    <View style={{flexDirection: 'row', paddingBottom: 2, justifyContent: 'flex-start' }}>
        <StyledText style={styles.typeQuestion}>{params.typeQuestion}</StyledText>
        <StyledText>  </StyledText>
        <StyledText style={styles.price}>{params.price}</StyledText>
      </View>
    )
}

const styles = StyleSheet.create({
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