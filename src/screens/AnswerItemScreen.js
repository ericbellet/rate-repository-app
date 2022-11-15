import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import StyledText from '../components/StyledText.jsx'
import Icon from "react-native-vector-icons/FontAwesome5";
import theme from '../theme.js'
import AnswerItem from '../components/AnswerItem.jsx';


export default function AnswerItemScreen(props) {

    const {
        navigation,
        route: { params },
      } = props;
    return (
        <View>
            <View style={styles.containerMain}> 
            <View style={styles.container}>
                <View style={{ paddingRight: 1 }}>
                <Image style={styles.image} source={{ uri: params.ownerAvatarUrl }} />
                </View>
                <View style={{ padding:5 }}>
                <StyledText style={styles.text}>{params.username}</StyledText>  
                </View>
            </View>
                <View style={styles.containerButtons}>
                    <Icon
                    name="thumbs-up"
                    color="gray"
                    size={40}
                    onPress={()=>console.log('test')}
                    tabBarLabel='test'
                    />
                    <Icon
                    name="code-branch"
                    color="gray"
                    size={40}
                    onPress={()=>console.log('test')}
                    />
                    <Icon
                    name="bookmark"
                    color="gray"
                    size={40}
                    onPress={()=>console.log('test')}
                    />
                    <Icon
                    name="share-alt"
                    color="gray"
                    size={40}
                    onPress={()=>console.log('test')}
                    />
                </View>
            </View>
            <View style={styles.containerAnswer}>
                <AnswerItem {...params}/> 
            </View>
        </View>
      )
}

const styles = StyleSheet.create({
    containerAnswer:{
        paddingVertical: 20

    },
    containerMain:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    containerButtons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
        paddingVertical: 20
    },
    image: {
      marginVertical: 4,
      width: 40,
        height: 40,
        borderRadius: 4
      },
    container: {
      padding: 20,
      paddingVertical: 5,
      flexDirection: 'row'
    },
    text: {
      fontSize: 25,
      fontWeight: "bold"
    }
  })