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

import moment from 'moment';
import 'moment/min/locales'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ModalShedule from '../ModalShedule'

const ScheduleCard = ({doubtId, data, navigation})  => {
  const [showModal, setShowModal] = useState(false);

  const handleShedule = async () => {
    setShowModal(true);
  }

  return (
    <>
      <Container>
        <Card
          key={doubtId}
          onPress={handleShedule}
        >
          <IconCard>
            <Image source={{uri: data.doctor.path_avatar}} resizeMode="center"/>
          </IconCard>
          <Data>
            <NameLabel>{data.doctor.username} {data.doctor.surname}</NameLabel>
            <SpecialtyLabel>{data.doctor.specialty}</SpecialtyLabel>

            <DateLabel>{moment(data.consultation_schedule).locale('pt-br').format('llll')}</DateLabel>
          </Data>
          <Badge color={data.status == 'Pending' ? '#FB2' : '#09C1FB'}>
            <BadgeLabel>{data.status == 'Pending' ? 'Solicitado' : 'Agendado'}</BadgeLabel>
          </Badge>
        </Card>
      </Container>
      <ModalShedule
        isActive={true}
        visible={showModal}
        justifyContent={'center'}
        onClose={() => setShowModal(false)}
        navigation={navigation}
        data={data}
      />
    </>
  );
};

export default ScheduleCard;
