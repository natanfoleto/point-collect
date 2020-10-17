import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';

import SyncStorage from 'sync-storage';

import Routes from './src/routes';

export default function App() {
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected) {
      SyncStorage.set('internet_connection', false);
    } else {
      SyncStorage.set('internet_connection', true);
    }
  }, [netInfo]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </NavigationContainer>
  );
}
