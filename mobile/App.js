import 'react-native-gesture-handler';

import * as Sentry from "@sentry/react-native";

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';

import SyncStorage from 'sync-storage';

import Routes from './src/routes';

export default function App() {
  const netInfo = useNetInfo();

  Sentry.init({
    dsn: "https://34429ff2dc4f4d76b7db7299d42fc286@o464093.ingest.sentry.io/5471314",
    enableNative: false
  });

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
