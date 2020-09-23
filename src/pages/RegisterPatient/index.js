import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  SubTitle,
  LabelInput,
  InputLabel,
  InputContainer,
  Advance,
} from './styles';

import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function RegisterPatient({ navigation }) {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  async function handleAdvance() {
    navigation.navigate('RegisterStep2', {
      patientInfo: {
        name,
        cpf,
        email,
        phone,
        password
      }
    });
  }

  return (
    <>
      <Container>
        <SubTitle> Dados Pessoal </SubTitle>

        <Row>
          <InputContainer>
            <LabelInput>Nome</LabelInput>
            <InputLabel
              placeholder="José da Silva"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={name}
              onChangeText={setName}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput> CPF </LabelInput>
            <InputLabel
              placeholder="999999999-99"
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              password={true}
              value={cpf}
              onChangeText={setCpf}
              secureTextEntry={true}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>E-mail</LabelInput>
            <InputLabel
              placeholder="josé@email.com"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Telefone</LabelInput>
            <InputLabel
              placeholder="99999-9999"
              placeholderTextColor="#A8A8A8"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput style={{ fontSize: 16 }}>Senha</LabelInput>
            <InputLabel
              placeholder="********"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={password}
              secureTextEntry={true}
              password={true}
              onChangeText={setPassword}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Confirme a senha</LabelInput>
            <InputLabel
              placeholder="********"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={passwordConfirm}
              secureTextEntry={true}
              password={true}
              onChangeText={setPasswordConfirm}
            />
          </InputContainer>
        </Row>

        <Row style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => handleAdvance()}>
            <Advance>Avançar</Advance>
          </TouchableOpacity>
        </Row>
      </Container>
    </>
  )
}