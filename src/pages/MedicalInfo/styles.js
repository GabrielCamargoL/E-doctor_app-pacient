import styled from 'styled-components/native';
import {colors,fonts} from '../../styles'

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 10,
})`
  flex:1;
  background-color: #FFF;
`;

export const Row = styled.View`
    flex-direction: row;
    width:100%;
    margin-top:15px;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const SubTitle = styled.Text`
  font-size:${fonts.title};
  margin:10px;
`;

export const InputContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  flex: 1;
  height: 70;
`;


export const LabelContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  background-color: #FFF;
  top: 10;
  left: 25;
  z-Index: 50;
  width:23%;
`;

export const LabelInput = styled.Text`
  font-size:${fonts.input};
  font-weight:600;
  font-family:Roboto;
  margin-left:5px;
`;

export const InputLabel = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  width: 100%;
  margin-bottom:20px;
  margin-top:5px;
`;

export const ButtonSaveView = styled.View`
  align-self: center;
  margin-top:5%;
`;

export const ButtonSave = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width: 180px;
  height: 50px;
  background-color:${colors.primary_60};
  border-radius: 8px;
`;

export const ButtonSaveText = styled.Text`
  font-size:17px;
  font-weight:bold;
  text-align:center;
  color: #FFF;
`;

        
