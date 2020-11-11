import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  ViewLogo,
  HeaderLogo,
  Label,
  NameLabel,
  Col,
  Row
}
from './styles';

import moment from 'moment';
import 'moment/min/locales'

import Modal from '../Modal';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ModalShedule =  ({
  isActive = false,
  visible,
  onClose,
  navigation,
  onSuccess,
  data
}) => {
  const options = [{ key: true, value: 'Sim' }, { key: false, value: 'Não' }]

  const handleClose = () => {
    onClose();
  };

  const handleMedicalInfo = () => {
    onClose();
    navigation.navigate('MedicalInfo', {consult: true});
  };

  return (
    <Modal
      visible={visible}
      height="88%"
    >
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
          onPress={() => {handleClose()}}
        >
          <Label style={{margin: 20, alignSelf: 'flex-end', color: '#09C1FB'}}>Desmarcar</Label>
        </TouchableOpacity>
    </Modal>
  )
}

export default ModalShedule;

