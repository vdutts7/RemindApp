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

// fetch the data back asyncronously
const _retrieveData = async () => {
  try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
          // Our data is fetched successfully
          console.log(value);
      }
  } catch (error) {
      // Error retrieving data
  }
}

   // create a function that saves your data asyncronously
const _storeData = async () => {
    try {
        await AsyncStorage.setItem('name', 'John1');
    } catch (error) {
        alert("Error saving data")
    }
}




const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([
      {text: 'buy coffee', key: '1'},
      {text: 'create an app', key: '2'},
      {text: 'play on the switch', key: '3'}
  ]);
 // _storeData
  var [name, setName] = useState()

  //setName(readData)
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
  _storeData
  if(_retrieveData != null){
    name = setName(_retrieveData)
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
          <Button title={"Hello"}onPress = {() => {
            _storeData
            navigation.navigate("Add")
            
          }}></Button>
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