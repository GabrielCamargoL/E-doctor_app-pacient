import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  RefreshControl
} from 'react-native';
import { Tabs, TabHeading, Tab } from 'native-base';
import { Container, Logo, Title, TabMenu } from './styles';
import InputSearch from '../../components/InputSearch';
import ScheduleCard from '../../components/ScheduleCard';
import logo3 from '../../assets/home1.png';

import api from '../../services/api';

export default function MySchedule({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);

  useEffect(() => {
    getConfirmedAppointments()
    getPendingAppointments()
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    getConfirmedAppointments()
    getPendingAppointments()
  }, []);

  const getConfirmedAppointments = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/patientAuth/confirmedAppointments');
      setConfirmedAppointments(response.data)
      setRefreshing(false);

    }
    catch (err) {
      console.log(err);
    }
  }

  const getPendingAppointments = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/patientAuth/pendingAppointments');
      setPendingAppointments(response.data)
      setRefreshing(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Tabs
          tabBarUnderlineStyle={{borderBottomWidth:3, borderBottomColor: '#7915c1'}}>
          <Tab
            style={{backgroundColor:'#f1f1f1'}}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Agenda</TabMenu>
              </TabHeading>
            }>
            {confirmedAppointments.map(doctor => (
              <ScheduleCard
                key={doctor.id}
                navigation={navigation}
                data={doctor}
                doubtId={doctor.id}
              />
            ))}
          </Tab>
          <Tab
            style={{backgroundColor:'#f1f1f1'}}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Solicitações</TabMenu>
              </TabHeading>
            }
            >
            {pendingAppointments.map(doctor => (
              <ScheduleCard
                key={doctor.id}
                navigation={navigation}
                data={doctor}
                doubtId={doctor.id}
              />
            ))}
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#fff',
  },
});
