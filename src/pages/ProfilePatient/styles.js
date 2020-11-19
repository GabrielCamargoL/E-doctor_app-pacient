import styled from 'styled-components/native';
import {colors,fonts} from './../../styles'

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 20,
  paddingVertical: 30,

})`
  flex:1;
  background-color: #fff;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const LabelInput = styled.Text`
  font-size:${fonts.input};
  font-weight:600;
  font-family:Roboto;
  margin-left:5px;
`;

export const ButtonEditView = styled.View`
  align-self: center;
  margin: 50px
`;

export const ButtonEdit = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width: 180px;
  height: 50px;
  background-color:${colors.primary_60};
  border-radius: 8px;
`;

export const ButtonEditText = styled.Text`
  font-size:17px;
  font-weight:bold;
  text-align:center;
  color: #FFF;
`;

export const Switch = styled.Switch``;

export const Title = styled.Text`
  margin-top: 20;
  margin-bottom: 20;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 18;
  color: #767272;
`;
