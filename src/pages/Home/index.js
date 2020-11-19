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

  const isOpenDrawer = useIsDrawerOpen()

  useEffect(() => {
    getDoctors()
    getClinic()
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDoctors()
    getClinic()
    setRefreshing(false);

  }, []);

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
          tabContainerStyle={styles.borderRadius}
          tabBarUnderlineStyle={{borderBottomWidth:3, borderBottomColor: '#F5F'}}>
          <Tab
            style={{backgroundColor:'#f1f1f1'}}
            heading={

              <TabHeading
                activeTextStyle={styles.focus}
                style={styles.tabHeading, styles.borderRadius}>
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
        </Tabs>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#fff',
    // borderTopLeftRadius: 50,
    // borderBottomLeftRadius: 50,
    // borderTopRightRadius: 50,
    // borderBottomRightRadius: 50
  },
  borderRadius: {
    flex: 1,
    alignSelf : 'center',
    marginTop: 40,
    width: '60%',
    height : 40,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  focus: {
   color: '#223451',
   fontSize: 16,
  },
});
