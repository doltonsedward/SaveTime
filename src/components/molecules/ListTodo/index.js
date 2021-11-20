import React from "react"
import { HStack } from "native-base"
import { StyleSheet } from "react-native"

import { TextTodo, StatusTodo } from "../../atoms"

const ListTodo = () => {
    return (
        <HStack style={styles.container}>
            <StatusTodo />
            <TextTodo title="halo" subtitle="oke" />
        </HStack>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    }
})

export default ListTodo
