import React, {useState} from 'react';
import { ActivityIndicator } from 'react-native';
import {
  ViewLogo,
  HeaderLogo,
  Header,
  GoBackIcon,
  ViewInput,
  ViewGoBackIcon
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';
import Input from '../../components/Form/Input'

const HeaderCheckout = ({
  children,
  doctor,
  showcase,
  logo,
  onGoBack,
  large,
}) => {
  const [doubt, setDoubt] = useState('');
  const [load, setLoad] = useState(false);

  const sendDoubt = async () => {
    try {
      setLoad(true)
      const response = await api.post('patientAuth/doubt/create', {
        doctor_id: doctor.id,
        doubt
      })
      if (response.status == 200){
        setDoubt('')
      }
    } catch (error) {
      console.log(error);
      setLoad(false)
    }

  }

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
            multiline={true}
            numberOfLines={1}
            maxLength={200}
            value={doubt}
            onChangeText={setDoubt}
            iconRight={!load ? 'paper-plane-o': 'check-circle'}
            onIconRightPress={doubt.length ? sendDoubt : null}
          />
        </ViewInput>
      </Header>
    );

};

export default HeaderCheckout;
