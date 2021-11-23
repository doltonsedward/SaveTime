import React, { useState } from "react"
import { HStack } from "native-base"
import { StyleSheet } from "react-native"

import { TextTodo, StatusTodo } from "../../atoms"

const ListTodo = ({ title, subtitle, statusOnPress, onEdit }) => {
    const [status, setStatus] = useState('')

    if (!title) {
        return (
            <HStack style={styles.container}>
            </HStack>
        )
    }

    return (
        <HStack style={styles.container}>
            <StatusTodo 
                onPress={()=> {
                    setStatus('done')
                    statusOnPress()
                }} 
                status={status} 
            />
            <TextTodo title={title} subtitle={subtitle} onPress={onEdit} />
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
