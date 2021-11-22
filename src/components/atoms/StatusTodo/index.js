import React from "react"
import { Pressable } from "native-base"
import { StyleSheet } from "react-native"
import { Entypo, AntDesign } from '@expo/vector-icons'; 

const StatusTodo = ({ ...rest }) => {

    return (
        <Pressable style={styles.container} {...rest}>
            {
                rest.status === 'done' ?
                <AntDesign name="checkcircle" size={20} color="green" />
                :
                <Entypo name="circle" size={20} color="gray"  />
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginRight: 8,
    }
})

export default StatusTodo
