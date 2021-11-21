import React, { useState } from "react"
import { Box, Pressable, Button, Image, Text } from "native-base"
import { StyleSheet } from "react-native"

const Home = () => {
    return (
        <Box style={styles.container}>
            {/* image for layout */}
            <Image 
                source={{
                    uri: "https://i.ibb.co/FBdwQZK/woolly-done-1.png"
                }}
                alt="home page"
                size={300}
                style={{ marginBottom: 25 }}
            />
            <Text fontSize="xl" style={{ marginBottom: 25 }}>Safe your time now</Text>
            <Pressable color="white">
                {({ isPressed }) => {
                    return (
                        <Button style={{width: 150, borderRadius: 25}} bg={isPressed ? "primary.200" : "primary.500"} shadow={5}>START</Button>
                    )
                }}
            </Pressable>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },

})

export default Home
