import React, { useState } from 'react';

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
  SpecialtyLabel,
} from './styles';

import moment from 'moment';
import 'moment/min/locales';

import ModalShedule from '../ModalShedule';

const ScheduleCard = ({ data, navigation, key, doneAppointment }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShedule = async () => {
    console.log(key);
    if (doneAppointment)
      return navigation.navigate('PrescriptionsDetails', {
        appointmentId: data.id,
      });
    if (data.status != 'Rejected') setShowModal(true);
  };

  return (
    <>
      <Container>
        <Card key={key} onPress={handleShedule}>
          <IconCard>
            <Image
              source={{ uri: data.doctor.path_avatar }}
              resizeMode="center"
            />
          </IconCard>
          <Data>
            <NameLabel>
              {data.doctor.username} {data.doctor.surname}
            </NameLabel>
            <SpecialtyLabel>{data.doctor.specialty}</SpecialtyLabel>

            <DateLabel>
              {moment(data.consultation_schedule)
                .locale('pt-br')
                .format('llll')}
            </DateLabel>
          </Data>
          <Badge
            color={
              data.status == 'Pending'
                ? '#FB2'
                : data.status == 'Rejected'
                ? '#F34'
                : '#09C1FB'
            }>
            <BadgeLabel>
              {data.status == 'Pending'
                ? 'Solicitado'
                : data.status == 'Rejected'
                ? 'Recusado'
                : 'Agendado'}
            </BadgeLabel>
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
