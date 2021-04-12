
// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Button} from 'react-native';
import HomeScreen from "../Screens/Home";
import RemRun from "../Screens/RemRun";
import Login from "../Screens/Login";
import  MainStackNavigator from "./StackNavigator"
import mainPage from "../Screens/MainPage"


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
       <Stack.Screen name="Login Page" component={Login} />
       <Stack.Screen name="Add" component={mainPage} 
       options={({ navigation }) => ({
            title: 'Home Page',
            headerLeft: null,

            headerStyle: { backgroundColor: '#ff9a8d' },
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Login Page')}
                title="LogOff    "
                color="#000000"
              />
            ),
          })}/>
    </Stack.Navigator>
  );
}

export default LoginPageNav;