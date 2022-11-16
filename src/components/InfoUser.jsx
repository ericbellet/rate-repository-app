import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'


const UserInfo = props => {
  return (
    <View style={{ flexDirection: 'row-reverse', padding:10}}>
        <View style={{ padding:5 }}>
          <StyledText color='secondary'>{props.username}</StyledText>
        </View>
        <View style={{ paddingRight: 1 }}>
          <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
        </View>
    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
    image: {
    marginVertical: 4,
    width: 18,
      height: 18,
      borderRadius: 4
    },
    userName: {}
  })