import React from 'react';
import {StyleSheet} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

export const HomeStack = createStackNavigator();
export const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      style={styles.tabColor}
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        style={styles.tabColor}frggggggggggg
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#6c42f5',
          tabBarIcon: ({ color }) => (
            <Icon name="clipboard" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Personal"
        style={styles.tabColor}
        component={PersonalStackScreen}
        options={{
          tabBarLabel: 'Personal',
          tabBarColor: '#6c42f5',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Important"
        component={ImportantScreenPage}
        options={{
          tabBarLabel: 'Important',
          tabBarColor: '#6c42f5',
          tabBarIcon: ({ color }) => (
            <Icon name="flag" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

export const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#6c42f5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Today',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#6c42f5" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

export const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#6c42f5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#6c42f5" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);

export const PersonalStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#6c42f5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={ProfileScreen} options={{
          title:'Personal',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#6c42f5" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </HomeStack.Navigator>
  );

  export const ImportantScreenPage = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#6c42f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={ExploreScreen} options={{
            title:'Important',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#6c42f5" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </HomeStack.Navigator>
    );

    const styles = StyleSheet.create({
      tabColor: {
        backgroundColor: '#6c42f5',
      },
    });