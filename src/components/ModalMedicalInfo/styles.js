import styled from 'styled-components';

import {fonts, colors} from '../../styles'

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly
`;

export const Label = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.regular};
  color: ${colors.gray}
`;


export const AddLabel = styled.Text`
  padding: 5px ;
  font-family: Roboto-Regular;
  font-size: ${fonts.title};
`;

export const Circle = styled.TouchableOpacity`
    height: 32;
    width: 32;
    border-radius: 50;
    border-width: 1;
    border-color: #ACACAC;
    background: ${colors.primary};
    align-items: center;
    justify-content: center;
`;

