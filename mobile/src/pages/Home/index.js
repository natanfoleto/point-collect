import React, {useRef, useState} from 'react';
import { Image } from 'react-native'


import logo from '../../assets/logo.png';

import ButtonBar from '../../components/ButtonBar';

import { Container, Form, FormInput, SignLink,
  SignLinkText, SubmitButton }
from './styles';



export default function Home({ navigation }) {

  const passwordRef = useRef();

  function handleSubmit(){  }

  return (
    <>
      <Container>

        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          >

            <ButtonBar icon="remove-red-eye" cor="#4BCB56" tamanho={22} />

          </FormInput>


          <SubmitButton onPress={() => {navigation.navigate('Maps')}}>
            ENTRAR
          </SubmitButton>

        </Form>

        <SignLink onPress={() => {navigation.navigate('SignUp')}} >
          <SignLinkText> Cadastre-se </SignLinkText>
        </SignLink>

        <SignLink onPress={() => {navigation.navigate('ResetPassword')}} >
          <SignLinkText> Esqueceu sua senha? </SignLinkText>
        </SignLink>
      </Container>
    </>

  );
}