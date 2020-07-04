import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();


const DrawerComponent = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
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
        name=" "
        component={DrawerComponent}
        options={{
          headerLeft: ({ }) => <HeaderLeft />
        }}
      />
    </Stack.Navigator>
  );
};