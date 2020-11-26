import React, {useState, useEffect} from 'react';

import {ScrollView, Text} from 'react-native';

import api from '../../services/api';

import {
  Container,
  Card,
  IconCard,
  Data,
  NameLabel,
  SpecialtyLabel,
  Image,
  LabelDate
} from './styles';

import moment from 'moment';
import 'moment/min/locales'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import logo from '../../assets/logo.png';

const PrescriptionsCard = ({id, data, navigation})  => {
  const goDetailsDoctor = () => {
    navigation.navigate('PrescriptionsDetails', {id});
  };

  return (
    <Container>
      <Card
        onPress={() => goDetailsDoctor(id)}
        elevation={8}
      >
        <IconCard>
          <Image source={{uri: data.path_avatar?? 'https://image.flaticon.com/icons/png/512/387/387561.png'}} resizeMode="center"/>
        </IconCard>

        <Data>
          <SpecialtyLabel>{data.specialty?? 'Não Informado'}</SpecialtyLabel>
          <NameLabel>{data.username?? data.name} {data.surname}</NameLabel>
          <LabelDate>
            {moment(data.created_at).locale('pt-br').format('L')}
          </LabelDate>
        </Data>

      </Card>
    </Container>
  );
};

export default PrescriptionsCard;
