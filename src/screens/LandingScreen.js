import React from "react";
import { ImageBackground, TouchableOpacity, View, Text, TextInput, StyleSheet, Button } from "react-native";
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
                backgroundColor: 'red'}}
            onPress={() => this.googleLogIn()}>
            <Text style={styles.login}>Log in with Google</Text>
          </FontAwesome5.Button>
          <Text></Text>
          <FontAwesome5.Button style={styles.facebookButton} 
            name="facebook" 
            onPress={() => this.facebookLogIn()}>
            <Text style={styles.login}>Log in with Facebook</Text>
          </FontAwesome5.Button>
          <Text></Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.withoutlogin}>Continue without signing in</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
      );
}

const styles = StyleSheet.create({
  login: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'white'
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

});