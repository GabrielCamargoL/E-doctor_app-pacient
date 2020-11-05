/* eslint-disable eqeqeq */
import React, {useState, useEffect} from 'react';

import api from '../../services/api';
import {
  ViewLogo,
  HeaderLogo,
  Header,
  GoBackIcon,
  FavoriteIcon,
  ViewInput,
  ViewGoBackIcon
} from './styles';

import logo from '../../assets/logo.png';
import Input from '../../components/Form/Input'

const HeaderCheckout = ({
  children,
  doctor,
  showcase,
  logo,
  onGoBack,
  large,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [listFavorites, setListFavorites] = useState([]);
  const [clientId, setClientId] = useState(0);

  const Content = () => (
    <>
      <ViewLogo elevation={8}>
        <HeaderLogo source={{uri: logo}}/>
      </ViewLogo>

      {onGoBack && (
        <ViewGoBackIcon onPress={onGoBack}>
          <GoBackIcon />
        </ViewGoBackIcon>
      )}
    </>
  );

    return (
      <Header large={large}>
        <Content />
        <ViewInput>
          <Input
            placeholder="Como Posso te ajudar ?"
            width="100%"
          />
        </ViewInput>
      </Header>
    );

};

export default HeaderCheckout;
