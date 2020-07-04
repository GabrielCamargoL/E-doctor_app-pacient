import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { NavigationHelpersContext, NavigationRouteContext } from '@react-navigation/native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  function navigateToLogin() {
    navigation.navigate('Login')
  }
  return (
    <>
      <SafeAreaView>
        <Button title="Ir para a Login" onPress={navigateToLogin} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Login" onPress={navigateToLogin} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Login" onPress={navigateToLogin} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Login" onPress={navigateToLogin} />
      </SafeAreaView>
      <SafeAreaView>
        <Button title="Ir para a Login" onPress={navigateToLogin} />
      </SafeAreaView>
    </>
  );
}