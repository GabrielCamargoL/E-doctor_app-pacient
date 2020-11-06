import React, {useState} from 'react';

import {
  Container,
  Card,
  IconCard,
  NameLabel,
  Badge,
  Image,
  BadgeLabel,
  Data,
  DateLabel,
  SpecialtyLabel
} from './styles';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ModalDoubt from '../ModalDoubt'

const ScheduleCard = ({doubtId, data, navigation})  => {
  const [showModal, setShowModal] = useState(false);

  const handleDoubt = async () => {
    setShowModal(true);
  }

  return (
    <>
      <Container>
        <Card
          key={doubtId}
          onPress={handleDoubt}
        >
          <IconCard>
            <Image source={{uri: data.path_avatar}} resizeMode="center"/>
          </IconCard>
          <Data>
            <NameLabel>Dr. Nelson Mandela</NameLabel>
            <SpecialtyLabel>Oftalmologista</SpecialtyLabel>

            <DateLabel>15/08/2020 - Quinta Feira</DateLabel>
            <DateLabel>10:00h</DateLabel>
          </Data>
          <Badge>
            <BadgeLabel>Agendado</BadgeLabel>
          </Badge>
        </Card>
      </Container>
      {/* <ModalDoubt
        isActive={true}
        visible={showModal}
        justifyContent={'center'}
        onClose={() => setShowModal(false)}
        navigation={navigation}
        // data={data}
      /> */}
    </>
  );
};

export default ScheduleCard;
