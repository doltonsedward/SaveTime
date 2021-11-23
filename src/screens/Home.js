import React from "react"
import { Box, Pressable, Button, Image, Text } from "native-base"
import { StyleSheet } from "react-native"

const Home = ({ navigation }) => {
    return (
        <Box style={styles.container}>
            <Image 
                source={require("../assets/woolly-done.png")}
                alt="home page"
                size={300}
                style={{ marginBottom: 25 }}
            />

            <Text fontSize="lg" fontFamily="body" style={{ marginBottom: 25 }}>Safe your time now</Text>
            <Pressable color="white">
                {({ isPressed }) => {
                    return (
                        <Button fontFamily="body" style={{width: 150, borderRadius: 25}} bg={isPressed ? "primary.200" : "primary.500"} onPress={()=> navigation.navigate("Todos")}>START</Button>
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
