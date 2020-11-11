import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  SubTitle,
  LabelInput,
  InputContainer,
  Advance,
  ButtonEdit,
  ButtonEditText,
  ButtonEditView,
} from './styles';

import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';

import Input from '../../components/Form/Input';

export default function RegisterPatient({ navigation }) {

  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  async function handleAdvance() {
    navigation.navigate('RegisterStep2', {
      patientInfo: {
        username,
        surname,
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
            <Input
              placeholder="Nome"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={username}
              onChangeText={setUsername}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Sobrenome</LabelInput>
            <Input
              placeholder="Sobrenome"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={surname}
              onChangeText={setSurname}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput> CPF </LabelInput>
            <Input
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
            <Input
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
            <Input
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
            <Input
              placeholder="Senha"
              placeholderTextColor="#A8A8A8"
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Confirme a senha</LabelInput>
            <Input
              placeholder="Senha"
              placeholderTextColor="#A8A8A8"
              value={passwordConfirm}
              secureTextEntry={true}
              onChangeText={setPasswordConfirm}
            />
          </InputContainer>
        </Row>
        <ButtonEditView>
          <ButtonEdit onPress={() => handleAdvance()}>
            <ButtonEditText>Avançar</ButtonEditText>
          </ButtonEdit>
        </ButtonEditView>
      </Container>
    </>
  )
}
