import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import RemRun from "../Screens/RemRun";
import TabNavigator from "./TabNav";
import HomeScreen from "../Screens/Home"
import MainStackNavigator from "./StackNavigator"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Add" component={RemRun} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;