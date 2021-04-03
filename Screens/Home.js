import * as React from 'react';
import { Button, Text, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import RemRun from "./RemRun";



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';






const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const HomeScreen = ({ navigation }) => {
  const state = {
    data: [{
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item2',
    }],
  }
  

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  ); 

  
  return (
    <View>
      
      <FlatList data={state.data} renderItem={renderItem}/>
     
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;