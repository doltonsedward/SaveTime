import React from "react"
import { Box } from "native-base"

// import custom component
import { AddTask, WrapperListTodo } from "../components/organisms"

const Home = () => {
    return (
        <Box style={{flex: 1}}>
            <WrapperListTodo />
            <AddTask />
        </Box>
    )
}

export default Home
