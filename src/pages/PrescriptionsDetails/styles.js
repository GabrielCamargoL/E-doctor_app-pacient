import styled from 'styled-components';

import {fonts, colors} from '../../styles'

export const Container = styled.View.attrs({
  paddingHorizontal: 40,
})`
  flex: 1;
  justify-content: space-around;
`;

export const Header = styled.View.attrs({
})`
  flex: 1;
  justify-content: space-evenly;
`;

export const Main = styled.View.attrs({
})`
  flex: 1;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLogo = styled.Image`
  height: 95px;
  width: 95px;
  border-radius: 10px;
  align-self: center;
`;

export const ViewLogo = styled.View`
  height: 95px;
  width: 95px;
  border-radius: 10px;
  background: #f1f1f1;
  align-self: center;
  margin-bottom: 10px
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
  text-align: center
`;

export const Label = styled.Text`
  margin-top: 10;
  font-family: Roboto-Regular;
  font-size: ${fonts.medium};
  color: ${colors.black}
`;

export const LabelPDF = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.medium};
  color: ${colors.cyan}
`;

export const NameLabel = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.input};
  color: ${colors.black}
`;


