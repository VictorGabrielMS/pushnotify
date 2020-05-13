import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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

export const BackToSignInButton = styled.TouchableOpacity`
  margin-top: 15px;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Mediel';
  margin-left: 16px;
`;
