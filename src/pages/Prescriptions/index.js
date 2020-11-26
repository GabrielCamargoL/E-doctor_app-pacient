import React, { useState, useEffect } from 'react';
import {RefreshControl} from 'react-native';
import { Container, Title } from './styles';

import api from '../../services/api';
import PrescriptionsCard from '../../components/PrescriptionsCard';

export default function Prescriptions({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    getPrescriptions()
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    getPrescriptions()
  }, []);

  const getPrescriptions = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/doctorAuth/index');
      setPrescriptions(response.data)
      setRefreshing(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Title style={{textAlign: 'left'}}>Prescrições Médicas</Title>
      {prescriptions.length > 0 ? (
        <>
          {prescriptions.map(prescription => (
            <PrescriptionsCard
              key={prescription.id}
              navigation={navigation}
              data={prescription}
              id={prescription.id}
            />
          ))}
        </>
      ):(
        <>
          <Title>Ainda não prescrições anexadas</Title>
        </>
      )}

    </Container>
  )
}
