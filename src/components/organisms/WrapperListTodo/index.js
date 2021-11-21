import React from "react"
import { StyleSheet } from 'react-native'
import { Alert, Box, FlatList, Text, HStack } from "native-base"
import { Entypo } from '@expo/vector-icons'

// import custom component
import { ListTodo } from "../../molecules"
import { API } from "../../../config/api"
import axios from "axios"

const WrapperListTodo = () => {
    const [dataTodo, setDataTodo] = React.useState([])
    const [alertOpen, setAlertOpen] = React.useState(false)

    React.useEffect(() => {
        getDataTodo()
    }, [])

    const _renderItem = ({ item }) => {
        return (
            <ListTodo title={item.name} subtitle={item.email} statusOnPress={()=> setAlertOpen(true)} />
        )
    }

    const getDataTodo = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setDataTodo(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box style={styles.container}>
            <Box style={styles.boxTodo}>
                <HStack style={styles.innerBoxTodo} shadow={8}>
                    <Entypo name="add-to-list" size={24} color="white" />
                </HStack>
            </Box>
            <Box>
                <Text>Today {dataTodo.length}</Text>
                <Box style={styles.wrapperListTodo}>
                    <FlatList 
                        data={dataTodo}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={_renderItem}
                        scrollEnabled={true}
                    />
                </Box>
                
            </Box>
            <Box>
                <Text>Yesterday</Text>
                {/* <ListTodo /> */}
            </Box>
            {
                alertOpen ? 
                <Alert style={styles.customAlert}>
                    <Text onPress={()=> setAlertOpen(false)}>Success</Text>
                </Alert>
                : null
            }
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25,
    },
    boxTodo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerBoxTodo: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AAAEE6',
        borderRadius: 50
    },
    customAlert: {
        position: 'absolute',
        bottom: 0
    },
    wrapperListTodo: {
        height: 200
    }
})

export default WrapperListTodo
