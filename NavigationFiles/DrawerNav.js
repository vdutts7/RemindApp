import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import RemRun from "../Screens/RemRun";
import TabNavigator from "./TabNav";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Add a New Reminder" component={RemRun} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;