import React from 'react';
import { StatusBar } from 'react-native';
import {colors, general, fonts} from './src/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
// import { Container } from './styles';

export default function navinext() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent backgroundColor={colors.primary} />
        <Routes/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
