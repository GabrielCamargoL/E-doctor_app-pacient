import styled from 'styled-components/native';
import {colors, fonts} from '../../styles'

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 20,
  paddingVertical: 20
})`
  flex: 1;
  background-color: ${colors.background};
`;

export const ViewLoad = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextLoad = styled.Text`
  color: #ff910f;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  margin-top: 20px;
`;

export const Logo = styled.Image`
  width: 70%;
  height:150px;
  align-self:center;
  margin-top:80px;
  margin-bottom:20px;
`;

export const Content = styled.View.attrs({
  paddingHorizontal: 30,
})`
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
`;


export const Register = styled.Text`
  margin-top: 20px;
  color: #000;
  font-family: Roboto-Bold;
  font-size: ${fonts.input};
  letter-spacing: 1px;
`;

export const Button = styled.TouchableOpacity`
  height: 51px;
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  margin-top: 10px;
  border-radius: 50px;
  margin-top: 20px;
`;

export const Text = styled.Text`
  color: #000;
  font-family: Roboto-Bold;
  font-size: ${fonts.input};
  margin-left: 5px;
`;
