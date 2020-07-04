import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackButton, Header } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();


const BottomTabComponent = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Login" component={Login} />
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
}

const DrawerComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={BottomTabComponent} name="Main" />
      {/*
       * Rest Screens
       */}
    </Drawer.Navigator>
  );
};
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Text>Open</Text>
        {/* <Image source={require('./assets/images/icons/drawer.png')} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: ({ }) => <HeaderLeft />
        }}
        component={DrawerComponent}
        name="Drawer"
      />
      {/*
         * Rest Screens
         */}
    </Stack.Navigator>
  );
};