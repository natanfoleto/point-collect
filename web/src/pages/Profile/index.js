import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.collector.profile);
  console.log(profile);

  function handleSubmit() {

  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} autoComplete="off">
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="seu endereço de e-mail" />

        <hr />

        <Input name="oldPasswrod" type="password" placeholder="Sua senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input name="confirmPasswrod" type="password" placeholder="Confirmação de senha" />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do GoRecicle</button>
    </Container>
  );
}
