import styled from 'styled-components/native';
import {colors, general, fonts} from '../../styles'

export const Container = styled.SafeAreaView.attrs({
})`
  flex: 1;
  background-color: #f1f1f1;
`;

export const Card = styled.TouchableOpacity`
  width: 85%;
  height: 145px;
  margin: 10px 0;
  background-color: #fff;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-radius: 10px
`;

export const IconCard = styled.View`
  width: 30%;
`;

export const Data = styled.View`
  width: 70%;
`;

export const NameLabel = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.primary_60};
  margin-top: 10px;
`;

export const SpecialtyLabel = styled.Text`
  font-size: ${fonts.input};
  font-weight: 600;
`;

export const Image = styled.Image`
  width: 80px;
  height: 90px;
  border-radius: 50
`;

export const LabelDate = styled.Text`
  font-family: Roboto-Bold;
  font-size: ${fonts.small};
  color: #99879D;
  text-align: right;
`;
