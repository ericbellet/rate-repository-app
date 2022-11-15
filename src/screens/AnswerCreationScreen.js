import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import StyledText from '../components/StyledText.jsx'
import theme from '../theme.js'


export default function AnswerCreationScreen(props) {

    const {
        navigation,
        route: { params },
      } = props;

    console.log(params)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{params.question}</Text>
            <View style={{flexDirection: 'row', paddingBottom: 2, justifyContent: 'flex-start' }}>
            <StyledText style={styles.typeQuestion}>{params.typeQuestion}</StyledText>
            <StyledText>  </StyledText>
            <StyledText style={styles.price}>{params.price}</StyledText>
            </View>
        </View>
        )
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