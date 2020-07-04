import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './components/Splash';
import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();


const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      contentOptions={{
        labelStyle: {
          fontFamily: 'SomeFont',
          color: 'white',
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text>Open</Text>
        {/* <Image source={require('./assets/images/icons/drawer.png')} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default function Routes() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />r */}
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerComponent} />
    </Stack.Navigator>
  );
};