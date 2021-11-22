import React from "react"
import { Box, Text, Button } from "native-base"
import { StyleSheet } from "react-native"

const AddTask = ({ onPress }) => {
    return (
        <Box style={styles.container}>
            <Text>TASK</Text>
            <Button bg="blue.400" style={styles.addTaskButton} onPress={onPress}>+</Button>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        bottom: 0, 
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addTaskButton: {
        marginTop: 10,
        width: 50,
        height: 65,
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25
    }
})

export default AddTask
