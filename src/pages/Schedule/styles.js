import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import Lottie from 'lottie-react-native';
import {colors, fonts} from '../../styles';

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 10,
  paddingVertical: 90,
})`
  flex: 1;
  background-color: ${colors.background};
`;

export const HeaderText = styled.Text`
  font-size: ${fonts.title};
  padding: 30px;
  text-align: center
`;

export const Logo = styled.Image`
  width: 75;
  height: 75;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 322px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${fonts.medium};
  font-weight: bold;
  font-family: Roboto-Bold;
  text-transform: uppercase;
`;

export const IconAppointment = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color:${colors.cyan};
  justify-content: center;
  align-items: center;
`;

export const IconAppointmentText = styled.Text`
  font-size:14px;
  font-weight:bold;
  color:#fff;
`;

export const PacientName = styled.Text`
  font-size: ${fonts.title};
  padding: 10px;
`;

export const Badge = styled.TouchableOpacity`
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid;
  background-color: ${props =>
    props.backgroundColor };
  border-color: ${props =>
    props.borderColor };
  border-radius: 5;
  width: 100px;
  height: 30px
`;

export const BadgeLabel = styled.Text`
  font-size: ${fonts.medium};
  color: ${props =>
    props.color};
`;
