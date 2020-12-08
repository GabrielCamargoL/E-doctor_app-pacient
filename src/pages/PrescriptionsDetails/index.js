import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
  Container,
  ViewLogo,
  HeaderLogo,
  Prescription,
  Row,
  Col,
  Header,
  Main,
  Title,
  Label,
  NameLabel,
  LabelPDF,
  PrescriptionHeader,
  PrescriptionTitle,
  PrescriptionLabel,
} from './styles';

import api from '../../services/api';
import moment from 'moment';
import 'moment/min/locales';

export default function PrescriptionsDetails({}) {
  const route = useRoute();
  const [prescription, setPrescription] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const dateConsult = route.params ? route.params.dateConsult : undefined;

  const getPrescription = async () => {
    const appointmentId = route.params ? route.params.appointmentId : undefined;
    const doctorId = route.params ? route.params.doctorId : undefined;

    const { data } = await api.get(`/prescription/show/${appointmentId}`);
    const response = await api.get(`/doctorAuth/getUser/${doctorId}`);

    setPrescription(data);
    setDoctor(response.data);
  };

  useEffect(() => {
    getPrescription();
  }, []);

  return (
    <ScrollView>
      <Container>
        <Header>
          <Title>Resumo da Consulta</Title>
          <HeaderLogo source={{ uri: doctor.path_avatar }} />
          <NameLabel>{doctor.specialty}</NameLabel>
          <Row>
            <NameLabel>
              {doctor.username} {doctor.surname}
            </NameLabel>
            <NameLabel>
              {dateConsult
                ? moment(dateConsult).locale('pt-br').format('L')
                : ''}
            </NameLabel>
          </Row>
        </Header>
        <Main>
          <Row>
            <Label>Prescrição</Label>
            {/* <LabelPDF>Gerar PDF</LabelPDF> */}
          </Row>
          {prescription.map((prescription) => (
            <Prescription key={prescription.id}>
              <PrescriptionHeader>
                <PrescriptionTitle>
                  <Icon name="medkit" size={56} />
                </PrescriptionTitle>
                <Col style={{ marginLeft: 20 }}>
                  <PrescriptionTitle>{prescription.name}</PrescriptionTitle>
                  <PrescriptionLabel>{prescription.quantity}</PrescriptionLabel>
                  <PrescriptionLabel>{prescription.unit}</PrescriptionLabel>
                </Col>
              </PrescriptionHeader>
              <PrescriptionLabel>{prescription.hours}</PrescriptionLabel>
              <PrescriptionLabel>{prescription.days} dia</PrescriptionLabel>
            </Prescription>
          ))}
          {/* <Label>Resultados de Exame:</Label> */}
        </Main>
      </Container>
    </ScrollView>
  );
}
