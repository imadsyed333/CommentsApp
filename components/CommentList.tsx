import { FlatList, View, ListRenderItem, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Comment from './Comment'

type comment = {
    content: string
    comments: comment[]
}

export default function CommentList(props: any) {
    const [comment, setComment] = useState<string>("")
    const [comments, setComments] = useState<comment[]>([])

    const renderItem: ListRenderItem<any>= ({item} : any) => {
        return(
            <Comment content={item.content} comments={item.comments} textHint="Comment on this"/>
        )
    }

    const addComment = () => {
        const new_comment = {
            content: comment,
            comments: []
        }
        setComments([...comments, new_comment])
        setComment("")
    }

    return(
        <View style={styles.container}>
            <View style={styles.input_container}>
                <TextInput onChangeText={setComment} value={comment} style={styles.input} placeholder={props.textHint} placeholderTextColor={"gray"}/>
                <TouchableOpacity style={styles.button} onPress={addComment}>
                    <Text>Enter</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
            data={comments} 
            renderItem={renderItem}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input_container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        padding: 2,
    },

    input: {
        borderWidth:3, 
        padding: 5, 
        borderRadius: 10
    },

    button: {
        alignSelf:'flex-end',
        alignContent:'flex-end',
        borderWidth: 3,
        borderRadius:10,
        padding: 5, 
    }
  });
