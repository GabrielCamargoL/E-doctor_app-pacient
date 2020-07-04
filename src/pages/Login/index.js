import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { NavigationHelpersContext, NavigationRouteContext } from '@react-navigation/native';

// import { Container } from './styles';

export default function Login({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home')
  }
  return (
    <>
      <SafeAreaView>
        <Button title="Ir para a Home" onPress={navigateToHome} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Home" onPress={navigateToHome} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Home" onPress={navigateToHome} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Home" onPress={navigateToHome} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Home" onPress={navigateToHome} />
      </SafeAreaView>
    </>
  );
}