import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'; 

import{ AuthContext } from '../Components/context';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export function DrawerContent(props) {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

    return(
        <View style={{flex:1}}>
          
          <DrawerContentScrollView {...props}>
          
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                  <View style={{flexDirection:'row', marginTop: 15}}>
                    <Avatar.Image 
                      source={{
                        uri: 'https://i.insider.com/555264b0ecad041477fbd87e?width=1100&format=jpeg&auto=webp'
                      }}
                      size={50}
                    />
                    <View style={{marginLeft: 15, flexDirection: 'column'}}>
                      <Title styles={styles.title}>Elon Musk</Title>
                      <Caption styles={styles.caption}>@elonmusk</Caption>
                    </View>
                  </View>
                  <View style={styles.row}>
                  </View>
                </View>
                <Text style={styles.preferenceTitle}> Pages</Text>
                <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem
                    icon={({color, size}) => (
                      <Icon
                      name="clipboard"
                      color={color}
                      size={size}
                      />
                    )}
                    label="Today"
                    onPress={() => {props.navigation.navigate('Home')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                      <Icon 
                      name="account-outline" 
                      color={color}
                      size={size}
                      />
                    )}
                    label="Personal"
                    onPress={() => {props.navigation.navigate('Personal')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                      <Icon 
                      name="flag" 
                      color={color}
                      size={size}
                      />
                    )}
                    label="Important"
                    onPress={() => {props.navigation.navigate('Important')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                      <Icon 
                      name="grid" 
                      color={color}
                      size={size}
                      />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('SettingsScreen')}}
                  />
                </Drawer.Section >
                <Text style={styles.preferenceTitle}> Preferences</Text>
                <Drawer.Section>
                  <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                      <Text style={styles.preferencesText}>Dark Theme</Text>
                      <View pointerEvents="none">
                        <Switch value={isDarkTheme}/>
                      </View>
                    </View>
                  </TouchableRipple>
                </Drawer.Section>
            </View>
          </DrawerContentScrollView>
          <Drawer.Section style={StyleSheet.bottomDrawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="exit-to-app"
                color={color}
                size={size}
                />
              )}
              label="Sign Out"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  preferencesText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  preferenceTitle: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
});