// ./App.js

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import MainStackNavigator from "./NavigationFiles/StackNavigator"
// import LoginPageNav from "./NavigationFiles/mainNav";

//  const App = () => {
//   return (
//     <NavigationContainer>
//       <LoginPageNav/>
//     </NavigationContainer>
//   );
// }
// export default App;


import React from 'react';

import { 
  NavigationContainer
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';
import SupportScreen from './Screens/SupportScreen';
import SettingsScreen from './Screens/SettingsScreen';


import { DrawerContent } from './Screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;