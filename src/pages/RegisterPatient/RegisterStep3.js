import React, { useState, useEffect } from 'react';

import {
  Container,
  SubTitle,
  Avatar,
  ButtonSend,
  ButtonSendView,
  ButtonSendText,
  AccessPhotosView,
  AccessPhotosButton,
  AccessPhotosText,
} from './styles';

import { Alert, AsyncStorage } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { Icon } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import SuccessComponent from '../../components/SuccessComponent';
import api from '../../services/api';

export default function RegisterStep4({ navigation, route }) {
  let patientInfo = route.params.patientInfo;
  const [avatar, setAvatar] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => console.log(patientInfo), []);

  async function AccessCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((file) => {
      setAvatar(file);
    });
  }

  async function AccessGallery() {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
    }).then((file) => {
      setAvatar(file);
    });
  }

  const handleSignUp = async () => {
    if (Object.keys(avatar).length === 0) {
      return Alert.alert(
        'Atenção',
        'Envie uma foto para completar seu perfil.',
        [
          { text: 'Camera', onPress: () => AccessCamera() },
          { text: 'Galeria', onPress: () => AccessGallery() },
        ],
        { cancelable: false },
      );
    }
    try {
      const response = await api.post('/patientAuth/signUp', {
        username: patientInfo.username,
        surname: patientInfo.surname,
        email: patientInfo.email,
        password: patientInfo.password,
        cpf: patientInfo.cpf,
        genre: patientInfo.genre,
        birthday: patientInfo.birthday,
        phone: patientInfo.phone,
        zip_code: patientInfo.zip_code,
        house_number: patientInfo.house_number,
        complement_address: patientInfo.complement_address,
        state: patientInfo.uf,
        city: patientInfo.city,
        neighborhood: patientInfo.neighborhood,
        street: patientInfo.street,
      });

      await AsyncStorage.setItem('token', response.data.token);

      uploadPhoto();
    } catch (err) {
      Alert.alert('Error ao realizar cadastro');
      console.log(err);
    }
  };

  const uploadPhoto = async () => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: avatar.path,
        type: avatar.mime,
        name: `${Date.now()}`,
      });

      await api.post(`/patientAuth/uploadPhoto`, formData);
      getTokenFirebase();
    } catch (error) {
      Alert.alert('foto: ' + error.message);
      return false;
    }
  };

  const getTokenFirebase = async () => {
    let fcmTokenStorage = await messaging().getToken();

    try {
      await api.put('/patientAuth/fcmToken', { fcmToken: fcmTokenStorage });
      await AsyncStorage.setItem('fcmToken', fcmTokenStorage);
      return setSuccess(true);
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      {success ? (
        <>
          <SuccessComponent
            navigation={navigation}
            message="O Cadastro foi feito com sucesso!"
          />
        </>
      ) : (
        <>
          <Container>
            <SubTitle style={{ alignSelf: 'center', marginTop: 50 }}>
              Tire uma foto de seu rosto
            </SubTitle>

            {Object.keys(avatar).length === 0 ? (
              <Avatar source={require('../../assets/Avatar.png')} />
            ) : (
              <>
                <Avatar
                  source={{ uri: avatar.path }}
                  style={{ width: 200, height: 200, marginLeft: 1 }}
                  resizeMode="contain"
                />
              </>
            )}

            <ButtonSendView>
              <ButtonSend onPress={() => handleSignUp()}>
                <ButtonSendText>Enviar</ButtonSendText>
              </ButtonSend>
            </ButtonSendView>
          </Container>

          <AccessPhotosView>
            <AccessPhotosButton onPress={() => AccessCamera()}>
              <Icon
                onPress={() => {}}
                type="FontAwesome"
                resizeMode="contain"
                name="camera"
                style={{
                  color: '#fff',
                  marginRight: 5,
                }}
              />
              <AccessPhotosText>Camera</AccessPhotosText>
            </AccessPhotosButton>

            <AccessPhotosButton onPress={() => AccessGallery()}>
              <Icon
                type="FontAwesome"
                resizeMode="contain"
                name="photo"
                style={{
                  color: '#fff',
                  marginRight: 5,
                }}
              />
              <AccessPhotosText>Galeria</AccessPhotosText>
            </AccessPhotosButton>
          </AccessPhotosView>
        </>
      )}
    </>
  );
}
