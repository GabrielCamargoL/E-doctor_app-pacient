import React from 'react';
import { StatusBar } from 'react-native';
import { colors, general, fonts } from './src/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
// import { Container } from './styles';

import NotificationProvider from './src/contexts/notifications';

import PushNotification from 'react-native-push-notification';

export default function navinext() {
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      // process the notification

      // (required) Called when a remote is received or opened, or local notification is opened
    },
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NotificationProvider>
          <StatusBar translucent backgroundColor={colors.primary} />
          <Routes />
        </NotificationProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
