import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled(Icon)`
  margin: 0;
  padding: 0;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Bold';
`;

export const Subtitle = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin: 30px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
  margin-bottom: 60px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-top: 15px;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #133b40;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`;
