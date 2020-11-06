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
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    getDoctors()
    getClinic()
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    getDoctors()
    getClinic()
  }, []);

  const getDoctors = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/doctorAuth/index');
      setDoctors(response.data)
      setRefreshing(false);

    }
    catch (err) {
      console.log(err);
    }
  }

  const getClinic = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/clinicAuth/index');
      setClinics(response.data)
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
            {doctors.map(doctor => (
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
            {doctors.map(doctor => (
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
