import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

export const FeatherIcon = styled(Feather)`
  padding: 0;
  margin: 0;
`;

export const MaterialIcon = styled(Material)`
  padding: 0;
  margin: 0;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #133b40;

  font-family: 'RobotoSlab-Bold';

  padding: 0;
  margin-bottom: 0;

  margin-left: 20px;
  margin-top: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
})`
  flex-basis: 0;
`;

export const UserCard = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 150px;
  background: #fff;

  margin: 5px;

  border-width: 2px;
  border-color: #133b40;
  border-radius: 8px;
`;

export const IconCircle = styled.View`
  background: #133b40;

  width: 60px;
  height: 60px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;

  margin: 10px;
`;

export const Info = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 18px;
  color: #133b40;
`;

export const Email = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
  color: #133b40;
  margin-bottom: 5px;
`;

export const NotificationButton = styled.TouchableOpacity`
  background: #133b40;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 15px;
  right: 20px;

  width: 50px;
  height: 50px;
  border-radius: 25px;

  shadow-color: #000;
  shadow-offset: 0 12px;
  shadow-opacity: 0.58;
  shadow-radius: 16px;
  elevation: 24;
`;
