import React from "react";
import { ImageBackground, TouchableOpacity, View, Text, TextInput, StyleSheet, Linking } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function LandingScreen({ navigation }) {

    return (
      <ImageBackground style={ styles.imgBackground } 
      resizeMode='cover' 
      source={require('../../assets/background.png')}>
        <View style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center', 
        }}>
          <FontAwesome5.Button name="google"
              style={{
                backgroundColor: 'red',
                width:250}}
            onPress={() => console.log('To Do')}>
            <Text style={styles.login}>Log in with Google</Text>
          </FontAwesome5.Button>
          <Text></Text>
          <FontAwesome5.Button style={{width:250}} 
            name="facebook" 
            onPress={() => console.log('To Do')}>
            <Text style={styles.login}>Log in with Facebook</Text>
          </FontAwesome5.Button>
          <Text style={styles.textOrLogin}>Or login with</Text>
          <FontAwesome5.Button name="envelope"
              style={{
                backgroundColor: 'gray',
                width:250}}
            onPress={() => navigation.navigate('Log With Email')}>
            <Text style={styles.login}>Log in with an email </Text>
          </FontAwesome5.Button>
          <Text></Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.withoutlogin}>Continue without signing in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signup}>
              <Text style={styles.login}>Don't have an account?  </Text>
              <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.textSignup}>Sign Up</Text>
          </TouchableOpacity>
          </View>

      </ImageBackground>
      );
}

const styles = StyleSheet.create({
  login: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
  },
  textOrLogin: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
    padding: 20
  },
  textSignup: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  withoutlogin: {
    fontWeight: "bold",
    fontSize: 18,
    color: 'white',
    textDecorationLine: 'underline'
  },
  signup:{
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: 45

  }

});