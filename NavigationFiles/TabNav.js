import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/Home";
import RemRun from "../Screens/RemRun";



const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Add a Reminder" component={RemRun} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}

        options={({ navigation }) => ({
          title: 'Main',
          headerLeft: null,
          headerStyle: { backgroundColor: '#228B22' },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Login')}
              title="LogOff   "
              color="#000000"
            />
          ),
        })} />

      <Tab.Screen name="Remind Me" component={RemRun}
        options={({ navigation }) => ({
          title: 'Add',
          headerLeft: null,
          headerStyle: { backgroundColor: '#228B22' },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Login')}
              title="LogOff   "
              color="#000000"
            />
          ),
        })} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;