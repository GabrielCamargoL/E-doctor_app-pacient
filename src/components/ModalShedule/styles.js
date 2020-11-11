import styled from 'styled-components';

import {fonts, colors} from '../../styles'

export const Container = styled.View.attrs({
  paddingHorizontal: 40,
})`
  flex: 1;
  justify-content: space-evenly;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const HeaderLogo = styled.Image`
  height: 95px;
  width: 95px;
  border-radius: 10px;
`;

export const ViewLogo = styled.View`
  height: 95px;
  width: 95px;
  border-radius: 10px;
  background: #f1f1f1;
  align-self: center;
  margin-bottom: 10px
`;

export const Label = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.input};
  color: ${colors.black}
`;

export const NameLabel = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.title};
  color: ${colors.gray}
`;

export const Circle = styled.TouchableOpacity`
    height: 20px;
    width: 20px;
    border-radius: 10;
    border-width: 1px;
    border-color: #ACACAC;
    align-items: center;
    justify-content: center;
    margin-right:7px;
`;

export const CheckedCircle = styled.TouchableOpacity`
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: #4B7299;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom:5px;
    margin-left:8px;
`;

export const CancelingButton = styled.TouchableOpacity`
  width:60%;
  height:50px;
  background-color: ${colors.danger};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  margin-top: 30px;
`;
