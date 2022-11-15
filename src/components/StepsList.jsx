import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StepsList(props) {

  const { answer } = props;
  const navigation = useNavigation();

  const goToResources = () => {
    navigation.navigate('Resources', props={...answer})
  };

  return (
  <TouchableWithoutFeedback onPress={(goToResources)}>
    <View style={styles.itemContainer}>
        <Text style={styles.valueTextStyle}>{answer.title}</Text>
    </View>
  </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  itemContainer: {
    width: 350,
    height: 50,
    marginLeft: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  valueTextStyle: {
    fontSize: 20,
  }
})
