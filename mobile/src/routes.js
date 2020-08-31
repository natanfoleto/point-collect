import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Maps from './pages/Maps';
import Profile from './pages/Profile';
import Company from './pages/Company';


export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false}}>

          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen name="Maps" component={Maps} />
          <AppStack.Screen name="Profile" component={Profile} />
          <AppStack.Screen name="Company" component={Company} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}
