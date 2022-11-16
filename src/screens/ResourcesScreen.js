import React from "react";
import { Image, View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResourcesList from "../components/ResourcesList";
import StyledText from '../components/StyledText.jsx';
import UserInfo from "../components/InfoUser";


export default function ResourcesScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const goToPostResource = () => {
    //navigation.navigate('Resources', props={...answer})
    console.log('To Do');
  };

  return (
    <View>
      <View style={styles.containerMain}>
          <View style={{ padding:5 }}>
            <StyledText style={styles.text}>{params.title}</StyledText>
            <Text style={styles.description}>{params.description}</Text>
            <UserInfo {...params}/>
          </View>      
      </View>
      <ResourcesList/>
      <View>
        <TouchableWithoutFeedback onPress={(goToPostResource)}>
          <Image
            source={require("../../assets/post.png")}
            style={{ width: 60, height: 60, position: 'relative',
            bottom:-290,
            right:-290 }}
          />
        </TouchableWithoutFeedback>
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
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: "bold"
  },
  description: {
    color:'secondary',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40
  }
})