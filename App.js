// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStackNavigator from "./NavigationFiles/StackNavigator"

import LoginPageNav from "./NavigationFiles/mainNav";



 const App = () => {
  return (
    <NavigationContainer>
      <LoginPageNav/>
    </NavigationContainer>
  );
}
export default App;
