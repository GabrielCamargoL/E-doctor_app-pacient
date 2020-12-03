import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import PushNotification from 'react-native-push-notification';
import Ws from '@adonisjs/websocket-client';
import { Tabs, TabHeading, Tab } from 'native-base';

import { useIsDrawerOpen } from '@react-navigation/drawer';

import {
  Container,
  Title,
  TabMenu,
  GoBackIcon,
  ViewGoBackIcon,
} from './styles';

import InputSearch from '../../components/InputSearch';
import DoctorCard from '../../components/DoctorCard';
import { getToken } from '../../services/auth';

import api from '../../services/api';

export default function Home({ navigation }) {
  const [token, setToken] = useState('');
  const [idUser, setIdUser] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);

  const getPropWs = async () => {
    setToken(await getToken());
  };

  const ws = Ws(`http://192.168.0.150:3001`, {
    path: 'adonis-ws',
  });
  ws.withJwtToken(token).connect();
  // const topic = ws.subscribe(`client:${idUser}`);

  const newNotification = (messageData) => {
    PushNotification.localNotificationSchedule({
      title: `${messageData} enviou uma nova mensagem`,
      message: messageData.message,
      date: new Date(Date.now() + 1 * 1000),
      allowWhileIdle: false,
    });
  };

  useEffect(() => {
    getPropWs();
    getUserId();
    getDoctors();
    getClinic();
  }, [navigation]);

  const getDoctors = async () => {
    const response = await api.get('/doctorAuth/index');
    setDoctors(response.data);
  };

  const getClinic = async () => {
    const response = await api.get('/clinicAuth/index');
    setClinics(response.data);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getPropWs();
    getDoctors();
    getClinic();
    setRefreshing(false);
  }, []);

  const getUserId = async () => {
    try {
      const response = await api.get('/patientAuth/getUser');

      const { id } = response.data;
      await setIdKey(id.toString());
      setIdUser(id);
    } catch (err) {
      console.log(err);
    }
  };

  topic.on('new:message', (message) => {
    newNotification(message);
    return;
  });

  return (
    <>
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ViewGoBackIcon onPress={() => navigation.openDrawer()}>
          <GoBackIcon />
        </ViewGoBackIcon>

        <Tabs
          onChangeTab={onRefresh}
          tabContainerStyle={styles.tab}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}>
          <Tab
            heading="Médicos"
            style={{ backgroundColor: '#f1f1f1' }}
            tabStyle={styles.tabHeadingLeft}
            textStyle={{ color: '#111' }}
            activeTabStyle={styles.tabHeadingActiveLeft}
            activeTextStyle={styles.tabHeadingActiveLeft}>
            <Title>Conhece o doutor?</Title>
            <InputSearch paddingTop={5} paddingBottom={1} />
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                navigation={navigation}
                doctorData={doctor}
                doctorId={doctor.id}
              />
            ))}
          </Tab>
          <Tab
            heading="Consultórios"
            style={{ backgroundColor: '#f1f1f1' }}
            tabStyle={styles.tabHeadingRigth}
            textStyle={{ color: '#111' }}
            activeTabStyle={styles.tabHeadingActiveRigth}
            activeTextStyle={styles.tabHeadingActiveRigth}>
            <Title>Busque por consultórios</Title>
            <InputSearch paddingTop={5} paddingBottom={1} />
            {clinics.map((clinic) => (
              <DoctorCard
                key={clinic.doctor_id}
                navigation={navigation}
                doctorData={clinic}
                doctorId={clinic.id}
              />
            ))}
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 40,
    width: '60%',
    height: 40,
    borderRadius: 50,
  },
  tabHeadingActiveLeft: {
    backgroundColor: 'white',
    color: '#7915c1',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  tabHeadingActiveRigth: {
    backgroundColor: 'white',
    color: '#7915c1',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  tabHeadingLeft: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  tabHeadingRigth: {
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
});
