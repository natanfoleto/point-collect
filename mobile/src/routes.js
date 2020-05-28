import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Maps from './pages/Maps';


export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false}}>

          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Maps" component={Maps} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}
