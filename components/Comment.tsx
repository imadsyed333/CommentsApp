import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import CommentList from './CommentList'

type Comment = {
    content: string
    comments: Comment[]
}  

export default function Comment(props: any) {
    const [comment, setComment] = useState<string>("")
    const [comments, setComments] = useState<Comment[]>([])

    const addComment = () => {
        const new_comment = {
            content: comment, 
            comments: []
        }
        setComments([...comments, new_comment])
        setComment("")
    }
    return (
        <View>
            <Text>{props.comment}</Text>
            <View style={styles.comment}>
                <TextInput onChangeText={setComment} value={comment}/>
                <Button title={"New Comment"} onPress={addComment}/>
            </View>
            <View style={styles.list}>
                <CommentList comments={comments}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    comment:{
        flexDirection:'row'
    },
    list: {
        paddingLeft: 20,
    }
})