/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  AsyncStorage,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Container,
  ViewLoad,
  TextLoad,
  Logo,
  Content,
  Button,
  Register,
  Text
} from './styles';


import api from '../../services/api';
import { setIdKey, getToken } from '../../services/auth';

import Lottie from 'lottie-react-native';
import loadingHeart from '../../assets/loadingHeart.json';
import Input from '../../components/Form/Input';

import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);

  useEffect(() => {
    verifyToken();
  }, []);

  async function verifyToken() {
    const token = await getToken();
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
        await setIdKey(response.data.user.id);
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

              <Text>Email</Text>
              <Input
                placeholder="Email"
                placeholderTextColor="#A8A8A8"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />


              <Text>Senha</Text>
              <Input
                placeholder="Senha"
                placeholderTextColor="#A8A8A8"
                keyboardType="default"
                password={true}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />

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
