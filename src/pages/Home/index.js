import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  RefreshControl
} from 'react-native';
import { Tabs, TabHeading, Tab } from 'native-base';

import { useIsDrawerOpen } from '@react-navigation/drawer';

import {
  Container,
  Title,
  TabMenu,
  GoBackIcon,
  ViewGoBackIcon
} from './styles';

import InputSearch from '../../components/InputSearch';
import DoctorCard from '../../components/DoctorCard';
import logo3 from '../../assets/home1.png';

import api from '../../services/api';

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    getDoctors()
    getClinic()
  }, [navigation]);

  const getDoctors = async () => {
    const response = await api.get('/doctorAuth/index');
    setDoctors(response.data)
  }

  const getClinic = async () => {
    const response = await api.get('/clinicAuth/index');
    setClinics(response.data)
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDoctors()
    getClinic()
    setRefreshing(false);
  }, []);

  return (
    <>
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ViewGoBackIcon onPress={() => navigation.openDrawer()}>
          <GoBackIcon />
        </ViewGoBackIcon>

        <Tabs
          onChangeTab={onRefresh}
          tabContainerStyle={styles.tab}
          tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
          >
          <Tab
            heading="Médicos"
            style={{backgroundColor:'#f1f1f1'}}
            tabStyle={styles.tabHeadingLeft}
            textStyle={{color: '#111'}}
            activeTabStyle={styles.tabHeadingActiveLeft}
            activeTextStyle={styles.tabHeadingActiveLeft}
          >
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
            heading="Consultórios"
            style={{backgroundColor:'#f1f1f1'}}
            tabStyle={styles.tabHeadingRigth}
            textStyle={{color: '#111'}}
            activeTabStyle={styles.tabHeadingActiveRigth}
            activeTextStyle={styles.tabHeadingActiveRigth}>
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
        </Tabs>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'transparent',
    alignSelf : 'center',
    marginTop: 40,
    width: '60%',
    height : 40,
    borderRadius: 50,
  },
  tabHeadingActiveLeft: {
    backgroundColor: 'white',
    color: '#7915c1',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  tabHeadingActiveRigth: {
    backgroundColor: 'white',
    color: '#7915c1',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  tabHeadingLeft: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  tabHeadingRigth: {
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  }
});
