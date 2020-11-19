import React, { useState, useEffect } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  RefreshControl
} from 'react-native';

import {
  Container,
  Row,
  LabelInput,
  InputContainer,
  ButtonSaveView,
  ButtonSave,
  ButtonSaveText,
  Title
} from './styles';

import { Alert } from 'react-native';
import Input from '../../components/Form/Input';


import api from '../../services/api';

export default function MedicalInfo() {
  const route = useRoute();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [allergy, setAllergy] = useState('');
  const [medicine, setMedicine] = useState('');
  const [disease, setDisease] = useState('')
  const [consult, setConsult] = useState(false)

  const onRefresh = React.useCallback(() => {
    getMedicalInfo()
  }, []);

  const getMedicalInfo = async () => {
    try {
      setRefreshing(true);
      const { data } = await api.get('medicalInfo/show');

      setWeight(data.weight)
      setHeight(data.height)
      setAllergy(data.allergy)
      setMedicine(data.personal_medicine)
      setBloodType(data.blood_type)
      setDisease(data.health_problems)
      setRefreshing(false);

    } catch (error) {
      console.log('error', error);
    }
  }

  const handleMedicalInfo = async () => {
    try {
      setRefreshing(true);
      const response = await api.put('medicalInfo/update', {
        weight,
        height,
        blood_type: bloodType,
        health_problems: disease,
        allergy,
        personal_medicine: medicine
      })
      setRefreshing(false);
      if (response.status == 200) {
        Alert.alert(
          'Sucesso',
          'Dados alterados com sucesso',
          [
            { text: 'Fechar',  onPress: consult ? navigation.goBack() : null }
          ],
          { cancelable: false }
        )
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (route.params) {
      setConsult(route.params.consult)
    }
    getMedicalInfo()
  }, [])

  return (
    <>
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Title>Ficha Médica</Title>

        <LabelInput>Peso</LabelInput>
        <Input
          placeholder="XX.XX kg"
          keyboardType="numeric"
          returnKeyType="go"
          placeholderTextColor="#A8A8A8"
          value={`${weight?? ''}`}
          onChangeText={setWeight}
        />

        <LabelInput>Altura</LabelInput>
        <Input
          placeholder="X.XX metros"
          keyboardType="numeric"
          returnKeyType="go"
          placeholderTextColor="#A8A8A8"
          value={`${height?? ''}`}
          onChangeText={setHeight}
        />

        <LabelInput>Tipo Sanguíneo</LabelInput>
        <Input
          placeholder="X"
          placeholderTextColor="#A8A8A8"
          value={bloodType?? ''}
          onChangeText={setBloodType}
        />

        <LabelInput>Alergia</LabelInput>
        <Input
          placeholder="Descreva aqui..."
          placeholderTextColor="#A8A8A8"
          value={allergy?? ''}
          onChangeText={setAllergy}
        />

        <LabelInput >Medicamentos de uso frequente</LabelInput>
        <Input
          placeholder="Descreva aqui..."
          placeholderTextColor="#A8A8A8"
          value={medicine?? ''}
          onChangeText={setMedicine}
        />

        <LabelInput>Problemas de saúde</LabelInput>
        <Input
          placeholder="Descreva aqui..."
          placeholderTextColor="#A8A8A8"
          value={disease?? ''}
          onChangeText={setDisease}
        />

        <ButtonSaveView>
          <ButtonSave onPress={handleMedicalInfo}>
            <ButtonSaveText>SALVAR</ButtonSaveText>
          </ButtonSave>
        </ButtonSaveView>

      </Container>
    </>
  )
}
