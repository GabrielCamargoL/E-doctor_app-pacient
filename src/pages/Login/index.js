/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  AsyncStorage,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

import {
  Container,
  ViewLoad,
  TextLoad,
  Logo,
  Content,
  Input,
  Button,
  Register,
  TextRecover,
  LabelContainer,
  InputLabel,
  InputContainer,
} from './styles';

import { colors, general, fonts } from '../../styles';

import api from '../../services/api';

import Lottie from 'lottie-react-native';
import loadingHeart from '../../assets/loadingHeart.json';

import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);

  useEffect(() => {
    verifyToken();
  }, []);

  async function verifyToken() {
    const token = await AsyncStorage.getItem('token');
    setLoad(true)

    if (token) {
      setTimeout(() => {navigation.replace('Home')}, 3000);
    }
    setLoad(false)
  }

  async function handleLogin() {
    setLoad(true);
    try {
      const response = await api.post('/patientAuth/signIn', {
        email,
        password,
      });
      if (response.data) {
        await AsyncStorage.setItem('token', response.data.token.token);
        await AsyncStorage.setItem('auth_id', response.data.user.id.toString());
        await AsyncStorage.setItem('username', response.data.user.username);
        await AsyncStorage.setItem('surname', response.data.user.surname);
        await AsyncStorage.setItem('email', response.data.user.email);
        setTimeout(() => navigation.replace('Home'), 3000);
      } else {
        setLoad(false);
        navigation.navigate('ErrorLogin');
      }
    } catch (err) {
      console.log(err);
      setLoad(false);
      navigation.navigate('ErrorLogin');
    }
  }

  return (
    <>
      {load ? (
        <>
          <ViewLoad>
            <Lottie
              source={loadingHeart}
              style={{ width: '80%' }}
              autoSize
              autoPlay
              loop={true}
              resizeMode="cover"
            />
            <TextLoad>Carregando informações, aguarde...</TextLoad>
          </ViewLoad>
        </>
      ) : (
        <>
          <Container>
            <Logo source={logo} resizeMode="contain" />
            <InputContainer>
              <LabelContainer>
                <Text style={{ fontSize: 16 }}>Email</Text>
              </LabelContainer>
              <InputLabel
                placeholder="jose@email.com"
                placeholderTextColor="#A8A8A8"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </InputContainer>

            <InputContainer>
              <LabelContainer>
                <Text style={{ fontSize: 16 }}>Senha</Text>
              </LabelContainer>
              <InputLabel
                placeholder="*****"
                placeholderTextColor="#A8A8A8"
                keyboardType="default"
                password={true}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </InputContainer>

            <KeyboardAvoidingView behavior="height">
              <Content>
                <Button onPress={handleLogin}>
                  <Image
                    source={require('../../assets/setadireita.png')}
                    style={{ width: 19, height: 20 }}
                  />
                </Button>
                <Text> Entrar </Text>

                <Register
                  onPress={() => navigation.navigate('RegisterPatient')}>
                  Criar uma conta
                </Register>
              </Content>
            </KeyboardAvoidingView>
          </Container>
        </>
      )}
    </>
  );
}
