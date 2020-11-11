import React, {useState, useMemo, useEffect, useContext} from 'react';
import {ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {colors} from '../../styles';
import moment from 'moment';
import 'moment/min/locales'
import tz from 'moment-timezone';

import { Agenda, LocaleConfig } from 'react-native-calendars';
import {
  Container,
  HeaderText,
  Row,
  Button,
  ButtonText,
  Badge,
  BadgeLabel,
} from './styles';

import api from '../../services/api';
import { getIdKey } from '../../services/auth';

import ModalMedicalInfo from '../../components/ModalMedicalInfo'

export default function Shedule({}) {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [items, setItems] = useState({});

  const [daySelected, setDaySelected] = useState('')
  const [hourSelected, setHoursSelected] = useState({id: null, hour: ''})

  const [showModal, setShowModal] = useState(false);

  LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Maio','Abril','Maio','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    today: 'Hoje'
  };
  LocaleConfig.defaultLocale = 'br';

  useEffect(() => {
    async function getAppointments() {
      const doctorId = route.params ? route.params.doctorId : undefined;
      const responseConfirmed = await api.get(`appointment/confirmedAppointments/${doctorId}`);
      setConfirmedAppointments(responseConfirmed.data)
    }

    getAppointments();
  }, []);

  const loadItems = async (day) => {
    const selectedDay = moment(day.timestamp).format("YYYY-MM-DD")
    let ArrayHelp = []
    var obj = {};

    ArrayHelp.push({
      hours: [
        {
          hour: '09:00:00',
          available: true,
        },
        {
          hour: '11:30:00',
          available: true,
        },
        {
          hour: '12:00:00',
          available: false,
        },
        {
          hour: '13:00:00',
          available: false,
        },
        {
          hour: '14:00:00',
          available: false
        }
      ]
    })

    obj[selectedDay] = ArrayHelp;

    setItems(obj)
  }

  const renderItem = (item) => {
    return (
        <View
          style={{
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 17,
            marginRight: 10
        }}>
          <HeaderText>
            Selecione o Horário
          </HeaderText>
          {item.hours.map((hour, index) => (
            <Badge
              key={index}
              backgroundColor={
                colors.background,
                hourSelected.id === index ? colors.success : colors.background
              }
              borderColor={
                hour.available ? colors.success : colors.danger
              }
              onPress={() => {
                !hour.available && Alert.alert("Horário não disponível")
                hour.available && setHoursSelected({id: index, hour: hour.hour})
              }}
            >
              <BadgeLabel
                color={
                  hour.available ?
                    hourSelected.id === index ?
                    colors.background : colors.success
                  : colors.danger
              }>
                {hour.hour}
              </BadgeLabel>
            </Badge>
          ))}
      </View>
    )
  }

  const handleConsult = async () => {
    const doctorId = route.params ? route.params.doctorId : undefined;
    const clinicId = route.params ? route.params.clinicId : undefined;
    const userId = await getIdKey();

    console.log(doctorId);
    console.log(clinicId);
    console.log(userId);


    // const { status } = await api.get('medicalInfo/show')
    // if (status === 204) {
    //   setShowModal(true);
    // }
    const data = {
      clinic_id: 1,
      doctor_id: 1,
      user_id: 1,
      consultation_schedule: `${daySelected} ${hourSelected.hour}`
    }

    try {
      const response = await api.post('appointment/create', data)

      if (response.status) {
        console.log('deu certo');
      }
    } catch (error) {
      console.log(error);
    }

  }

  const handleDayPress = (day) => {
    loadItems(day)
    setDaySelected(day.dateString)
    setHoursSelected({hour: ''})
  }

  return (
    <>
      <Container>
        <ScrollView>
          <HeaderText>Selecione a data para consulta</HeaderText>
          <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={Date.now()}
            renderItem={renderItem}
            minDate={'2019-05-10'}
            maxDate={'2025-05-30'}
            onDayPress={(day) => handleDayPress(day)}
            pastScrollRange={10}
            futureScrollRange={10}
            style={{height: 300}}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
          <Row>
            <HeaderText>Dia Selecionado:</HeaderText>
            <HeaderText>
              {daySelected &&
                moment(daySelected).locale('pt-br').format('L')
              }
            </HeaderText>
          </Row>
          <Row>
            <HeaderText>Horário:</HeaderText>
            <HeaderText>{hourSelected.hour}</HeaderText>

          </Row>
          <Button onPress={handleConsult}>
            <ButtonText>Solicitar agendamento</ButtonText>
          </Button>
        </ScrollView>
      </Container>
      <ModalMedicalInfo
        isActive={true}
        visible={showModal}
        justifyContent={'center'}
        onClose={() => setShowModal(false)}
        navigation={navigation}
      />
    </>
  );
}
