import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
  SubTitle,
  LabelInput,
  InputLabel,
  InputContainer,
  ChangeData,
  ButtonEdit,
  ButtonEditText,
  ButtonEdit1View,
} from './styles';

import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';

export default function ChangePassword({ navigation }) {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  async function handleChangePassword() {
    //chamar API
  }

  async function handleCancelChangePassword() {
    //chamar API
  }

  return (
    <>
      <Container>
        <SubTitle> Trocar senha </SubTitle>

        <Row>
          <InputContainer>
            <LabelInput style={{ fontSize: 16 }}>Nova Senha</LabelInput>
            <InputLabel
              placeholder="********"
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={newPassword}
              secureTextEntry={true}
              password={true}
              onChangeText={setNewPassword}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Confirme a senha</LabelInput>
            <InputLabel
              placeholder="********"
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={confirmPassword}
              secureTextEntry={true}
              password={true}
              onChangeText={setConfirmPassword}
            />
          </InputContainer>
        </Row>

        <ButtonEdit1View>
            <ButtonEdit onPress={handleChangePassword}>
              <ButtonEditText>AVANÇAR</ButtonEditText>
            </ButtonEdit>
        </ButtonEdit1View>

        <Row style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => handleCancelChangePassword()}>
            <ChangeData>CANCELAR</ChangeData>
          </TouchableOpacity>
        </Row>
      </Container>
    </>
  )
}