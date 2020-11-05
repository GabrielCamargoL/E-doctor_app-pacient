import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

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
  position: absolute;
  align-self: center;
  top: 70px;
`;

export const ViewInput = styled.View`
  width: 80%;
  margin-bottom: 25px;
  align-self: center;
`;

export const Header = styled.ImageBackground.attrs({})`
  position: relative;
  width: 100%;
  height: ${props => (props.large ? '316px' : '133px')};
  background-color: #c8c8c8;
  justify-content: flex-end;
  align-items: center;
  z-index: 9999;
  margin-bottom: 20px;
`;

export const ViewIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #c8c8c8;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ViewGoBackIcon = styled(ViewIcon)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const GoBackIcon = styled(IconAnt).attrs({
  color: '#fff',
  size: 32,
  resizeMode: 'contain',
  type: 'AntDesign',
  name: 'arrowleft',
})``;

export const FavoriteIcon = styled(Icon).attrs({
  color: '#fff',
  size: 32,
  resizeMode: 'contain',
  type: 'FontAwesome',
})`
  position: absolute;
  top: 10px;
  right: 10px;
`;
