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

