import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  FeatherIcon,
  MaterialIcon,
  Container,
  Title,
  List,
  UserCard,
  IconCircle,
  Info,
  Name,
  Email,
  NotificationButton,
} from './styles';

interface User {
  id: number;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const user: User[] = [
    {
      id: 1,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 2,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 3,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 4,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 5,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 6,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 7,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 8,
      name: 'usuario',
      email: 'email@email.com',
    },
    {
      id: 9,
      name: 'usuario',
      email: 'email@email.com',
    },
  ];

  return (
    <Container>
      <Title>Usuarios</Title>

      <List
        data={user}
        keyExtractor={(item: User) => String(item.id)}
        renderItem={({ item }) => (
          <UserCard>
            <IconCircle>
              <FeatherIcon name="user" color="#fff" size={45} />
            </IconCircle>
            <Info>
              <Name>{item.name}</Name>
              <Email>{item.email}</Email>
            </Info>
          </UserCard>
        )}
      />

      <NotificationButton onPress={() => navigation.navigate('WriteMessage')}>
        <MaterialIcon name="bell-plus" color="#fff" size={27} />
      </NotificationButton>
    </Container>
  );
};

export default Dashboard;
