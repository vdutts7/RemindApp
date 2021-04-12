import React, { useState } from 'react';
import { Button, Text, View, title, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


import AsyncStorage from '@react-native-community/async-storage'

   // create a function that saves your data asyncronously
 const  _storeData = async () => {
    try {
        await AsyncStorage.setItem('name', 'John');
    } catch (error) {
        alert("Error saving data")
    }
}

  

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

const readData = async () => {
  const Data = null; 
  try {
    Data = await AsyncStorage.getItem("@newKeyName")
    console.log(Data)
    Data = JSON.parse()
    console.log(Data)
    console.log("Hi1")
    alert('Oi')
  } catch (e) {
    console.log("Hi")
    alert('Failed to fetch the data from storage1')
  }
  return Data;
}

const RemRun = ({ navigation }) => {
  const [name, setText] = useState('');
  const [discription, setDis] = useState('');
  const [Goals, setGoals] = useState('');

  return (

    <ScrollView>
      <Text style={styles.paragraph}>Input a Workout Plan</Text>
      <TextInput style={styles.TextInputFormat}
        placeholder="Name of Workout"
        onChangeText={name => setText(name)}
        defaultValue={name}
      />
      <Text style={styles.paragraph}>Describe Your Plan</Text>
      <TextInput
        numberOfLines={5}
        style={styles.LongTextFormat}
        multiline={true}
        placeholder="Description of What You Plan to Do:"
        onChangeText={discription => setDis(discription)}
        defaultValue={discription} />
      <Text style={styles.paragraph}>Goals For This Workout:</Text>
      <TextInput
        numberOfLines={2}
        style={styles.LongTextFormat}
        multiline={true}
        placeholder="Describe Your Goals Here:"
        onChangeText={Goals => setGoals(Goals)}
        defaultValue={Goals} />

      <Button
        title="Add Workout to List"
        onPress={() => {
          const Node = {
            title: name,
            discription: discription,
            goals: Goals
          
          };
          //saveData(Node)
          _storeData()
          navigation.navigate('Home')
        }
        }
      //color
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TextInputFormat: {
    color: 'black',
    backgroundColor: 'lightblue',
    fontSize: 30,
    margin: 24,
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
    backgroundColor: 'lightblue'
  },
  addButton: {
    color: 'green'
  }
});

export default RemRun;
