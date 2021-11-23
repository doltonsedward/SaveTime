import React from "react"
import { Pressable } from "native-base"
import { StyleSheet } from "react-native"
import { Entypo, AntDesign } from '@expo/vector-icons'; 

const StatusTodo = ({ ...rest }) => {

    return (
        <Pressable style={styles.container} {...rest}>
            {
                rest.status === 'done' ?
                <AntDesign name="checkcircle" size={24} color="#116530" />
                :
                <Entypo name="circle" size={24} color="gray"  />
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
