
import React, { useState } from 'react';
import { Button, Text, View, FlatList, StyleSheet, } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Settings from "./BST"
import { color } from 'react-native-reanimated';


//const Tab = createBottomTabNavigator();
const _storeData = async () => {
  try {
    await AsyncStorage.setItem(
      '@MySuperStore:key',
      'I like to save it.'
    );
    alert("It works")
  } catch (error) {
    // Error saving data
    alert("It has a problem with the code")
  }
};
   
const Login = ({ navigation }) => {
  const [name, setText] = useState('');
  const [Password, setPas] = useState('');

  _storeData
  return (
    <View style={styles.background}>

      <Text style={styles.paragraph}>
        Please Enter Your Information Below
    </Text>

      <TextInput style={styles.TextInputFormat}
        placeholder="Username"
        onChangeText={name => setText(name)}
        defaultValue={"Enter Username"}
      />

      <TextInput style={styles.TextInputFormat}
        placeholder="Password"
        onChangeText={Password => setPas(Password)}
        defaultValue={"Enter Password"}
        secureTextEntry={true}
      />


      <Button style={styles.addButton}
        title="Enter"
        onPress={() => {
          console.log(name);
          console.log(Password);
          navigation.navigate('Add')
        }
        }
      //color
      />



    </View>
  );
};

const styles = StyleSheet.create({
  TextInputFormat: {
    color: 'black',
    backgroundColor: '#ced7d8',
    fontSize: 30,
    margin: 24,
    justifyContent: "center",
    alignItems: 'center',
  },
  Information: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  LongTextFormat: {
    color: 'black',
    backgroundColor: 'lightblue',
    fontSize: 20,
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: 'top'
  },
  paragraph: {
    color: "black",
    fontSize: 30,
    textDecorationColor: "red",
    textShadowColor: "red",
    textShadowRadius: 1,
    textAlign: "center",
    margin: 24,

  },
  background: {
    backgroundColor: '#aed6dc',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  addButton: {
    color: '#ff9a8d',
  },
});

export default Login;