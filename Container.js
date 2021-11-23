import React from 'react'

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

// Import screen
import { Home, Todos } from "./src/screens"

export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Todos"
                    component={Todos}
                    options={{
                        title: "Todos",
                        headerStyle: {
                            backgroundColor: "#DC932E"
                        },
                        headerTintColor: "white",
                        headerTitleStyle: {
                            fontFamily: "Poppins",
                            fontSize: 16
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}