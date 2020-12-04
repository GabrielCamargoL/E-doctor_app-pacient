import React, { useState, useEffect } from 'react';

import { ScrollView, Text } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Card,
  IconCard,
  Data,
  NameLabel,
  SpecialtyLabel,
  Image,
} from './styles';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import logo from '../../assets/logo.png';

const DoctorCard = ({ doctorId, doctorData, navigation }) => {
  const goDetailsDoctor = () => {
    navigation.navigate('DetailsDoctor', { doctorId });
  };

  return (
    <Container>
      <Card
        key={doctorId}
        onPress={() => goDetailsDoctor(doctorId)}
        elevation={8}>
        <IconCard>
          <Image
            source={{
              uri:
                doctorData.path_avatar ??
                'https://image.flaticon.com/icons/png/512/387/387561.png',
            }}
            resizeMode="center"
          />
        </IconCard>

        <Data>
          <NameLabel>
            {doctorData.username ?? doctorData.name} {doctorData.surname}
          </NameLabel>
          <SpecialtyLabel>
            {doctorData.specialty ?? doctorData.neighborhood}
          </SpecialtyLabel>
        </Data>
      </Card>
    </Container>
  );
};

export default DoctorCard;
