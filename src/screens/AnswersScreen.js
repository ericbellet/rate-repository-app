import React from "react";
import { View, Text } from "react-native";

export default function AnswersScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;

  console.log(params)
  return <View>
    <Text>{params.question}</Text>
    </View>;
}