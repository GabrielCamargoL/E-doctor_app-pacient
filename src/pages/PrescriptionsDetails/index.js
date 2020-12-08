import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { useRoute } from '@react-navigation/native';

import {
  Container,
  ViewLogo,
  HeaderLogo,
  Prescription,
  Row,
  Header,
  Main,
  Title,
  Label,
  NameLabel,
  LabelPDF,
} from './styles';

import api from '../../services/api';

export default function PrescriptionsDetails({}) {
  const route = useRoute();
  const [prescription, setPrescription] = useState([]);

  const getPrescription = async () => {
    const appointmentId = route.params ? route.params.appointmentId : undefined;
    const { data } = await api.get(`/prescription/show/${appointmentId}`);
    setPrescription(data);
    console.log(data);
  };

  useEffect(() => {
    getPrescription();
  }, []);

  return (
    <ScrollView>
      <Container>
        <Header>
          <Title>Resumo da Consulta</Title>
          <HeaderLogo
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/387/387561.png',
            }}
          />
          <NameLabel>Oftalmologista</NameLabel>
          <Row>
            <NameLabel>Dr. Nelson Mandela</NameLabel>
            <NameLabel>08/09/2020</NameLabel>
          </Row>
        </Header>
        <Main>
          <Row>
            <Label>Prescrição</Label>
            {/* <LabelPDF>Gerar PDF</LabelPDF> */}
          </Row>
          {prescription.map((prescription) => (
            <>
              <Prescription>
                <Label>{prescription.name}</Label>
                <Label>{prescription.hours}</Label>
                <Label>{prescription.days} dia</Label>
                <Label>{prescription.quantity}</Label>
                <Label>{prescription.unit}</Label>
              </Prescription>
            </>
          ))}
          <Label>Resultados de Exame:</Label>
        </Main>
      </Container>
    </ScrollView>
  );
}
