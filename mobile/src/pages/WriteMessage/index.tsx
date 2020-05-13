import React, { useCallback, useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ActionSpace,
  ActionButton,
  ActionButtonText,
  FeatherIcon,
  Input,
} from './styles';

const WriteMessage: React.FC = () => {
  const [notificationMessage, setNotificationMessage] = useState('');

  const inputRef = useRef<any>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(() => {}, []);

  return (
    <>
      <Container>
        <Input
          ref={inputRef}
          multiline
          placeholder="Escreva aqui a notificação ✎"
          autoCorrect={false}
          autoCapitalize="none"
          value={notificationMessage}
          onChangeText={(e) => setNotificationMessage(e)}
          returnKeyType="send"
        />

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            inputRef.current.focus();
          }}
        />
      </Container>

      <ActionSpace>
        <ActionButton onPress={() => navigation.navigate('Dashboard')}>
          <FeatherIcon name="arrow-left" color="#fff" size={20} />
          <ActionButtonText>Voltar</ActionButtonText>
        </ActionButton>

        <ActionButton onPress={() => handleSubmit}>
          <ActionButtonText>Enviar</ActionButtonText>
          <FeatherIcon name="send" color="#fff" size={20} />
        </ActionButton>
      </ActionSpace>
    </>
  );
};

export default WriteMessage;
