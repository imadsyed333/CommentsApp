import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import CommentList from './components/CommentList';

type Comment = {
  content: string
  comments: Comment[]
}

export default function App() {
  const [comments, setComments] = useState<Comment[]>([])
  const [comment, setComment] = useState<string>("")

  const addComment = () => {
    const new_comment = {
      content: comment, 
      comments: []
    }
    setComments([...comments, new_comment])
    setComment("")
  }

  return (
    <View style={styles.container}>
      <Text>COMMENTS!</Text>
      <TextInput onChangeText={setComment} value={comment}/>
      <Button title='Add Comment' onPress={addComment}/>
      <View></View>
      <CommentList comments={comments}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
