import React from "react"
import { Text } from "native-base"

const TextTodo = ({ title, subtitle }) => {
    return (
        <>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </>
    )
}

export default TextTodo
