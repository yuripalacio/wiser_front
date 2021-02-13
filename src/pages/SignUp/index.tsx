import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, Background, Wrapper, Content } from './styles';

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ISignUpFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório;'),
          email: Yup.string()
            .required('E-mail obrigatório;')
            .email('Digite um e-mail válido;'),
          password: Yup.string().min(
            6,
            'A senha deve ter no mínimo 6 dígitos;',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        const { name, email, password } = data;

        await api.post('/users', {
          name,
          email,
          password,
        });

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description:
              'Ocorreu um erro ao tentar se cadastrar, por favor tente novamente.',
          });
        }
      } finally {
        setLoading(false);
      }
    },
    [history, addToast],
  );

  return (
    <Container>
      <Background />
      <Wrapper>
        <Content>
          <h1>Faça o seu cadastro!</h1>
          <span>Crie uma conta para acessar a plataforma.</span>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" legend="NOME" placeholder="Nome Sobrenome" />
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
              CADASTRAR
            </Button>
          </Form>
        </Content>

        <span>
          <Link to="/">Voltar</Link>
        </span>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
