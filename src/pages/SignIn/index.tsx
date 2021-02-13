import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Wrapper, Content } from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório;')
            .email('Digite um e-mail válido;'),
          password: Yup.string().required('Senha obrigatória;'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description:
              'Ocorreu um erro ao entrar na plataforma, cheque as credenciais.',
          });
        }
      } finally {
        setLoading(false);
      }
    },
    [signIn, history, addToast],
  );

  return (
    <Container>
      <Background />
      <Wrapper>
        <Content>
          <h1>
            Olá, seja
            <br />
            bem-vindo!
          </h1>
          <span>Para acessar a plataforma, faça seu email.</span>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              legend="E-MAIL"
              placeholder="user.name@mail.com"
            />
            <Input
              name="password"
              legend="SENHA"
              type="password"
              placeholder="*******"
            />

            <Button loading={loading} type="submit">
              ENTRAR
            </Button>
          </Form>
        </Content>

        <span>
          Esqueceu seu login ou senha?
          <br />
          Clique
          <Link to="/signup">aqui</Link>
        </span>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
