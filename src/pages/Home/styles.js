import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';
import {colors,fonts} from './../../styles'

export const Container = styled.ScrollView`
  flex: 1;
  margin-top:20px;
`;

export const Title = styled.Text`
  margin-top: 30;
  margin-left: 20;
  margin-bottom: 20;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 18;
  color: #767272;
`;

export const TabMenu = styled.Text`
  color: #000;
  text-transform: capitalize;
  font-family: Roboto-Bold;
  font-size: 12
`;

export const Logo = styled.Image`
  width: 90%;
  height:250;
  align-self:center;
  margin-top:50;
  margin-bottom:20;
`;

export const ViewIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: ${colors.primary_80};
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ViewGoBackIcon = styled(ViewIcon)`
  position: absolute;
  left: 10px;
  top: 30px
`;

export const GoBackIcon = styled(IconAnt).attrs({
  color: '#fff',
  size: 24,
  resizeMode: 'contain',
  type: 'AntDesign',
  name: 'bars',
})``;
