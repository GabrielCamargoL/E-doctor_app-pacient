/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {colors, general, fonts} from '../../styles';
// import LottieView from 'lottie-react-native';

import {
  Container,
  SectionCompanyData,
  HeaderText,
  DetailsText,
  Row,
  Col,
  FlatButton,
  Button,
  ButtonText,
  FlatButtonText,
  CompanyRate,
} from './styles';

import HeaderCheckout from '../../components/HeaderCheckout';

import api from '../../services/api';

export default function DetailsDoctor({}) {
  const route = useRoute();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDoctorDetails()
  }, [])

  const getDoctorDetails = async () => {
    try {
      setLoading(true);
      const doctorId = route.params ? route.params.doctorId : undefined;
      const response = await api.get(`/doctorAuth/getUser/${doctorId}`);

      setDoctor(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onRefresh = React.useCallback(() => {
    getDoctorDetails();
  }, []);

  function handleEvaluation () {
    const doctorId = route.params ? route.params.doctorId : undefined;
    navigation.navigate('Evaluation', {
      doctorId,
    })
  }

  const handleShedule = () => {
    const doctorId = route.params ? route.params.doctorId : undefined;
    navigation.navigate('Schedule', {
      doctorId,
      clinicId: doctor.clinic.id,
    })
  }

  return (
    <>
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
            <HeaderCheckout
              doctor={doctor}
              //showcase={showcase.url}
              logo={doctor.path_avatar}
              onGoBack={() => navigation.goBack()}
              large
            />
            <SectionCompanyData>
              <HeaderText>{doctor.username} {doctor.surname}</HeaderText>
              <CompanyRate>
                {doctor.totalStars && Array(Math.floor(doctor.totalStars)).fill().map((icon, index) => (
                  <Icon name="star" key={index} size={14} color={colors.primary} />
                ))}
              </CompanyRate>
            </SectionCompanyData>

              {/* <HeaderText>{doctor.clinic.name === null ? 'Nome do Consultório' : doctor.clinic.name}</HeaderText> */}
            <FlatButton onPress={() => handleEvaluation()}>
              <FlatButtonText>Avaliações</FlatButtonText>
            </FlatButton>
            <Row>
              <DetailsText>
                Meu propósito como médico Cardiologista é conscientizar as
                pessoas da importância dos cuidados com a própria saúde.
              </DetailsText>
            </Row>
        </ScrollView>
        <Button onPress={handleShedule}>
          <ButtonText>Solicitar agendamento</ButtonText>
        </Button>
      </Container>
    </>
  );
}
