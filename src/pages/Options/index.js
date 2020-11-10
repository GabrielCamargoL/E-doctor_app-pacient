import React, { useState, useEffect } from 'react';

import {
  Container,
  TouchableOptions,
  OptionsText,
} from './styles';

import {Icon} from 'native-base';

import {signOut} from '../../services/auth';

export default function Options({ navigation }) {

  const handleLogout = async () => {
    try {
      signOut();
      navigation.navigate('Login')
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <>
      <Container>
        <TouchableOptions onPress={() => navigation.navigate('ProfilePatient')}>
          <OptionsText>Perfil</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('Doubt')}>
          <OptionsText>Dúvidas</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Prescrição</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('RegisterDependent')}>
          <OptionsText>Dependentes</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('MySchedule')}>
          <OptionsText>Minha Agenda</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('MedicalInfo')}>
          <OptionsText>Ficha médica</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={handleLogout}>
          <Icon type='FontAwesome' name='power-off'
            style={{marginRight:5, fontSize:22}}
          />
          <OptionsText>Sair</OptionsText>
        </TouchableOptions>
      </Container>
    </>
  )
}
