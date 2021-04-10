import React, {useState} from 'react';
import { Button, Text, View, FlatList, StatusBar, StyleSheet,  ListView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import RemRun from "./RemRun";
//import { StatusBar } from 'expo-status-bar';
//import Header from "./components/header";
import TodoItem from "../Components/todoitem";
import AddTodo from "../Components/addtodo"
//import Sandbox from "./components/sandbox"



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const readData = async () => {
  const Data = null; 
  try {
    Data = await AsyncStorage.getItem('@MySuperStore:key')
    console.log(Data)
    Data = JSON.parse()
    console.log(Data)
    console.log("Hi1")
    alert('Oi')
  } catch (e) {
    console.log("Hi")
    alert('Failed to fetch the data from storage12')
  }
  return Data;
}


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

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([
      {text: 'buy coffee', key: '1'},
      {text: 'create an app', key: '2'},
      {text: 'play on the switch', key: '3'}
  ]);
  _storeData
  const [name, setName] = useState()

  setName(readData)
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !=key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('Error', 'Todos must be over 3 characters long.', [
        {text: 'OK', onPress: () => console.log('alert closed')}
      ])
    }

  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text >
            {name}          
        </Text>
      <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
          <Button title={"Hello"}onPress = {() => navigation.navigate("Add")}></Button>
          </View>
    </View>
    </TouchableWithoutFeedback>
  );
}





const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Button title="Hello World"/>
  </View>
);


const App = ({ navigation }) => {
  const state = {
    data: [{
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },],
  }
  

  const renderItem = ({ item }) => (
    <Item title={item} />
  ); 

  const value = _retrieveData()
  return (
    <View>
      <Text style={styles.title}>Hello </Text>
      <Text>{}</Text>
      <FlatList data={value} renderItem={renderItem}/>
      
    </View>

  );
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex: 1, 
  },
  list: {
    marginTop: 20,
    backgroundColor: 'yellow',
    flex: 1,
  }
});

export default HomeScreen;