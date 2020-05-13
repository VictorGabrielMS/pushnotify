import React from 'react';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  MaterialIcon,
  FeatherIcon,
  Name,
  Title,
  Subtitle,
  SubtitleBold,
  LogoutButton,
  LogoutButtonText,
} from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <MaterialIcon name="bell" size={30} color="#fff" />

      <Name>
        <Title>Push Notfy</Title>
        <Subtitle>
          Bem Vindo,
          <SubtitleBold> Nome </SubtitleBold>
        </Subtitle>
      </Name>

      <LogoutButton onPress={() => signOut()}>
        <FeatherIcon name="log-out" size={15} color="#fff" />
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

export default Header;
