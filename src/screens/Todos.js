import React, { useState } from "react"
import { Box, Button, FormControl, Input, Modal } from "native-base"

// import custom component
import { AddTask, WrapperListTodo } from "../components/organisms"

// Import API
import { API } from '../config'

const Todos = () => {
    const [todos, setTodos] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const [form, setForm] = useState({
        name: '',
        description: ''  
    })

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

    const handleAddTask = async () => {
        try {
            const { name, description } = form
            const response = await API.post('/todo', {
                name,
                description
            })

            setTodos(response.data)
        } catch (error) {
            throw error
        }
    }
    
    return (
        <Box style={{flex: 1}}>
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
                                    handleAddTask()
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <WrapperListTodo newTodo={todos} />
            <AddTask onPress={()=> setIsOpen(true)} />
        </Box>
    )
}

export default Todos
