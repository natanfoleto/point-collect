import React, { useRef, useState, useCallback } from 'react';
import { Image, Alert } from 'react-native'
import * as yup from 'yup';
import { FormHandles } from '@unform/core';

import logo from '../../assets/logo.png';

import ButtonBar from '../../components/ButtonBar';

import {
  Container, FormInput, SignLink,
  SignLinkText, SubmitButton, FormRocket
}
  from './styles';



export default function Home({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const formRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit() {
    console.log(email, senha);
  }

  return (
    <>
      <Container>

        <Image source={logo} />

        <FormRocket ref={formRef} onSubmit={handleSubmit}>

          <FormInput
            id="email"
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            id="senha"
            secureTextEntry
            autoCorrect={false}
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={senha}
            onChangeText={setSenha}
          >

            <ButtonBar icon="remove-red-eye" cor="#4BCB56" tamanho={22} />

          </FormInput>


          <SubmitButton onPress={()=> {
            formRef.current?.submitForm();
          }}>
            ENTRAR
          </SubmitButton>

        </FormRocket>


        <SignLink onPress={() => { navigation.navigate('SignUp') }} >
          <SignLinkText> Cadastre-se </SignLinkText>
        </SignLink>

        <SignLink onPress={() => { navigation.navigate('ResetPassword') }} >
          <SignLinkText> Esqueceu sua senha? </SignLinkText>
        </SignLink>
      </Container>
    </>

  );
}