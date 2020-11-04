import React, { useState, useEffect } from 'react';
import {
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Tabs, TabHeading, Tab } from 'native-base';
import { Container, Logo, Title, TabMenu } from './styles';
import InputSearch from '../../components/InputSearch';
import DoctorCard from '../../components/DoctorCard';
import logo3 from '../../assets/home1.png';

import api from '../../services/api';

export default function Home({ navigation }) {
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    getDoctors()
    getClinic()
  }, [navigation]);

  const getDoctors = async () => {
    try {
      const response = await api.get('/doctorAuth/index');
      setDoctors(response.data)
    }
    catch (err) {
      console.log(err);
    }
  }

  const getClinic = async () => {
    try {
      const response = await api.get('/clinicAuth/index');
      setClinics(response.data)
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container>
        <Tabs
          tabBarUnderlineStyle={{borderBottomWidth:3, borderBottomColor: '#7915c1'}}>
          <Tab
            style={{backgroundColor:'#f1f1f1'}}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Médicos</TabMenu>
              </TabHeading>
            }>
            <Title>Conhece o doutor?</Title>
            <InputSearch
              paddingTop={5}
              paddingBottom={1}
            />
            {doctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                navigation={navigation}
                doctorData={doctor}
                doctorId={doctor.id}
              />
            ))}
          </Tab>
          <Tab
            style={{backgroundColor:'#f1f1f1'}}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Consultórios</TabMenu>
              </TabHeading>
            }
            >
            <Title>Busque por consultórios</Title>
            <InputSearch
              paddingTop={5}
              paddingBottom={1}
            />
            {clinics.map(clinic => (
              <DoctorCard
                key={clinic.doctor_id}
                navigation={navigation}
                doctorData={clinic}
                doctorId={clinic.id}
              />
            ))}
          </Tab>
          <Tab
            style={{backgroundColor:'#f1f1f1'}}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Especialidade</TabMenu>
              </TabHeading>
            }>
            <Title>Busque por especialidade</Title>
            <InputSearch
              paddingTop={5}
              paddingBottom={1}
            />
            {doctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                navigation={navigation}
                doctorData={doctor}
                doctorId={doctor.id}
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
