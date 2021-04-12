import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, AppRegistry } from 'react-native';
import RemRun from "../Screens/RemRun"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function AddTodo({ submitHandler }, { navigation }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress ={()=> 
           //submitHandler(text)
            navigation.navigate('home')
            } title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})