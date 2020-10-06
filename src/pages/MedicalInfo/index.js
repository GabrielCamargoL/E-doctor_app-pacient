import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  LabelInput,
  InputLabel,
  InputContainer,
  ButtonSaveView,
  ButtonSave,
  ButtonSaveText,
} from './styles';

import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import styled from 'styled-components';

export default function MedicalInfo({ navigation, route }) {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [allergy, setAllergy] = useState('');
  const [medicine, setMedicine] = useState('');
  const [disease, setDisease] = useState('')
  


  async function saveMedInfo() {
   //comunicação com a api
  }



  return (
    <>
      <Container>
        <Row>
          <InputContainer>
            <LabelInput>Peso</LabelInput>
            <InputLabel
              placeholder="XX.XX kg"
              placeholderTextColor="#A8A8A8"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Altura</LabelInput>
            <InputLabel
              placeholder="X.XX metros"
              placeholderTextColor="#A8A8A8"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
              secureTextEntry={true}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Tipo Sanguíneo</LabelInput>
            <InputLabel
              placeholder="X"
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={bloodType}
              onChangeText={setBloodType}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Alergia</LabelInput>
            <InputLabel
              placeholder="Descreva aqui..."
              placeholderTextColor="#A8A8A8"
              keyboardType="defautl"
              value={allergy}
              onChangeText={setAllergy}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput >Medicamentos de uso frequente</LabelInput>
            <InputLabel
              placeholder="Descreva aqui..."
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={medicine}
              onChangeText={setMedicine}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Problemas de saúde</LabelInput>
            <InputLabel
              placeholder="Descreva aqui..."
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={disease}
              onChangeText={setDisease}
            />
          </InputContainer>
        </Row>

        <ButtonSaveView>
            <ButtonSave onPress={saveMedInfo}>
              <ButtonSaveText>SALVAR</ButtonSaveText>
            </ButtonSave>
        </ButtonSaveView>

      </Container>
    </>
  )
}