/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {colors, general, fonts} from '../../styles';
// import LottieView from 'lottie-react-native';

import {
  Container,
  SectionCompanyData,
  HeaderText,
  DetailsText,
  Row,
  Col,
  FlatButton,
  Button,
  ButtonText,
  FlatButtonText,
  CompanyRate,
} from './styles';

import EvaluationCard from '../../components/EvaluationCard';

import api from '../../services/api';

export default function Evaluation({navigation}) {
  const [value, setValue] = useState([]);

  const allowedState = [
    { id: 1, name: "Alabama", comments: 'Awasome Job!', date: "05/09/1999" },
    { id: 2, name: "Georgia", comments: 'Alex is a very great designer, having a lot of positive energy with him!', date: "05/09/1999" },
    { id: 3, name: "Tennessee", comments: 'Working with Alex is always a pleasure! He has limitless capabilities!', date: "05/09/1999"}
  ];

  useEffect(() => {
    setValue(allowedState);
  }, []);

  return (
    <>
      <Container>
        <ScrollView>
          <EvaluationCard
            key={value.id}
            navigation={navigation}
            doctorData={value}
            doctorId={value.id}/>
          
        </ScrollView>
      </Container>
    </>
  );
}
