import styled from 'styled-components/native';
import {colors, general, fonts} from '../../styles'

export const Container = styled.SafeAreaView.attrs({
  paddingVertical: 10
})`
  flex: 1;
  background-color: #f1f1f1;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 145px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const IconCard = styled.View`
  width: 20%;
`;

export const Data = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Badge = styled.View`
  text-align: center;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  padding: 10px;
  background: #09C1FB;
  border-radius: 20;
  width: 80px;
  height: 18px
`;

export const BadgeLabel = styled.Text`
  font-size: 10px;
  color: #FFFFFF;
`;

export const NameLabel = styled.Text`
  font-size: ${fonts.input};
  color: ${colors.black};
`;

export const DateLabel = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.gray};
`;

export const SpecialtyLabel = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.gray};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
