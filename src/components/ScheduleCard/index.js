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

import { colors } from '../../styles';
import ModalShedule from '../ModalShedule';

const ScheduleCard = ({ data, navigation, key, doneAppointment }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShedule = async () => {
    if (doneAppointment)
      return navigation.navigate('PrescriptionsDetails', {
        appointmentId: data.id,
        doctorId: data.doctor_id,
        dateConsult: data.consultation_schedule,
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
                ? colors.yellow
                : data.status == 'Rejected'
                ? colors.danger
                : data.status == 'Done'
                ? colors.success
                : colors.cyan
            }>
            <BadgeLabel>
              {data.status == 'Pending'
                ? 'Solicitado'
                : data.status == 'Rejected'
                ? 'Recusado'
                : data.status == 'Done'
                ? 'Finalizado'
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
