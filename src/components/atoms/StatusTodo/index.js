import React from "react"
import { Pressable } from "native-base"
import { StyleSheet } from "react-native"

const StatusTodo = ({ ...rest }) => {
    return <Pressable style={styles.container} {...rest}></Pressable>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginRight: 8,
        width: 20,
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
    }
})

export default StatusTodo
