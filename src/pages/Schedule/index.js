/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
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

export default function Shedule({navigation}) {
  const [value, setValue] = useState([]);
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };
  const [heigth, setHeigth] = useState(0)
  const [items, setItems] = useState({});
  

  function find_dimesions(layout){
    const {x, y, width, height} = layout;
    console.log(x);
    console.log(y);
    console.log(width);
    console.log(height);
    setHeigth(height)
  }

  const loadItems = (day) => {
    setTimeout(() => {
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
    }, 1000);
  }

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginTop: 17, marginRight: 10}}>
        <Container>         

          <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
            <HeaderText>
              {item.name}
            </HeaderText>
            <Logo source={logo} resizeMode="contain" />
          </View>
         
        </Container>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <Container onLayout={(event) => {find_dimesions(event.nativeEvent.layout) }}>
        <View>
          {/* <HeaderText>Selecione a data para consulta</HeaderText> */}
          <Agenda            
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2017-05-16'} 
            renderItem={renderItem}           
          />
          {/* <Row>
            <HeaderText>DIA SELECIONADO:</HeaderText>
            <HeaderText>08/11/2001</HeaderText>
          </Row>
          <Row>
            <HeaderText>HORÁRIO:</HeaderText>
            <HeaderText>06:20 AM</HeaderText>
          </Row>          
            <Button onPress={() => {}}>
              <ButtonText>solicitar agendamento</ButtonText>
            </Button>           */}
        </View>
      </Container>
    </>
  );
}
