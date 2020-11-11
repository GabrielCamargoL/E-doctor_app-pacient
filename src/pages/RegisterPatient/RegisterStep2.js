import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
  SubTitle,
  LabelInput,
  HalfInput,
  InputContainer,
  Advance,
  Switch,
  ButtonEdit,
  ButtonEditText,
  ButtonEditView,
} from './styles';

import { AsyncStorage, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import apiCep from '../../services/cep';

import InputMask from '../../components/Form/InputMask';
import Input from '../../components/Form/Input';

export default function RegisterStep3({ navigation, route }) {

  let patientInfo = route.params.patientInfo;

  const [zip_code, setZipCode] = useState('');
  const [zipCodeError, setZipCodeError] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [neighborhoodError, setNeighborhoodError] = useState('');
  const [street, setStreet] = useState('');
  const [streetError, setStreetError] = useState('');
  const [house_number, setHouseNumber] = useState('');
  const [houseNumberError, setHouseNumberError] = useState('');
  const [houseWithoutNumber, setHouseWithoutNumber] = useState(false);
  const [complement_address, setComplementAddress] = useState('');
  const [uf, setUf] = useState('');
  const [ufError, setUfError] = useState('');
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');

  const options = [{ key: false, value: 'Não' }, { key: true, value: 'Sim' }]

  async function handleAdvance() {
    return navigation.navigate('RegisterStep3', {
      patientInfo: {
        ...patientInfo,
        zip_code,
        street,
        neighborhood,
        house_number,
        complement_address,
        uf,
        city
      },
    });
  }

  const handleSignUp = async () => {
    try {
      const response = await api.post('/patientAuth/signUp', {
        "username": patientInfo.username,
        "surname": patientInfo.surname,
        "email": patientInfo.email,
        "password": patientInfo.password,
        "cpf": patientInfo.cpf,
        "genre": patientInfo.genre,
        "birthday": patientInfo.birthday,
        "phone": patientInfo.phone,
        "zip_code": zip_code,
        "house_number": house_number,
        "complement_address": complement_address,
        "state": uf,
        "city": city,
        "neighborhood": neighborhood,
        "street": street,
      })

      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate('Home')
    }
    catch(err) {
      Alert.alert("Error ao realizar cadastro")
      console.log(err);
    }
  }

  const handleHouseNumber = () => {
    !houseWithoutNumber ? setHouseNumber('SN'): setHouseNumber('')
  }

  async function searchZipCodeAddress(cepReported = '') {
    try {
      setZipCode(cepReported);
      resetFields();
      if (cepReported.length < 9) {
        return;
      }
      const response = await apiCep.get(`/${cepReported}/json`);

      const {logradouro, bairro, localidade, uf} = response.data;

      if (response.data.erro) {
        Alert.alert(
          'Atenção',
          'Não identificamos nenhum endereço relacionado ao CEP. Digite manualmente ou tente novamente.',
          [
            {
              text: 'OK',
            },
          ],
        );
        setZipCode('');
      } else {
        setStreet(logradouro);
        setNeighborhood(bairro);
        setCity(localidade);
        setUf(uf);
        clearError();
      }
    } catch (err) {
      console.log(err);
      setZipCode('');
      Alert.alert(
        'Atenção',
        'Não identificamos nenhum endereço relacionado ao CEP. Digite manualmente ou tente novamente.',
        [
          {
            text: 'OK',
          },
        ],
      );
    }
  }

  useEffect(() => {
    setHouseNumber(houseWithoutNumber ? '' : 'SN');
    setHouseNumberError('');
  }, [houseWithoutNumber]);

  const clearError = () => {
    setZipCodeError('');
    setUfError('');
    setCityError('');
    setNeighborhoodError('');
    setStreetError('');
    setHouseNumberError('');
  };

  const resetFields = () => {
    setUf('');
    setCity('');
    setNeighborhood('');
    setStreet('');
    setHouseNumber('');
    setComplementAddress('');
    setHouseWithoutNumber(true);
  };

  return (
    <>
      <Container>
        <SubTitle>Dados Residenciais</SubTitle>

        <LabelInput> CEP </LabelInput>
        <InputMask
          placeholder="00000-000"
          placeholderTextColor="#A8A8A8"
          value={zip_code}
          type={'zip-code'}
          onChangeText={searchZipCodeAddress}
        />

        <LabelInput >Logradouro</LabelInput>
        <Input
          placeholder="Logradouro"
          placeholderTextColor="#A8A8A8"
          value={street}
          onChangeText={setStreet}
        />

        <LabelInput > Bairro </LabelInput>
        <Input
          placeholder="Bairro"
          placeholderTextColor="#A8A8A8"
          keyboardType="default"
          value={neighborhood}
          onChangeText={setNeighborhood}
        />

        <Row style={{ alignItems: 'center' }}>
          <Col style={{ width: '35%' }}>
            <LabelInput >Número</LabelInput>
            <Input
              placeholderTextColor="#A8A8A8"
              keyboardType="number-pad"
              value={house_number}
              editable={houseWithoutNumber}
              onChangeText={setHouseNumber}
            />
          </Col>
          <Switch value={!houseWithoutNumber}
            onValueChange={() => {
              setHouseWithoutNumber(prevState => !prevState),
              handleHouseNumber()
            }}
          />
          <LabelInput> Endereço sem Número</LabelInput>
        </Row>

        <LabelInput>Complemento</LabelInput>
        <Input
          placeholder="Complemento"
          placeholderTextColor="#A8A8A8"
          value={complement_address}
          onChangeText={setComplementAddress}
        />

        <Row style={{justifyContent: 'space-between'}}>
          <Col style={{ width: '15%' }}>
            <LabelInput >UF</LabelInput>
            <Input
              placeholder="SP"
              placeholderTextColor="#A8A8A8"
              value={uf}
              onChangeText={setUf}
            />
          </Col>

          <Col style={{ width: '80%' }}>
            <LabelInput >Cidade</LabelInput>
            <Input
              placeholder="Cidade"
              placeholderTextColor="#A8A8A8"
              value={city}
              onChangeText={setCity}
            />
          </Col>
        </Row>

        <ButtonEditView>
          <ButtonEdit onPress={handleSignUp}>
            <ButtonEditText>Cadastrar</ButtonEditText>
          </ButtonEdit>
        </ButtonEditView>

      </Container>
    </>
  )
}

