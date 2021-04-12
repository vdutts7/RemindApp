// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RemRun from "../Screens/RemRun";
import Login from "../Screens/Login";
import mainPage from "../Screens/MainPage";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const LoginPageNav = () => {
  return(
    <Stack.Navigator>
       <Stack.Screen name="login" component={Login}/>
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
     
      <Stack.Screen name="Home" component={mainPage} />
      <Stack.Screen name="Add" component={RemRun} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Add" component={RemRun} />
    </Stack.Navigator>
  );
}

export default { MainStackNavigator, ContactStackNavigator };