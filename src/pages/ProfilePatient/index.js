import React, { useState, useEffect, useContext } from 'react';
import { Alert, RefreshControl } from 'react-native';

import {
  Container,
  Row,
  Col,
  LabelInput,
  ButtonEdit,
  ButtonEditText,
  ButtonEditView,
  Switch,
} from './styles';

import InputMask from '../../components/Form/InputMask';
import Input from '../../components/Form/Input';

import api from '../../services/api';
import apiCep from '../../services/cep';

export default function ProfilePatient({ navigation, routes }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  // Address - Cep
  const [zip_code, setZipCode] = useState('');
  const [zipCodeError, setZipCodeError] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [neighborhoodError, setNeighborhoodError] = useState('');
  const [street, setStreet] = useState('');
  const [streetError, setStreetError] = useState('');
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');
  const [haveNumber, setHaveNumber] = useState(true);
  const [complement, setComplement] = useState('');
  const [uf, setUf] = useState('');
  const [ufError, setUfError] = useState('');
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');

  const getUserAuthData = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/patientAuth/getUser');
      if (response.data) {
        setId(response.data.id);
        setName(response.data.username);
        setSurname(response.data.surname);
        setPhone(response.data.phone);
        setZipCode(response.data.zip_code);
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
    setNumber(haveNumber ? '' : 'SN');
    setNumberError('');
  }, [haveNumber]);

  const clearError = () => {
    setZipCodeError('');
    setUfError('');
    setCityError('');
    setNeighborhoodError('');
    setStreetError('');
    setNumberError('');
  };

  const resetFields = () => {
    setUf('');
    setCity('');
    setNeighborhood('');
    setStreet('');
    setNumber('');
    setComplement('');
    setHaveNumber(true);
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
      const response = await api.put(`patientAuth/users/${id}`, {
        username: name,
        surname,
        phone,
        zip_code,
        neighborhood,
        street,
        house_number: haveNumber ? number : 'SN',
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
          <LabelInput>Nome</LabelInput>
          <Input
            placeholderTextColor="#A8A8A8"
            value={name}
            onChangeText={setName}
          />

          <LabelInput>Sobrenome</LabelInput>
          <Input
            placeholderTextColor="#A8A8A8"
            value={surname}
            onChangeText={setSurname}
          />

          <LabelInput> Telefone </LabelInput>
          <Input
            placeholderTextColor="#A8A8A8"
            value={phone}
            onChangeText={setPhone}
          />

          <LabelInput>CEP</LabelInput>
          <InputMask
            placeholderTextColor="#A8A8A8"
            value={zip_code}
            type={'zip-code'}
            placeholderError={zipCodeError}
            placeholderTextColor={zipCodeError && error}
            onChangeText={searchZipCodeAddress}
          />

          <LabelInput>Bairro</LabelInput>
          <Input
            placeholderTextColor="#A8A8A8"
            value={neighborhood}
            placeholderError={neighborhoodError}
            onChangeText={setNeighborhood}
            editable={!neighborhood && !neighborhood}
          />

          <LabelInput style={{ fontSize: 16 }}>Logradouro</LabelInput>
          <Input
            placeholderTextColor="#A8A8A8"
            placeholderError={streetError}
            value={street}
            onChangeText={setStreet}
            editable={!street && !street}
          />

          <Row style={{ alignItems: 'center' }}>
            <Col style={{ width: '35%' }}>
              <LabelInput>Número</LabelInput>
              <Input
                placeholderTextColor="#A8A8A8"
                placeholderError={numberError}
                value={number}
                onChangeText={setNumber}
                editable={haveNumber}
                keyboardType="number-pad"
              />
            </Col>
            <Switch
              onValueChange={() => setHaveNumber(!haveNumber)}
              value={!haveNumber}
            />
            <LabelInput> Endereço sem Número</LabelInput>
          </Row>

          <LabelInput>Complemento</LabelInput>
          <Input
            placeholderTextColor="#A8A8A8"
            value={complement}
            onChangeText={setComplement}
          />

          <Row style={{justifyContent: 'space-between'}}>
            <Col style={{ width: '15%' }}>
              <LabelInput>UF</LabelInput>
              <Input
                placeholderTextColor="#A8A8A8"
                placeholderError={ufError}
                value={uf}
                onChangeText={setUf}
                editable={!uf && !uf}
              />
            </Col>

            <Col style={{ width: '80%' }}>
              <LabelInput>Cidade</LabelInput>
              <Input
                placeholderTextColor="#A8A8A8"
                placeholderError={cityError}
                value={city}
                onChangeText={setCity}
                editable={!city && !city}
              />
            </Col>
          </Row>

          <ButtonEditView>
            <ButtonEdit onPress={handleEditUser}>
              <ButtonEditText>EDITAR DADOS</ButtonEditText>
            </ButtonEdit>
          </ButtonEditView>

        {/* <Row style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={handleEditPassword}>
            <ChangeData>ALTERAR SENHA</ChangeData>
          </TouchableOpacity>
        </Row> */}
      </Container>
    </>
  );
}
