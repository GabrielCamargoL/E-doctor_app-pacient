import styled from 'styled-components/native';
import {colors,fonts} from './../../styles'

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 20,
  paddingVertical: 20
})`
  flex:1;
  background-color: #fff;
`;

export const Row = styled.View`
    flex-direction: row;
    width:100%;
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
  margin-top:5%;
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
