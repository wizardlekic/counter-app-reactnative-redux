import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { increment_counter, decrement_counter } from '../redux/actions/counter_actions'

const MainApp = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Button title="increase" onPress={() => dispatch(increment_counter())} />
            <Text>{counter}</Text>
            <Button title="decrease" onPress={() => dispatch(decrement_counter())} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default MainApp