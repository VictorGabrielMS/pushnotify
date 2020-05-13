import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const FeatherIcon = styled(Feather)`
  padding: 0;
  margin: 0;
`;

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ActionSpace = styled.View`
  background: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border-radius: 20px;

  background: #133b40;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  shadow-color: #000;
  shadow-offset: 0 12px;
  shadow-opacity: 0.58;
  shadow-radius: 16px;
  elevation: 24;
`;

export const ActionButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 13px;

  margin: 8px;
  color: #fff;
`;

export const Input = styled.TextInput`
  font-size: 15px;
  padding: 10px;
`;
