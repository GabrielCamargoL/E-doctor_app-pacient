import React, {useState, useEffect} from 'react';

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


import moment from 'moment';
import 'moment/min/locales'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {colors} from '../../styles';

const EvaluationCard = ({doctorData, navigation}) => {

  return (
    <>
      <Container>
      {doctorData.length === 0 ? (
        <Label style={{textAlign: 'center'}}>
          Esse doutor não possui avaliações
        </Label>
      ) : (
        doctorData.map(rating => (
          <Card>
            <Row>
              <NameLabel>{rating.user.username}</NameLabel>
              <LabelDate>
                {moment(rating.created_at).locale('pt-br').format('L')}
              </LabelDate>
            </Row>
            <Comment>{rating.comment}</Comment>
            <Label>Avaliação</Label>
            <Icons>
              {Array(Math.floor(rating.score))
                .fill()
                .map((icon, index) => (
                  <>
                    <Icon name="star" key={index} size={14} color={colors.primary_60} />{' '}
                  </>
              ))}
            </Icons>
          </Card>
        ))
      )}
      </Container>
    </>
  );
};

export default EvaluationCard;
