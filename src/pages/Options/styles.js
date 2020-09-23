import styled from 'styled-components/native'; 
import {colors, general, fonts} from '../../styles';

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 20,
})`
  flex:1;
  background-color: #fff;
  margin-top:25px;
`;

export const OptionsText = styled.Text`
  font-family:Roboto;
  font-weight:700;
  font-size:16px;
`;

export const TouchableOptions = styled.TouchableOpacity`
  flex-direction:row;
  margin-top:10%;
`;
