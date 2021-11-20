import React from "react"
import { Text, Heading, Box } from "native-base"

const TextTodo = ({ title, subtitle }) => {
    return (
        <Box>
            <Heading style={{fontSize: 20}}>{title}</Heading>
            <Text>{subtitle}</Text>
        </Box>
    )
}

export default TextTodo
