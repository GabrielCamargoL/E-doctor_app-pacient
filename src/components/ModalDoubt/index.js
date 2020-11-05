import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  ViewLogo,
  HeaderLogo,
  Label,
  NameLabel,
  Col
}
from './styles';

import Modal from '../Modal';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ModalDoubt =  ({
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
          <Col>
            <NameLabel>{data.doctor.username} {data.doctor.surname}</NameLabel>
            <Label>{data.doubt}</Label>
          </Col>
          <Col>
            <ViewLogo elevation={8}>
              <HeaderLogo source={{uri: data.doctor.path_avatar}}/>
            </ViewLogo>
            <NameLabel style={{ textAlign: 'center' }}>
              {data.doctor.username} {data.doctor.surname}
            </NameLabel>
          </Col>
          <Label>{data.doubt}</Label>
        </Container>
        <TouchableOpacity
          style={{alignSelf: 'center', borderTopWidth: 0.5, width: '100%'}}
          onPress={() => {handleClose()}}
        >
          <Label style={{margin: 20, textAlign: 'center'}}>Fechar</Label>
        </TouchableOpacity>
    </Modal>
  )
}

export default ModalDoubt;

