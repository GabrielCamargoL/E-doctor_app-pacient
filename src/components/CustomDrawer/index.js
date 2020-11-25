import React, {useState, useEffect} from 'react'
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
import api from '../../services/api';

export default function CustomDrawer({...props}) {
  const [path, setPath] = useState()
  const [username, setUsername] = useState('')
  const [surname, setSurname] = useState('')


  const handleLogout = async () => {
    try {
      signOut();
      props.navigation.navigate('Login')
    } catch (error) {
      console.log(error);
    }
  };

  const getUserAuthData = async () => {
    const response = await api.get('/patientAuth/getUser');
    setPath(response.data.path_avatar);
    setUsername(response.data.username);
    setSurname(response.data.surname);

  };

  useEffect(() => {
    getUserAuthData()
    console.log('aaaaaa');
  }, [])

  return (
    <Container>
      <SafeAreaView>
        <Card onPress={() => props.navigation.navigate('ProfilePatient')}>
          <ViewGoBackIcon onPress={() => props.navigation.closeDrawer()}>
            <GoBackIcon />
          </ViewGoBackIcon>
          <IconCard>
            <Image source={{uri: path?? 'https://image.flaticon.com/icons/png/512/387/387561.png'}} resizeMode='cover'/>
          </IconCard>

          <Col>
            <NameLabel>{username?? 'Carregando'}</NameLabel>
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
