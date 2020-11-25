import styled from 'styled-components/native';
import {colors, general, fonts} from '../../styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

export const Container = styled.SafeAreaView.attrs({
})`
  flex: 1;
  background-color: #F1f1f1;
`;

export const Col = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 145px;
  background-color: #FFF;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  margin-bottom: 10%;
`;

export const IconCard = styled.View`
  width: 30%;
  /* background-color: #F1f; */
`;

export const Data = styled.View`
  align-items: center;
  width: 70%;
  padding: 0 10px;
  border-radius: 50%

`;

export const NameLabel = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.black}
`;

export const Label = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.gray}
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;

export const ViewIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ViewGoBackIcon = styled(ViewIcon)`
  align-self: flex-start;
`;

export const GoBackIcon = styled(IconAnt).attrs({
  color: `${colors.gray}`,
  size: 24,
  resizeMode: 'contain',
  type: 'AntDesign',
  name: 'arrowleft',
})``;

export const SignOutIcon = styled(IconAnt).attrs({
  color: `${colors.gray}`,
  size: 18,
  resizeMode: 'contain',
  type: 'AntDesign',
  name: 'poweroff',
})``;

export const OptionsText = styled.Text`
  font-family:Roboto;
  font-size: ${fonts.regular};
  color: ${colors.gray};
  margin-left: 10px
`;

export const TouchableOptions = styled.TouchableOpacity`
  flex-direction:row;
  margin-top:10%;
  margin-left: 20px
`;
