import React, {useState} from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import {
  Container,
  ViewLogo,
  HeaderLogo,
  Label,
  NameLabel,
  Col,
  Row,
  CancelingButton,
  Circle,
  CheckedCircle,
  ButtonContainer,
}
from './styles';
import {fonts, colors} from '../../styles'

import moment from 'moment';
import 'moment/min/locales'

import Modal from '../Modal';
import Input from '../../components/Form/Input';

const ModalShedule =  ({
  isActive = false,
  visible,
  onClose,
  navigation,
  onSuccess,
  data
}) => {

  const [reason, setReason] = useState('');
  const [cancelAppointment, setCancelAppointment] = useState(false);
  const [otherReason, setOtherReason] = useState('');

  const handleClose = () => {
    setCancelAppointment(false)
    onClose();
  };

  const options = [
    {
      key: 'Não poderei comparecer a consulta',
      value: 'Não poderei comparecer a consulta'
    },
    {
      key: 'Aceitei a solicitação por acidente',
      value: 'Aceitei a solicitação por acidente'
    },
    {
      key: 'Outro',
      value: 'Outro:'
    }
  ]

  async function unscheduleAppointment(id) {
    try {
      Alert.alert(
        "Desmarcar consulta",
        `Deseja realmente desmarcar a consulta com ${data.doctor.username} ${data.doctor.surname}?`,
        [
          {
            text: "Sim",
            onPress: () => {
              api.put(`appointment/cancel/${id}`, {
                reason: reason
              }).then((response) => {
                alert('Consulta cancelada com sucesso.')
                navigation.navigate('Home')
              })
            },
          },
          { text: "Não", onPress: () => { }, style: "cancel" }
        ],
        { cancelable: true }
      );
    } catch (err) {
      alert("Erro ao desmarcar: " + err)
    }
  }

  return (
    <Modal
      visible={visible}
      height="88%"
      onClose={onClose ? () => handleClose() : null}
    >
      {!cancelAppointment ? (
        <>
          <Container>
            <ViewLogo elevation={8}>
              <HeaderLogo source={{uri: data.doctor.path_avatar}}/>
            </ViewLogo>

            <Row>
              <NameLabel>{data.doctor.username} {data.doctor.surname}</NameLabel>
              <NameLabel>{data.doctor.specialty}</NameLabel>
            </Row>
            <Label>{moment(data.consultation_schedule).locale('pt-br').format('LLLL').toUpperCase()}</Label>
            <Label>{data.doctor.street}, {data.doctor.house_number}</Label>
            <Label>{data.doctor.neighborhood.toUpperCase()}, {data.doctor.city.toUpperCase()}</Label>
          </Container>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', width: '100%'}}
            onPress={() => {setCancelAppointment(true)}}
          >
            <Label style={{margin: 20, alignSelf: 'flex-end', color: '#09C1FB'}}>Desmarcar</Label>
          </TouchableOpacity>
        </>
      ) : (
        <Container>
          <Row>
            <Col>
              <Label>Motivo do cancelamento</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              {options.map(item => {
                return (
                  <ButtonContainer>
                    <Circle onPress={() => setReason(item.key)}>
                      {reason === item.key && (<CheckedCircle />)}
                    </Circle>

                    <Label>{item.value}</Label>
                  </ButtonContainer>
                )
              })}
              {reason === 'Outro' &&
                <Input
                  keyboardType="default"
                  value={otherReason}
                  onChangeText={setOtherReason}
                />
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <Label style={{ color: `${colors.light}` }}>
                Obs: ao aceitar o cancelamento da consulta, tenha em mente que possivelmente estára prejudicando um paciente.
              </Label>
            </Col>
          </Row>

          <CancelingButton onPress={() => unscheduleAppointment(data.id)}>
            <Label style={{ color: '#fff' }}>Cancelar consulta</Label>
          </CancelingButton>
        </Container>
      )}
    </Modal>
  )
}

export default ModalShedule;

