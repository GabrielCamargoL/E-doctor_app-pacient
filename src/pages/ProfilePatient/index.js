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
  ButtonEditView,
} from './styles';

import { Text, View, StyleSheet, Button, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function ProfilePatient({ navigation, routes }) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');  
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [HouseWithoutNumber, setHouseWithoutNumber] = useState(false);
  const [complement, setComplement] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');


  async function handleProfile() {
    //chamar API
  }

  async function handleEditPassword() {
    navigation.navigate('EditPassword'), {
      
    };
  }

  return (
    <>
      <Container>

        <Row>
          <InputContainer>
            <LabelInput>Nome</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType=""
              value={name}
              onChangeText={setName}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput> Telefone </LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType=""
              password={true}
              value={phone}
              onChangeText={setPhone}
              secureTextEntry={true}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>CEP</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType=""
              value={cep}
              onChangeText={setCep}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>          
            <LabelInput>Bairro</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType=""
              value={neighborhood}
              onChangeText={setNeighborhood}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput style={{ fontSize: 16 }}>Logradouro</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType=""
              value={street}
              secureTextEntry={true}
              password={true}
              onChangeText={setStreet}
            />
          </InputContainer>
        </Row>

        <Row style={{ alignItems: 'center' }}>
          <Col style={{ width: '45%' }}>
            <InputContainer>
              <LabelInput >Número</LabelInput>
              <InputLabel
                placeholder=""
                placeholderTextColor="#A8A8A8"
                keyboardType=""
                value={number}
                onChangeText={setNumber}
              />
            </InputContainer>
          </Col>

          <CheckBox value={HouseWithoutNumber} onValueChange={setHouseWithoutNumber} />
          <LabelInput> Endereço sem Número</LabelInput>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput >Complemento</LabelInput>
            <InputLabel
              placeholder=""
              placeholderTextColor="#A8A8A8"
              keyboardType=""
              value={complement}
              onChangeText={setComplement}
            />
          </InputContainer>
        </Row>

        <Row>
          <Col style={{ width: '20%' }}>
            <InputContainer>
              <LabelInput >UF</LabelInput>
              <InputLabel
                placeholder=""
                placeholderTextColor="#A8A8A8"
                keyboardType=""
                value={uf}
                onChangeText={setUf}
              />
            </InputContainer>
          </Col>

          <Col style={{ width: '80%' }}>
            <InputContainer>
              <LabelInput >Cidade</LabelInput>
              <InputLabel
                placeholder=""
                placeholderTextColor="#A8A8A8"
                keyboardType=""
                value={city}
                onChangeText={setCity}
              />
            </InputContainer>
          </Col>
        </Row>

        <ButtonEditView>
            <ButtonEdit onPress={handleProfile}>
              <ButtonEditText>EDITAR DADOS</ButtonEditText>
            </ButtonEdit>
        </ButtonEditView>

        <Row style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={handleEditPassword}>
            <ChangeData>ALTERAR SENHA</ChangeData>
          </TouchableOpacity>
        </Row>
      </Container>
    </>
  )
}