import React from 'react'
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, Icon, Linking } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import StyledText from './StyledText.jsx'
import theme from '../theme.js'
import UserInfo from './InfoUser.jsx';


export default function ResourceItem(props) {

  const navigation = useNavigation();
  
  const goToResource = () => {
    console.log('To do');
    //navigation.navigate('Answers', props={...question})
  };

  return (
    <View>
        <TouchableWithoutFeedback onPress={(goToResource)}>
            <View key={props.resource.id} style={styles.container} flexDirection='row'>
                <View>
                    <Text style={{color: 'blue', fontSize: 20}}
                        onPress={() => Linking.openURL(props.resource.linkResource)}>
                        {props.resource.linkResource}
                    </Text>
                    <UserResourceInfo {...props.resource}/>
                </View>
                <View style={{position: 'absolute', top:10, right: 20}}>
  
                </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
        


  )
}

const UserResourceInfo = props => {
    return (
      <View style={{ flexDirection: 'row', padding:5}}>
         <View style={{ paddingRight: 1 }}>
            <Image style={styles.imageResourceInfo} source={{ uri: props.ownerAvatarUrl }} />
          </View>
          <View style={{ padding:5 }}>
            <StyledText color='secondary'>{props.username}</StyledText>
          </View>
      </View>
    )
  }
  
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hashtags: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 10  
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
  },
  imageResourceInfo: {
    width: 28,
    height: 28,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  },
  type: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden'
  }
})