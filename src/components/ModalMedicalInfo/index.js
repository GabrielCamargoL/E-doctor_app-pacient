import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container, 
  Row,
  AddLabel, 
  Label,
  Circle,
} 
from './styles';

import Modal from '../Modal';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ModalMedicalInfo =  ({ 
  isActive = false,
  visible,
  onClose,
  navigation
}) => {
  const options = [{ key: true, value: 'Sim' }, { key: false, value: 'Não' }]

  const handleClose = () => {
    onClose();
  };

  const handleMedicalInfo = () => {
    onClose();
    navigation.navigate('MedicalInfo')
  };

  return (
    <Modal 
      visible={visible}
      height="88%"
      onClose={onClose ? () => handleClose() : null}>
        <Container>
        <Label>Ficha médica não{"\n"} preenchida, deseja completar ?</Label>
        <TouchableOpacity onPress={() => {handleMedicalInfo()}}>
        <Row>   
          <Circle>
            <Label>
              <Icon name="plus" size={14} color={'#fff'}/>      
            </Label>
          </Circle>          
          <AddLabel>Adicionar</AddLabel>          
        </Row>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {handleClose()}}>
          <Label style={{borderBottomWidth: 0.5}}>Continuar Mesmo Assim</Label>
        </TouchableOpacity>
        </Container>
      
    </Modal>
  ) 
}

export default ModalMedicalInfo;