import React from "react"
import { Box, Text } from "native-base"

// import custom component
import { ListTodo } from "../../molecules"

const WrapperListTodo = () => {
    return (
        <Box>
            <Box>
                <Text>Today</Text>
                <ListTodo />
            </Box>
            <Box>
                <Text>Yesterday</Text>
                <ListTodo />
            </Box>
        </Box>
    )
}

export default WrapperListTodo
