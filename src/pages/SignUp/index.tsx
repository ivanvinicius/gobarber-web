import React, { useCallback } from 'react';
import { FiUser, FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(
    async ({ name, email, password }: ISignUpFormData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().email('E-mail precisa ser válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate({ name, email, password }, { abortEarly: false });
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/signin">
          <FiArrowLeft />
          Voltar ao logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
