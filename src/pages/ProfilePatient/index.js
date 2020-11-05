import React, { useState, useEffect, useContext } from 'react';
import { Alert, RefreshControl } from 'react-native';

import {
  Container,
  Row,
  Col,
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
  const [refreshing, setRefreshing] = React.useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [HouseWithoutNumber, setHouseWithoutNumber] = useState(false);
  const [complement, setComplement] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [user, setUser] = useState([]);

  const getUserAuthData = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/patientAuth/getUser');
      if (response.data) {
        setUser(response.data);
        setName(response.data.username);
        setSurname(response.data.surname);
        setPhone(response.data.phone);
        setCep(response.data.zip_code);
        setNeighborhood(response.data.neighborhood);
        setStreet(response.data.street);
        setNumber(response.data.house_number);
        setComplement(response.data.complement_address);
        setUf(response.data.state);
        setCity(response.data.city);
      }
      setRefreshing(false);
    } catch (err) {
      console.log(`aaaaaaaaaa ${err}`);
    }
  };

  useEffect(() => {
    getUserAuthData();
  }, []);

  const onRefresh = React.useCallback(() => {
    getUserAuthData();
  }, []);

  async function handleEditPassword() {
    navigation.navigate('EditPassword'), {};
  }

  const handleEditUser = async () => {
    try {
      setRefreshing(true);
      const response = await api.put('patientAuth/users/1', {
        username: name,
        surname,
        phone,
        zip_code: cep,
        neighborhood,
        street,
        house_number: HouseWithoutNumber ? number : 'SN',
        complement_address: complement,
        state: uf,
        city
      })
      setRefreshing(false);
      if (response.data) {
        Alert.alert(
          'Sucesso',
          'Dados alterados com sucesso',
          [
            { text: 'Fechar', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        )
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Row>
          <InputContainer>
            <LabelInput>Nome</LabelInput>
            <InputLabel
              placeholderTextColor="#A8A8A8"
              value={name}
              onChangeText={setName}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Sobrenome</LabelInput>
            <InputLabel
              placeholderTextColor="#A8A8A8"
              value={surname}
              onChangeText={setSurname}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput> Telefone </LabelInput>
            <InputLabel
              placeholderTextColor="#A8A8A8"
              value={phone}
              onChangeText={setPhone}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>CEP</LabelInput>
            <InputLabel
              placeholderTextColor="#A8A8A8"
              value={cep}
              onChangeText={setCep}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Bairro</LabelInput>
            <InputLabel
              placeholderTextColor="#A8A8A8"
              value={neighborhood}
              onChangeText={setNeighborhood}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput style={{ fontSize: 16 }}>Logradouro</LabelInput>
            <InputLabel
              placeholderTextColor="#A8A8A8"
              value={street}
              onChangeText={setStreet}
            />
          </InputContainer>
        </Row>

        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Col style={{ width: '45%' }}>
            <InputContainer>
              <LabelInput>Número</LabelInput>
              <InputLabel
                placeholderTextColor="#A8A8A8"
                value={number}
                onChangeText={setNumber}
              />
            </InputContainer>
          </Col>

          <CheckBox
            value={HouseWithoutNumber}
            onValueChange={setHouseWithoutNumber}
          />
          <LabelInput> Endereço sem Número</LabelInput>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Complemento</LabelInput>
            <InputLabel
              placeholderTextColor="#A8A8A8"
              value={complement}
              onChangeText={setComplement}
            />
          </InputContainer>
        </Row>

        <Row>
          <Col style={{ width: '20%' }}>
            <InputContainer>
              <LabelInput>UF</LabelInput>
              <InputLabel
                placeholderTextColor="#A8A8A8"
                value={uf}
                onChangeText={setUf}
              />
            </InputContainer>
          </Col>

          <Col style={{ width: '80%' }}>
            <InputContainer>
              <LabelInput>Cidade</LabelInput>
              <InputLabel
                placeholderTextColor="#A8A8A8"
                value={city}
                onChangeText={setCity}
              />
            </InputContainer>
          </Col>
        </Row>
        <ButtonEditView>
          <ButtonEdit onPress={handleEditUser}>
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
  );
}
