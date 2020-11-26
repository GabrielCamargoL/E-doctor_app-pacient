import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import {  createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CustomDrawer from './components/CustomDrawer'

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Login from './pages/Login';
import ErrorLogin from './components/ErrorLogin';


import Home from './pages/Home';
import Options from './pages/Options';
import Evaluation from './pages/Evaluation';
import Schedule from './pages/Schedule';
import MySchedule from './pages/MySchedule';

import RegisterPatient from './pages/RegisterPatient';
import RegisterStep2 from './pages/RegisterPatient/RegisterStep2';
import RegisterStep3 from './pages/RegisterPatient/RegisterStep3';

import DetailsDoctor from './pages/DetailsDoctor';

import MedicalInfo from './pages/MedicalInfo';
import Doubt from './pages/Doubt'

import Prescriptions from './pages/Prescriptions'
import PrescriptionsDetails from './pages/PrescriptionsDetails'

import RegisterDependent from './pages/RegisterDependent';

import ProfilePatient from './pages/ProfilePatient';
import EditPassword from './pages/ProfilePatient/EditPassword';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props =>
        <CustomDrawer {...props} />
    }>
      <Drawer.Screen
        name="Home"
        component={Home}
      />

      <Drawer.Screen
        options={{ title: 'Perfil' }}
        name="ProfilePatient"
        component={ProfilePatient}
      />

      <Drawer.Screen
        options={{ title: 'Dúvidas' }}
        name="Doubt"
        component={Doubt}
      />

      <Drawer.Screen
        options={{ title: 'Prescrições' }}
        name="Prescriptions"
        component={Prescriptions}
      />

       <Drawer.Screen
        options={{ title: 'Ficha Médica' }}
        name="MedicalInfo"
        component={MedicalInfo}
      />

      <Drawer.Screen
        options={{ headerShown: false, title: 'Minha Agenda' }}
        name="MySchedule"
        component={MySchedule}
      />

    </Drawer.Navigator>
  )
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
        name="ErrorLogin"
        component={ErrorLogin}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="DetailsDoctor"
        component={DetailsDoctor}
      />

      <Stack.Screen
        options={{ headerShown: true, title: '' }}
        name="PrescriptionsDetails"
        component={PrescriptionsDetails}
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
        options={{ headerShown: false }}
        name="Home"
        component={DrawerNavigator}
      />
      <Stack.Screen
        options={{ title: "Avaliações"}}
        name="Evaluation"
        component={Evaluation}
      />
      <Stack.Screen
        options={{ title: 'Agendamento' }}
        name="Schedule"
        component={Schedule}
      />

    </Stack.Navigator>
  );
};
