import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import CommentList from './CommentList'

export default function Comment(props: any) {
    return (
        <View style={styles.container}>
            <Text style={{borderWidth: 1}}>{props.content}</Text>
            <View style={styles.list}>
                <CommentList textHint={props.textHint}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    list: {
        paddingLeft: 20,
    }
})