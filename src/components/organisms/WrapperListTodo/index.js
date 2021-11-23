import React from "react"
import { StyleSheet } from 'react-native'
import { Alert, Box, FlatList, Text, Image, Button, Modal, FormControl, Input } from "native-base"
import { StatusBar } from 'expo-status-bar';

// import custom component
import { ListTodo } from "../../molecules"
import { API } from "../../../config/api"

const WrapperListTodo = ({ newTodo }) => {
    const [dataTodo, setDataTodo] = React.useState([])
    const [isOpen, setIsOpen] = React.useState(false)
    const [currentListId, setCurrentListId] = React.useState(0)
    const [form, setForm] = React.useState({
        name: "",
        description: ""
    })

    React.useEffect(() => {
        getDataTodo()
    }, [ newTodo ])

    const handleChange = (val, target) => {
        target === 'name' ?
        setForm(prev => ({
            ...prev,
            name: val
        }))
        :
        setForm(prev => ({
            ...prev,
            description: val
        }))
    }

    const deleteDataTodo = async (idTodo) => {
        try {
            await API.delete('/todo/' + idTodo)
            getDataTodo()
        } catch (error) {
            throw error
        }
    }

    const updateDataTodo = async (idTodo) => {
        try {
            await API.patch('/todo/' + idTodo, form)
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
                onEdit={()=> {
                    setIsOpen(true)
                    setCurrentListId(item.id)
                    setForm(prev => ({
                        ...prev,
                        name: item.name,
                        description: item.description
                    }))
                }}
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
            <StatusBar style="light" />
            <Box>
                <Box style={{ flexDirection: 'row' }}>
                    Today
                    {
                        dataTodo.length ?
                        <Box style={styles.badge}>
                            <Text style={{ color: 'white', fontSize: 10 }}>{dataTodo.length}</Text>
                        </Box>
                        : null
                    }
                </Box>
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

            <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Add Task</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input isRequired={true} value={form.name} onChangeText={(val)=> handleChange(val, 'name')} />
                        </FormControl>
                        <FormControl mt="3">
                            <FormControl.Label>Description</FormControl.Label>
                            <Input value={form.description} onChangeText={(val)=> handleChange(val, 'description')} />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button 
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={()=> setIsOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={()=> {
                                    setIsOpen(false)
                                    updateDataTodo(currentListId)
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25,
    },
    badge: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2
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
        height: 200,
        marginTop: 10
    },
    todoEmptySession: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WrapperListTodo
