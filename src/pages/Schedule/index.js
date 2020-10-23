/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useMemo, useCallback} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';

import { Agenda, LocaleConfig } from 'react-native-calendars';
import {
  Container,  
  HeaderText,  
  Col,  
  Row,
  Button,
  ButtonText,
  Logo, 
} from './styles';

import api from '../../services/api';
import logo from '../../assets/logo.png';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

import ModalMedicalInfo from '../../components/ModalMedicalInfo'

export default function Shedule({navigation}) {
  const [value, setValue] = useState([]);
  const [daySelected, setDaySelected] = useState('')
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };
  const [heigth, setHeigth] = useState(0)
  const [items, setItems] = useState({});

  const [showModal, setShowModal] = useState(false);
  

  const memoizedValue = useMemo(() => renderItem, [items])

  function find_dimesions(layout){
    const {x, y, width, height} = layout;
    console.log(x);
    console.log(y);
    console.log(width);
    console.log(height);
    setHeigth(height)
  }  

  LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Maio','Abril','Maio','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    today: 'Hoje'
  };
  LocaleConfig.defaultLocale = 'br';

  const loadItems = (day) => {    
    for (let i = -15; i < 85; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);
      if (!items[strTime]) {
        items[strTime] = [];
        const numItems = Math.floor(Math.random() * 3 + 1);
        for (let j = 0; j < numItems; j++) {
          items[strTime].push({
            name: 'Item for ' + strTime + ' #' + j,
            height: Math.max(50, Math.floor(Math.random() * 150))
          });
        }
      }
    }
    const newItems = {};
    Object.keys(items).forEach(key => {newItems[key] = items[key];});
    setItems(newItems);    
  }
 
  const renderItem = (props)  => {
    console.log(props);
    return (
      <TouchableOpacity style={{marginTop: 17, marginRight: 10}}>
        <Container>      
          <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
            <HeaderText>
              {props.name}
            </HeaderText>
            <Logo source={logo} resizeMode="contain" />
          </View>     
        </Container>
      </TouchableOpacity>    
  )}

  function handleShedule () {
    navigation.navigate('Schedule')
  }

  return (
    <>
      <Container onLayout={(event) => {find_dimesions(event.nativeEvent.layout) }}>
        <ScrollView>
          <HeaderText>Selecione a data para consulta</HeaderText>
          <Agenda            
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2020-01-01'} 
            renderItem={memoizedValue}
            minDate={'2019-05-10'}   
            maxDate={'2025-05-30'}
            onDayPress={(day) => setDaySelected(day.dateString)}     
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
            <HeaderText>DIA SELECIONADO:</HeaderText>
            <HeaderText>{daySelected}</HeaderText>
          </Row>
          <Row>
            <HeaderText>HORÁRIO:</HeaderText>
            <HeaderText>06:20 AM</HeaderText>
          </Row>          
            <Button  onPress={() => { setShowModal(true);}}>
              <ButtonText>solicitar agendamento</ButtonText>
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
