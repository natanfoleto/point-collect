import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logoImg from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logoImg} alt="GoRecicle"/>

      <Form onSubmit={handleSubmit}>
        <Input 
          name="email" 
          type="email" 
          placeholder="Seu e-mail" 
          autoComplete="off" 
          required
        />
        <Input 
          name="password" 
          type="password" 
          placeholder="Sua senha secreta" 
          autoComplete="off" 
          required
        />

        <button type="submit">{ loading ? 'Carregando...' : 'Acessar' }</button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
