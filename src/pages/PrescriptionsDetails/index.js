import React from 'react';

import {
  Container,
  ViewLogo,
  HeaderLogo,
  Col,
  Row,
  Header,
  Main,
  Title,
  Label,
  NameLabel,
  LabelPDF,
}
from './styles';

export default function PrescriptionsDetails({}) {
  return (
    <Container>
      <Header>

        <Title>
          Resumo da Consulta
        </Title>
        <HeaderLogo source={{uri: 'https://image.flaticon.com/icons/png/512/387/387561.png'}}/>
        <NameLabel>Oftalmologista</NameLabel>
        <Row>
          <NameLabel>Dr. Nelson Mandela</NameLabel>
          <NameLabel>08/09/2020</NameLabel>
        </Row>

      </Header>
      <Main>

        <Row>
          <Label>
            Prescrição
          </Label>
          <LabelPDF>
            Gerar PDF
          </LabelPDF>
        </Row>
        <Label>
          Lettuce is an annual plant of the daisy family,
          Asteraceae. It is most often grown as a leaf vegetable,
          but sometimes for its stem and seeds
        </Label>
        <Label>Resultados de Exame:</Label>
      </Main>

    </Container>
  )
}


