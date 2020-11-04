/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
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
import ModalMedicalInfo from '../../components/ModalMedicalInfo'

export default function DetailsDoctor({}) {
  const navigation = useNavigation();
  const route = useRoute();
  const [doctor, setDoctor] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDoctorDetails()
  }, [])

  function handleEvaluation () {
    navigation.navigate('Evaluation')
  }

  function handleShedule () {
    navigation.navigate('Schedule')
  }

  const getDoctorDetails = async () => {
    try {
      setLoading(true);
      const doctorId = route.params ? route.params.doctorId : undefined;
      const response = await api.get(`/doctorAuth/getUser/${doctorId}`);

      if (response.data) {
        setDoctor(response.data);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <ScrollView>
            <HeaderCheckout
              butchery={doctor}
              //showcase={showcase.url}
              logo={doctor.path_avatar}
              // onGoBack={
              //   prevRouterName
              //     ? () => navigation.navigate(prevRouterName, {total})
              //     : () => navigation.navigate('Main', {total})
              // }
              large
            />
            <SectionCompanyData>
              <HeaderText>{doctor.username} {doctor.surname}</HeaderText>
              <CompanyRate>
                {Array(5).fill().map(icon => (
                  <Icon name="star" size={14} color={colors.primary} />
                ))}
              </CompanyRate>
            </SectionCompanyData>
            <SectionCompanyData>
              <HeaderText>{doctor.username?? 'Nome do Consultório'}</HeaderText>
              <FlatButton onPress={() => handleEvaluation()}>
                <FlatButtonText>Avaliações</FlatButtonText>
              </FlatButton>
            </SectionCompanyData>
            <Row>
              <DetailsText>
                Lettuce is an annual plant of the daisy family,
                Asteraceae. It is most often grown as a leaf vegetable,
                but sometimes for its stem and seeds
              </DetailsText>
            </Row>
        </ScrollView>
        <Button
          onPress={() => {handleShedule()}}
          // onPress={() => { setShowModal(true);}}
        >
          <ButtonText>Solicitar agendamento</ButtonText>
        </Button>
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
