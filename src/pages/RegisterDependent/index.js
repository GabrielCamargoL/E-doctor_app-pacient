import React, { useState, useEffect } from 'react';

import {
  Container,
  Col,
  Row,
  SubTitle,
  LabelInput,
  InputLabel,
  InputContainer,
  ButtonAdvanceView,
  ButtonAdvance,
  ButtonAdvanceText,
} from './styles';

import { Text, View, StyleSheet, Button, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import styled from 'styled-components';

export default function RegisterDependent({ navigation, routes }) {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [checkboxCpf, setCheckboxCpf] = useState(false);
  const [phone, setPhone] = useState(''); 
  


  async function advanceDependent() {
   //comunicação com a api//
  }



  return (
    <>
      <Container>
        <SubTitle> Dados </SubTitle>
        <Row>
          <InputContainer>
            <LabelInput>Nome</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={name}
              onChangeText={setName}
            />
          </InputContainer>
        </Row>
        <Row style={{ alignItems: 'center' }}>
          <LabelInput> Possuí CPF? </LabelInput> 
          <CheckBox value={checkboxCpf} onValueChange={setCheckboxCpf} /> 
        </Row>  
                          
        <Row>
          <InputContainer>
            <LabelInput>CPF</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType="numeric"
              value={cpf}
              onChangeText={setCpf}
              secureTextEntry={true}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Telefone</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={phone}
              onChangeText={setPhone}
            />
          </InputContainer>
        </Row>

        <ButtonAdvanceView>
            <ButtonAdvance onPress={advanceDependent}>
              <ButtonAdvanceText>AVANÇAR</ButtonAdvanceText>
            </ButtonAdvance>
        </ButtonAdvanceView>
        
      </Container>
    </>
  )
}