import React from 'react'
import { Image, View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import StyledText from './StyledText.jsx'
import QuestionStats from './QuestionStats.jsx'
import UserInfo from './InfoUser.jsx'
import theme from '../theme.js'


export default function QuestionItem(props) {
  const { question } = props;
  const navigation = useNavigation();

  const goToAnswers = () => {
    console.log(question.question)
    navigation.navigate('Answers', props={...question})
  };

  return (
    <TouchableWithoutFeedback onPress={(goToAnswers)}>
      <View key={question.id} style={styles.container}>
        <QuestionItemHeader {...question} />
        <QuestionStats {...question} />
        <UserInfo {...question} />
      </View>
    </TouchableWithoutFeedback>

  )
}

const QuestionItemHeader = ({ ownerAvatarUrl, question, description, hashtags, typeQuestion, price }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold' fontSize='heading'>{question}</StyledText>
      <View style={{flexDirection: 'row', paddingBottom: 2, justifyContent: 'flex-start' }}>
        <StyledText style={styles.typeQuestion}>{typeQuestion}</StyledText>
        <StyledText style={styles.price}>{price}</StyledText>
      </View>
      <View style={{flexDirection: 'row', paddingBottom: 2, justifyContent: 'flex-start'}}>
        <HashItem {...hashtags}/>
      </View>
    </View>
  </View>
)


const HashItem = (hashtags) => {
  return (
    <View>
      <FlatList style={{ marginRight: 10 } } numColumns={3} columnWrapperStyle={styleHash.row}  
        data={Object.values(hashtags)}
        renderItem={({item}) => <StyledText style={styles.hashtags}>{item}</StyledText>}
      />
    </View>
  );
}

const styleHash = StyleSheet.create({
  row: {
      flex: 1,
      justifyContent: "flex-start"
  }
});

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