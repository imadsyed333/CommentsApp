import { FlatList, View, ListRenderItem, StyleSheet } from 'react-native';
import React from 'react';
import Comment from './Comment'

export default function CommentList(props: any) {
    const renderItem: ListRenderItem<any>= ({item} : any) => {
        return(
            <Comment comment={item.content} comments={item.comments}/>
        )
    }

    return(
        <FlatList 
        data={props.comments} 
        renderItem={renderItem}>
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
