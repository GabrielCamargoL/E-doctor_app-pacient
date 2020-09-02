import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import Lottie from 'lottie-react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background-color: #f8f8f8;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  margin-bottom: 50px;
`;

export const ProductScroll = styled.ScrollView.attrs({
  horizontal: true,
})``;

export const ViewLogo = styled.View`
  height: 65px;
  width: 65px;
  border-radius: 10px;
  background: #c8c8c8;
  position: absolute;
  left: 30;
  right: 0;
  bottom: -30;
`;

export const SectionCompanyData = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const CompanyRate = styled.Text`
  font-size: 12;
  color: #ffde00;
  font-family: Roboto-Bold;
`;

export const HeaderText = styled.Text`
  color: #000;
  font-size: 25px;
  font-family: Roboto-Bold;
  padding-bottom: 20px;
  padding-left: 20px;
`;

export const ProductContainer = styled.View`
  padding: 0px 10px;
`;

export const Label = styled.Text`
  font-size: 18;
  color: #000;
  font-family: Roboto-Bold;
  margin-top: 20;
  margin-left: 20;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Col = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  width: 150px;
  background-color: #771a22;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const CommentsButton = styled.TouchableOpacity`
  height: 40px;
  width: 300px;
  background-color: #f6a60f;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-family: Roboto-Bold;
  text-transform: uppercase;
`;

export const StyledImage = styled.ImageBackground`
  width: 62px;
  height: 90px;
  margin: 0 2px 10px 2px;
`;

export const ImageButton = styled.TouchableOpacity`
  flex: 1;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const AddCommentIcon = styled(Icon).attrs({
  color: '#111',
  size: 18,
  resizeMode: 'contain',
  type: 'FontAwesome',
})``;

export const CommentsLabel = styled.Text`
  font-size: 18;
  color: #000;
  font-family: Roboto-Bold;
  margin-right: 5px;
`;

export const CommentsViewInput = styled.View.attrs({
  paddingHorizontal: 20,
})`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50;
  background-color: #fff;
  width: 100%;
`;

export const CommentsInput = styled.TextInput`
  width: 100%;
  height: 50;
  font-family: Roboto-Light;
  color: #000;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  height: 100%;
  margin-bottom: 10px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const ModalContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  width: 100%;
  border-color: #ccc;
  background-color: #fff;
  border-radius: 10px;
`;

export const CommentInput = styled.TextInput`
  height: 45px;
  width: 95%;
  border-radius: 6px;
  border-width: 1;
  border-color: #000;
  color: #c8c8c8;
  padding-left: 10px;
  font-family: Roboto-Light;
`;

export const SendCommentButton = styled.TouchableOpacity`
  width: 95%;
  height: 45px;
  background: #7a1618;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const SendButtonText = styled.Text`
  font-size: 14px;
  font-family: Roboto-Bold;
  color: #fff;
  margin-left: 10px;
`;

export const ClosedContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ClosedLabel = styled.Text`
  color: #7a1618;
  font-size: 16px;
  font-family: Roboto-Bold;
  margin-top: 20px;
  text-align: center;
`;

// export const LottieView = styled(Lottie)`
//   width: 100%;
//   margin-top: 10px;
// `;
