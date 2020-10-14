import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';


const Auth = createStackNavigator();

import Home from './pages/Home';
import SignUp from './pages/SignUp';

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{headerShown: false}}
    >
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  )
}



{ /*
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Maps from './pages/Maps';
import Profile from './pages/Profile';
import Company from './pages/Company';
import ResetPassword from './pages/ResetPassword';
import EditProfile from './pages/EditProfile';


export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false}}>

          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen name="Maps" component={Maps} />
          <AppStack.Screen name="Profile" component={Profile} />
          <AppStack.Screen name="Company" component={Company} />
          <AppStack.Screen name="ResetPassword" component={ResetPassword} />
          <AppStack.Screen name="EditProfile" component={EditProfile} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}

*/}
