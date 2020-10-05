import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';


import Home from './pages/Home';
import Options from './pages/Options';
import Evaluation from './pages/Evaluation';
import Schedule from './pages/Schedule';

import RegisterPatient from './pages/RegisterPatient';
import RegisterStep2 from './pages/RegisterPatient/RegisterStep2';
import RegisterStep3 from './pages/RegisterPatient/RegisterStep3';

import DetailsDoctor from './pages/DetailsDoctor';

import MedicalInfo from './pages/MedicalInfo';

import RegisterDependent from './pages/RegisterDependent';

import ProfilePatient from './pages/ProfilePatient';
import EditPassword from './pages/ProfilePatient/EditPassword';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Buscar" component={Home} />
      <Tab.Screen name="Opções" component={Options} />

    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{ headerShown: false }} 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen 
        options={{ title: 'Cadastro' }} 
        name="RegisterPatient" 
        component={RegisterPatient} 
      />
      <Stack.Screen 
        options={{ title: 'Cadastro' }} 
        name="RegisterStep2" 
        component={RegisterStep2} 
      />
      <Stack.Screen 
        options={{ title: 'Cadastro' }} 
        name="RegisterStep3" 
        component={RegisterStep3} 
      />
      <Stack.Screen 
        options={{ headerShown: false }} 
        name="DetailsDoctor" 
        component={DetailsDoctor} 
      />
      <Stack.Screen 
        options={{ title: 'Perfil' }} 
        name="ProfilePatient" 
        component={ProfilePatient} 
      />
      <Stack.Screen 
        options={{ title: '' }} 
        name="EditPassword" 
        component={EditPassword} 
      />
      <Stack.Screen 
        options={{ title: 'Dependente' }} 
        name="RegisterDependent" 
        component={RegisterDependent} 
      />
       <Stack.Screen 
        options={{ title: 'Ficha Médica' }} 
        name="MedicalInfo" 
        component={MedicalInfo} 
      />
      <Stack.Screen 
        options={{ headerShown: false }} 
        name="Home" 
        component={BottomTab} 
      />
      <Stack.Screen 
        options={{ headerShown: true }} 
        name="Evaluation" 
        component={Evaluation} 
      />   
      <Stack.Screen 
        options={{ headerShown: false }} 
        name="Schedule" 
        component={Schedule} 
      />    
      
    </Stack.Navigator>
  );
};
