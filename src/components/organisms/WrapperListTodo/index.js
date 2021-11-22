import React from "react"
import { ImageBackground, StyleSheet } from 'react-native'
import { Alert, Box, FlatList, Text, Badge, Image } from "native-base"

// import custom component
import { ListTodo } from "../../molecules"
import { API } from "../../../config/api"

const WrapperListTodo = ({ newTodo }) => {
    const [dataTodo, setDataTodo] = React.useState([])
    const [alertOpen, setAlertOpen] = React.useState(false)

    React.useEffect(() => {
        getDataTodo()
    }, [ newTodo ])

    const deleteDataTodo = async (idTodo) => {
        try {
            await API.delete('/todo/' + idTodo)
            getDataTodo()
        } catch (error) {
            throw error
        }
    }

    const _renderItem = ({ item }) => {
        return (
            <ListTodo 
                title={item.name} 
                subtitle={item.description} 
                statusOnPress={()=> deleteDataTodo(item.id)}
            />
        )
    }

    const getDataTodo = async () => {
        try {
            const response = await API.get('/todos')
            setDataTodo(response.data.todos)
        } catch (error) {
            throw error
        }
    }

    React.useEffect(()=> {
        getDataTodo()
    }, [])

    return (
        <Box style={styles.container}>
            {/* <ImageBackground source={require("../../../assets/woolly-done.png")} resizeMode="cover">
                <Text>Inside</Text>
            </ImageBackground> */}
            <Box>
                <Text>
                    Today 
                    {
                        dataTodo.length ?
                        <Badge // bg="red.400"
                            colorScheme="danger"
                            rounded="999px"
                            mb={-4}
                            mr={-4}
                            zIndex={1}
                            variant="solid"
                            alignSelf="flex-end"
                            _text={{
                            fontSize: 12,
                            }}
                        >
                            {dataTodo.length}
                        </Badge>
                        : null
                    }
                </Text>
                <Box style={styles.wrapperListTodo}>
                    {
                        dataTodo.length ?
                        <FlatList 
                            data={dataTodo}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={_renderItem}
                            scrollEnabled={true}
                        />
                        :
                        <Box style={styles.todoEmptySession}>
                            <Image 
                                source={require('../../../assets/woolly-panda.png')}
                                alt="rest time"
                                size="xl"
                                style={{ marginBottom: 20 }}
                            />
                            <Text>You have no activity today</Text>
                            <Text>Have a nice day</Text>
                        </Box>
                    }
                </Box>
                
            </Box>
            <Box>
                <Text>Yesterday</Text>
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
    },
    todoEmptySession: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WrapperListTodo
