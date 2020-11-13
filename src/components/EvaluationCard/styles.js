import styled from 'styled-components/native';
import {colors, general, fonts} from '../../styles'

export const Container = styled.SafeAreaView.attrs({
  paddingVertical: 30,
})`
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between
`;

export const Card = styled.View`
  width: 100%;
  height: 145px;
  margin: 10px 0;
  padding: 10px 10px;
  justify-content: space-between;
`;

export const NameLabel = styled.Text`
  font-family: Roboto-Bold;
  font-size: ${fonts.input};
  color: ${colors.primary}
`;
export const LabelDate = styled.Text`
  font-family: Roboto-Bold;
  font-size: ${fonts.small};
  color: #99879D
`;

export const Label = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.regular};
`;

export const Comment = styled.Text`
  padding: 5px ;
  font-family: Roboto-Regular;
  font-size: ${fonts.regular};
`;

export const Icons = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.regular};
`;


