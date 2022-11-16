import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";


export default function AnswerCreation(props) {
    const { answer } = props;
    const navigation = useNavigation();

    const goToAnswer = () => {
        //console.log(answer.question)
        //navigation.navigate('Answers', props={...question})
        };
    return (
    <View style={{flexDirection: 'row', paddingBottom: 2, justifyContent: 'flex-start' }}>
      </View>
    )
}