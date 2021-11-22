import React from "react"
import { Text, Heading, Box } from "native-base"

const TextTodo = ({ title, subtitle, onPress }) => {
    return (
        <Box>
            <Heading style={{fontSize: 20}} onPress={onPress}>{title}</Heading>
            <Text onPress={onPress}>{subtitle}</Text>
        </Box>
    )
}

export default TextTodo
