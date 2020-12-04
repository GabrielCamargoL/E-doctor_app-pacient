import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';
export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
`;

export const Title = styled.Text`
  margin-top: 20;
  margin-left: 20;
  margin-bottom: 20;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 18;
  color: #767272;
  text-align: center;
`;

export const TabMenu = styled.Text`
  color: #000;
  text-transform: capitalize;
  font-family: Roboto-Bold;
  font-size: 12;
`;

export const Logo = styled.Image`
  width: 90%;
  height: 250;
  align-self: center;
  margin-top: 50;
  margin-bottom: 20;
`;

export const TextButton = styled.Text`
  text-transform: capitalize;
  font-family: Roboto-Bold;
  font-size: ${fonts.input};
  color: ${colors.primary};
`;

export const Button = styled.TouchableOpacity.attrs({})`
  padding: 10px;
  background: transparent;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 10px;
`;

export const Close = styled.TouchableOpacity`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${colors.primary_20};
  align-items: center;
  justify-content: center;
`;
