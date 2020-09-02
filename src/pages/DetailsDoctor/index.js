/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  AsyncStorage,
  Alert,
  ActivityIndicator,
  Modal,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import LottieView from 'lottie-react-native';

import {
  Container,
  Content,
  ClosedContainer,
  ClosedLabel,
  SectionCompanyData,
  HeaderText,
  ProductScroll,
  CommentsButton,
  Row,
  Col,
  Button,
  ButtonText,
  ModalContainer,
  ModalContent,
  CommentInput,
  SendCommentButton,
  SendButtonText,
  CompanyRate,
} from './styles';

// import HeaderCheckout from '../../components/HeaderCheckout';
// import CommentsButchery from '../../components/CommentsButchery';
// import ProductCard from '../../components/ProductCard';
// import CartButton from '../../components/CartButton';
import InputSearch from '../../components/InputSearch';
// import store from '../../assets/lotties/store.json';

import api from '../../services/api';

export default function DetailsDoctor({navigation}) {

  return (
    <>
      <Container>
        <ScrollView>
          <Content>
            {/* <HeaderCheckout
              butchery={butchery}
              showcase={showcase.url}
              logo={logo.url}
              onGoBack={
                prevRouterName
                  ? () => navigation.navigate(prevRouterName, {total})
                  : () => navigation.navigate('Main', {total})
              }
              large
            /> */}
            <SectionCompanyData>
              <HeaderText>Nome Teste</HeaderText>
            </SectionCompanyData>
            <Row>
              <Col>
                <CompanyRate>
                  <Icon name="star" size={12} color={'#FFDE00'} />{' '}

                    Não informado
                </CompanyRate>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button>
                  <ButtonText>
                    Closed
                  </ButtonText>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <CommentsButton onPress={() => {}}>
                  <ButtonText>Avaliações de Clientes</ButtonText>
                </CommentsButton>
              </Col>
            </Row>
                <InputSearch
                  backgroundColor="#f8f8f8"
                  paddingTop={5}
                  paddingBottom={1}
                />


          </Content>
        </ScrollView>
        {/* <CartButton onPress={goCartCheckout} total={total} /> */}
      </Container>
    </>
  );
}
