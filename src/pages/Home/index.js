import React, { useState, useEffect } from 'react';
import { Text, Button, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import {Tabs, TabHeading, Tab} from 'native-base';
import { Container, Logo, Title, TabMenu} from './styles';
import InputSearch from '../../components/InputSearch';
import DoctorCard from '../../components/DoctorCard';
import logo3 from '../../assets/home1.png';


export default function Home({ navigation }) {
  const [value, setValue] = useState([]);

  const allowedState = [
    { id: 1, name: "Alabama", cargo: 'Doctor' },
    { id: 2, name: "Georgia", cargo: 'Doctor' },
    { id: 3, name: "Tennessee", cargo: 'Doctor'}
  ];


  useEffect(() => {
    setValue(allowedState)
  }, [])

  return (
    <>
      <Container>
        <Tabs>
          <Tab
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Médicos</TabMenu>
              </TabHeading>
          }>
            <Title>Conhece o doutor?</Title>
            <InputSearch
              backgroundColor="#f8f8f8"
              paddingTop={5}
              paddingBottom={1}
            />
            <Logo source={logo3} resizeMode="contain" />

          <DoctorCard
            key={value.id}
            navigation={navigation}
            doctorData={value}
            doctorId={value.id}
          />
          </Tab>
          <Tab
            style={styles.tabs}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Consultórios</TabMenu>
              </TabHeading>
            }>
            <Title>Busque por consultórios</Title>
            <InputSearch
              backgroundColor="#f8f8f8"
              paddingTop={5}
              paddingBottom={1}
            />
          <DoctorCard
            key={value.id}
            navigation={navigation}
            doctorData={value}
            doctorId={value.id}
          />
          </Tab>
          <Tab
            style={styles.tabs}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Especialidade</TabMenu>
              </TabHeading>
            }>
            <Title>Busque por especialidade</Title>
            <InputSearch
              backgroundColor="#f8f8f8"
              paddingTop={5}
              paddingBottom={1}
            />
          <DoctorCard
            key={value.id}
            navigation={navigation}
            doctorData={value}
            doctorId={value.id}
          />
          </Tab>
        </Tabs>
      </Container>

    </>
  );


}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 3,
    borderBottomColor: '#7915c1',
  },
});
