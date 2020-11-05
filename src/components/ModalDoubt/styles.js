import styled from 'styled-components';

import {fonts, colors} from '../../styles'

export const Container = styled.View.attrs({
  paddingHorizontal: 40,
})`
  flex: 1;
  justify-content: space-evenly;
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
  font-size: ${fonts.medium};
  color: ${colors.gray}
`;


