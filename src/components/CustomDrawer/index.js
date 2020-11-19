import React from 'react'
import {
  DrawerItemList
} from '@react-navigation/drawer';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Container,
  Col,
  Card,
  IconCard,
  Image,
  NameLabel,
  Label,
  ViewGoBackIcon,
  GoBackIcon,
  TouchableOptions,
  OptionsText,
  SignOutIcon
} from './styles';

import {signOut} from '../../services/auth';

export default function CustomDrawer({...props}) {

  const handleLogout = async () => {
    try {
      signOut();
      props.navigation.navigate('Login')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <SafeAreaView>
        <Card onPress={() => props.navigation.navigate('ProfilePatient')}>
          <ViewGoBackIcon onPress={() => props.navigation.closeDrawer()}>
            <GoBackIcon />
          </ViewGoBackIcon>
          <IconCard>
            <Image />
          </IconCard>

          <Col>
            <NameLabel>Thiago Henrique</NameLabel>
            <Label>Editar</Label>
          </Col>
        </Card>
        <DrawerItemList {...props}/>
        <TouchableOptions onPress={handleLogout}>
          <SignOutIcon />
          <OptionsText>Sair</OptionsText>
        </TouchableOptions>
      </SafeAreaView>
    </Container>
  )
}
