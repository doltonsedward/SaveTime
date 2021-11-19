import React from "react"
import { Box } from "native-base"

// import custom component
import { ListTodo } from "../components/molecules"

const Home = () => {
    return (
        <Box>
            <ListTodo />
        </Box>
    )
}

export default Home
