import React from "react"
import { Box } from "native-base"
import { StyleSheet } from "react-native"

const StatusTodo = () => {
    return <Box style={styles.container}></Box>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginRight: 8,
        width: 20,
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50
    }
})

export default StatusTodo
