import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth";
import LoginWithEmailScreen from "./LogWithEmailScreen";

export default function AccountScreen() {
  const { auth, logout} = useAuth();
  return (
    <View>{auth ? 
      <View style={styles.content}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
        </View>

        <View style={styles.dataContent}>
          <ItemMenu title="Username" text={auth.username} />
          <ItemMenu title="Email" text={auth.email} />
          <ItemMenu title="Total favorites questions" text={`0 questions`} />
        </View>
        <Button title="Sign out" onPress={logout} style={styles.btnLogoun} />
      </View>
      :<LoginWithEmailScreen/>}
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    paddingTop: 20,
  },
});
