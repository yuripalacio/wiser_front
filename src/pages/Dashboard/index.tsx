import React from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Background } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <h1>Bem vindo(a) Yuri Palacio!</h1>
      </Content>
      <Background />
      <Button type="button" onClick={signOut}>
        Sair
      </Button>
    </Container>
  );
};

export default Dashboard;
