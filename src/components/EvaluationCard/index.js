import React, {useState, useEffect} from 'react';

import {ScrollView, Text} from 'react-native';

import api from '../../services/api';

import {
  Container,
  Row,
  Card,  
  NameLabel,
  Label,
  LabelDate,
  Icons,
  Comment
} from './styles';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import logo from '../../assets/logo.png';
import {colors, general, fonts} from '../../styles';

const EvaluationCard = ({doctorId, doctorData, navigation}) => {
  const goDetailsDoctor = () => {
    console.log('tester');
    navigation.navigate('DetailsDoctor');
  };

  return (
    <>
      <Container>
        {doctorData.map((rating) => (
          <Card>
            <Row>
              <NameLabel>{rating.name}</NameLabel>
              <LabelDate>{rating.date}</LabelDate>
            </Row>
            <Comment>{rating.comments}</Comment>
            <Label>Avaliação</Label>  
            <Icons>
              {Array(5)
                .fill()
                .map((icon) => (
                  <>
                    <Icon name="star" size={14} color={colors.primary_60} />{' '}
                  </>
                ))}
            </Icons>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default EvaluationCard;
