import React from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Background } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Content>
        <h1>
          Bem vindo(a)
          <strong>{user.name}</strong>
        </h1>

        <Button type="button" onClick={signOut}>
          Sair
        </Button>
      </Content>
      <Background />
    </Container>
  );
};

export default Dashboard;
