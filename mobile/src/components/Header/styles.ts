import styled from 'styled-components/native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  background: #267780;
  padding-left: 10px;
`;

export const MaterialIcon = styled(Material)`
  margin: 0;
  padding: 0;
`;

export const FeatherIcon = styled(Feather)`
  margin: 0;
  padding: 0;
`;

export const Name = styled.View`
  margin-left: 10px;
  margin-right: 10px;

  flex: 1;

  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 18px;
  color: #fff;
`;

export const Subtitle = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 15px;
  color: #fff;
`;

export const SubtitleBold = styled.Text`
  font-family: 'RobotoSlab-Medium';
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;

export const LogoutButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 15px;
  color: #fff;
  margin-left: 5px;
`;
