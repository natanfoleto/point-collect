import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/collector/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.collector.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
    
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} autoComplete="off">
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="seu endereço de e-mail" />

        <hr />

        <Input name="oldPasswrod" type="password" placeholder="Sua senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input name="confirmPasswrod" type="password" placeholder="Confirmação de senha" />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button 
        type="button"
        onClick={handleSignOut}
      >
        Sair do GoRecicle
      </button>
    </Container>
  );
}
