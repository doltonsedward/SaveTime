import React from "react"
import { HStack } from "native-base"
import { StyleSheet } from "react-native"

import { TextTodo, StatusTodo } from "../../atoms"

const ListTodo = ({ title, subtitle, statusOnPress }) => {
    if (!title || !subtitle) {
        return (
            <HStack style={styles.container}>
            </HStack>
        )
    }

    return (
        <HStack style={styles.container}>
            <StatusTodo onPress={statusOnPress} />
            <TextTodo title={title} subtitle={subtitle} />
        </HStack>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginBottom: 5
    }
})

export default ListTodo
