import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CommentList from './components/CommentList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE COMMENTS SECTION</Text>
      <View style={styles.list}>
        <CommentList textHint="Add a comment"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight:'bold'
  },

  list: {
    padding: 10,
    alignItems:'flex-start'
  }
});
