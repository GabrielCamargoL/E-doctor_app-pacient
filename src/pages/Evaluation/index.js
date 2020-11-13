/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {
  Container
} from './styles';

import api from '../../services/api';

import EvaluationCard from '../../components/EvaluationCard';

export default function Evaluation({navigation}) {
  const route = useRoute();
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    const doctorId = route.params ? route.params.doctorId : undefined;

    (async () => {
      const response = await api.get(`doctor/evaluation/index/${doctorId}`)
      setEvaluations(response.data)
    })()

  }, []);

  return (
    <>
      <Container>
        <ScrollView>
          <EvaluationCard
            key={evaluations.id}
            navigation={navigation}
            doctorData={evaluations}
          />

        </ScrollView>
      </Container>
    </>
  );
}
